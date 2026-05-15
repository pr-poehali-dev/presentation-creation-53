import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Принимает рефлексию студента и отправляет её на почту преподавателя marina414@ya.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    group = body.get('group', '').strip()
    phrases = body.get('phrases', [])
    stars = body.get('stars', 0)
    star_labels = ['Плохо', 'Удовлетворительно', 'Хорошо', 'Отлично', 'Превосходно']
    star_text = star_labels[stars - 1] if 1 <= stars <= 5 else 'не указана'

    phrases_html = ''.join(
        f'<tr><td style="padding:6px 12px;color:#4a607f;border-bottom:1px solid #f0f3f8">«{p["phrase"]}»</td>'
        f'<td style="padding:6px 12px;color:#1e2d4d;border-bottom:1px solid #f0f3f8">{p["text"]}</td></tr>'
        for p in phrases if p.get('text')
    ) or '<tr><td colspan="2" style="padding:6px 12px;color:#9aaabe">фразы не заполнены</td></tr>'

    html = f"""
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e8edf4;border-radius:8px;overflow:hidden">
      <div style="background:#0f2347;padding:24px 28px">
        <p style="color:#c9a84c;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 6px">Рефлексия студента</p>
        <h2 style="color:#fff;margin:0;font-size:22px">{name or 'Имя не указано'}</h2>
        <p style="color:#9aaabe;margin:4px 0 0;font-size:13px">Группа: {group or 'не указана'}</p>
      </div>
      <div style="padding:20px 28px">
        <p style="color:#c9a84c;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 10px">Оценка занятия</p>
        <p style="font-size:24px;margin:0 0 20px">{'★' * stars}{'☆' * (5 - stars)} <span style="font-size:13px;color:#4a607f">{star_text}</span></p>
        <p style="color:#c9a84c;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 10px">Незаконченные фразы</p>
        <table style="width:100%;border-collapse:collapse;font-size:12px">{phrases_html}</table>
      </div>
    </div>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Рефлексия: {name or "Студент"} ({group or "группа не указана"})'
    msg['From'] = 'marina414@yandex.ru'
    msg['To'] = 'marina414@ya.ru'
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login('marina414', smtp_password)
        server.sendmail('marina414@yandex.ru', 'marina414@ya.ru', msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
