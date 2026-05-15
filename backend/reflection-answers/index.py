import json
import os
import psycopg2


def get_conn():
    return psycopg2.connect(os.environ['DATABASE_URL'])


def handler(event: dict, context) -> dict:
    """Сохраняет ответ студента в БД или возвращает список всех ответов."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    method = event.get('httpMethod', 'GET')

    if method == 'POST':
        body = json.loads(event.get('body') or '{}')
        name = body.get('name', '').strip()
        group = body.get('group', '').strip()
        phrases = body.get('phrases', [])
        stars = body.get('stars', 0)

        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO reflections (name, student_group, phrases, stars) VALUES (%s, %s, %s, %s) RETURNING id",
            (name, group, json.dumps(phrases, ensure_ascii=False), stars)
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()

        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'ok': True, 'id': new_id})
        }

    if method == 'DELETE':
        conn = get_conn()
        cur = conn.cursor()
        cur.execute("DELETE FROM reflections")
        conn.commit()
        cur.close()
        conn.close()
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'ok': True})
        }

    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT id, name, student_group, phrases, stars, created_at FROM reflections ORDER BY created_at DESC")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    answers = [
        {
            'id': r[0],
            'name': r[1],
            'group': r[2],
            'phrases': r[3] if isinstance(r[3], list) else json.loads(r[3]) if r[3] else [],
            'stars': r[4],
            'created_at': r[5].isoformat() if r[5] else None,
        }
        for r in rows
    ]

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'answers': answers}, ensure_ascii=False)
    }
