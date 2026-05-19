import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import SlideHeader from "@/components/SlideHeader";
import { QRCodeSVG } from "qrcode.react";

const ANSWERS_API = "https://functions.poehali.dev/fe5010b3-d20c-47d9-a488-3e4569b79e07";

const DESSERT_IMAGE = "https://cdn.poehali.dev/projects/436630c1-5a0c-4fc7-95ee-2c5bd439a41a/files/7c8ec60f-507c-4bbe-a026-a9aaa6698330.jpg";

export function SlideQuiz() {
  const questions = [
    {
      q: "Что такое техника Revisée в кондитерском деле?",
      options: ["Способ выпечки при низкой температуре", "Французская техника современного оформления десертов", "Метод темперирования шоколада", "Рецептура пирожного «Картошка»"],
      correct: 1,
    },
    {
      q: "Какой профессиональный модуль охватывает приготовление десертов?",
      options: ["ПМ 01", "ПМ 06", "ПМ 04", "ПМ 09"],
      correct: 2,
    },
    {
      q: "Первый шаг алгоритма приготовления пирожного «Картошка»?",
      options: ["Раскатать тесто", "Взбить сливки", "Подготовить рабочее место и инвентарь", "Растопить шоколад"],
      correct: 2,
    },
  ];

  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const pick = (qi: number, oi: number) => {
    if (submitted) return;
    setAnswers(prev => { const a = [...prev]; a[qi] = oi; return a; });
  };

  const answered = answers.filter(a => a !== null).length;
  const correct = submitted ? answers.filter((a, i) => a === questions[i].correct).length : 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Проверь себя" subtitle="Выбери правильный ответ на каждый вопрос" />
      <div style={{ flex: 1, display: "flex", gap: "20px", marginTop: "18px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
          {questions.map((q, qi) => (
            <div key={qi}>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px", fontWeight: 600, color: "#1e2d4d", margin: "0 0 8px" }}>
                <span style={{ color: "#c9a84c", marginRight: "6px" }}>{qi + 1}.</span>{q.q}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                {q.options.map((opt, oi) => {
                  const picked = answers[qi] === oi;
                  const isCorrect = oi === q.correct;
                  let bg = picked ? "linear-gradient(135deg,#fdf5e0,#fef9ec)" : "#f7f9fc";
                  let border = picked ? "2px solid #c9a84c" : "1px solid #e8edf4";
                  let color = picked ? "#7a5a10" : "#3d5278";
                  if (submitted && picked && !isCorrect) { bg = "#fff0f0"; border = "2px solid #e05a5a"; color = "#a83232"; }
                  if (submitted && isCorrect) { bg = "#f0faf4"; border = "2px solid #4caf80"; color = "#1a6641"; }
                  return (
                    <button key={oi} onClick={() => pick(qi, oi)} style={{
                      display: "flex", alignItems: "center", gap: "8px", padding: "7px 10px",
                      border, borderRadius: "5px", background: bg, cursor: submitted ? "default" : "pointer",
                      textAlign: "left", transition: "all 0.18s ease",
                    }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "50%", border: `1.5px solid ${picked ? "#c9a84c" : "#c5d0de"}`, background: picked ? "#c9a84c" : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {submitted && isCorrect && <Icon name="Check" size={10} style={{ color: "#fff" }} />}
                        {submitted && picked && !isCorrect && <Icon name="X" size={10} style={{ color: "#fff" }} />}
                      </span>
                      <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color, lineHeight: 1.3 }}>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div style={{ width: "160px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ background: "#0f2347", borderRadius: "6px", padding: "16px", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            {!submitted ? (
              <>
                <div style={{ textAlign: "center" }}>
                  <p style={{ color: "#c9a84c", fontFamily: "'Cormorant', serif", fontSize: "36px", fontWeight: 700, margin: 0 }}>{answered}</p>
                  <p style={{ color: "#64748b", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", margin: 0 }}>из {questions.length} ответов</p>
                </div>
                <button
                  onClick={() => answered === questions.length && setSubmitted(true)}
                  style={{
                    width: "100%", padding: "10px", borderRadius: "5px", border: "none",
                    background: answered === questions.length ? "#c9a84c" : "rgba(201,168,76,0.2)",
                    color: answered === questions.length ? "#0f1f3d" : "#64748b",
                    fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px", fontWeight: 600,
                    cursor: answered === questions.length ? "pointer" : "not-allowed",
                    transition: "all 0.2s",
                  }}
                >Проверить</button>
              </>
            ) : (
              <>
                <p style={{ color: "#c9a84c", fontFamily: "'Cormorant', serif", fontSize: "42px", fontWeight: 700, margin: 0 }}>{correct}/{questions.length}</p>
                <p style={{ color: correct === questions.length ? "#4caf80" : correct >= 2 ? "#c9a84c" : "#e05a5a", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", textAlign: "center", margin: 0 }}>
                  {correct === questions.length ? "Отлично! 🎉" : correct >= 2 ? "Хорошо! 👍" : "Попробуй ещё раз"}
                </p>
                <button onClick={() => { setAnswers(Array(questions.length).fill(null)); setSubmitted(false); }} style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #c9a84c", background: "transparent", color: "#c9a84c", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", cursor: "pointer" }}>
                  Повторить
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SlidePractice() {
  const themes = [
    { emoji: "🌸", title: "8 марта", desc: "Весенние мотивы, нежные цвета, цветочные элементы" },
    { emoji: "💝", title: "14 февраля", desc: "Романтические акценты, сердца, красные оттенки" },
    { emoji: "🎂", title: "День рождения", desc: "Праздничное оформление, яркие декоративные элементы" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Практическая часть" subtitle="Десерт в стаканчике — групповая работа" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
          {themes.map((t) => (
            <div key={t.title} style={{ border: "1px solid #e8edf4", borderRadius: "2px", padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "10px" }}>{t.emoji}</div>
              <p style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "20px", color: "#0f1f3d", margin: "0 0 8px" }}>{t.title}</p>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#6b82a0", lineHeight: 1.5 }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "#f7f9fc", border: "1px solid #e8edf4", borderRadius: "2px", padding: "16px" }}>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", color: "#c9a84c", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "12px" }}>Раздаточный материал</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px" }}>
            {["Одноразовые стаканчики", "Бисквитный полуфабрикат", "Ягодная начинка", "Кондитерские мешки с кремом"].map((m, i) => (
              <div key={i} style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
                <Icon name="CheckCircle" size={13} style={{ color: "#c9a84c", flexShrink: 0, marginTop: "1px" }} />
                <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#3d5278" }}>{m}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ border: "1px dashed #c5d0de", borderRadius: "2px", padding: "12px", textAlign: "center" }}>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#6b82a0", margin: 0 }}>
            Участники делятся на группы по <strong style={{ color: "#0f1f3d" }}>3–4 человека</strong> и работают под руководством преподавателей
          </p>
        </div>
      </div>
    </div>
  );
}

export function SlideAlgorithm() {
  const steps = [
    "На дно стаканчика всыпаем выпечной полуфабрикат (бисквитную крошку)",
    "Поверх выпечного полуфабриката выкладываем ягодную начинку",
    "Поверх ягодной начинки отсаживаем крем из кондитерского мешка",
    "Повторяем слои так, чтобы верхний слой оставался кремовым",
    "Выравниваем палеткой (спатулой) крем на поверхности",
    "Наносим рисунок и декор согласно выбранной тематике",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Алгоритм приготовления" subtitle="Десерт в стаканчике — пошаговое руководство" />
      <div style={{ flex: 1, display: "flex", gap: "28px", marginTop: "24px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", paddingBottom: "10px", borderBottom: i < steps.length - 1 ? "1px solid #f0f3f8" : "none" }}>
              <div style={{ width: "30px", height: "30px", borderRadius: "50%", border: "2px solid #c9a84c", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "13px", color: "#c9a84c" }}>{i + 1}</span>
              </div>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px", color: "#3d5278", lineHeight: 1.6, margin: "4px 0 0" }}>{step}</p>
            </div>
          ))}
        </div>
        <div style={{ width: "260px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ flex: 1, borderRadius: "2px", overflow: "hidden", border: "1px solid #e8edf4", background: "#000", minHeight: "160px" }}>
            <iframe
              src="https://www.youtube.com/embed/XIUJUrp5_x8?rel=0&modestbranding=1"
              title="Пирожное Картошка"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: "none", minHeight: "160px" }}
            />
          </div>
          <div style={{ background: "#0f2347", borderRadius: "2px", padding: "8px 12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Icon name="Play" size={12} style={{ color: "#c9a84c", flexShrink: 0 }} />
            <p style={{ color: "#cbd5e1", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", fontWeight: 400, margin: 0, lineHeight: 1.4 }}>Видео: приготовление пирожного «Картошка»</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type Answer = { id: number; name: string; group: string; phrases: { phrase: string; text: string }[]; stars: number };

export function SlideReflection() {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [lastCount, setLastCount] = useState(0);
  const [newIds, setNewIds] = useState<Set<number>>(new Set());
  const reflectionUrl = `${window.location.origin}/reflection`;

  const fetchAnswers = async () => {
    try {
      const res = await fetch(ANSWERS_API);
      const data = await res.json();
      const list: Answer[] = data.answers || [];
      if (list.length > lastCount) {
        const existingIds = new Set(answers.map(a => a.id));
        const fresh = new Set(list.filter(a => !existingIds.has(a.id)).map(a => a.id));
        setNewIds(fresh);
        setTimeout(() => setNewIds(new Set()), 2000);
      }
      setLastCount(list.length);
      setAnswers(list);
    } catch (e) { /* ignore */ }
  };

  useEffect(() => {
    fetchAnswers();
    const interval = setInterval(fetchAnswers, 4000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClear = async () => {
    await fetch(ANSWERS_API, { method: "DELETE" });
    setAnswers([]);
    setLastCount(0);
  };

  const starLabels = ["Плохо", "Удовл.", "Хорошо", "Отлично", "Отлично!"];
  const avgStars = answers.length ? (answers.reduce((s, a) => s + (a.stars || 0), 0) / answers.length).toFixed(1) : "—";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "24px 36px", background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
        <div>
          <p style={{ color: "#c9a84c", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: "'IBM Plex Sans', sans-serif", margin: "0 0 4px" }}>Слайд 17</p>
          <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "26px", fontWeight: 600, color: "#0f1f3d", margin: 0 }}>Рефлексия</h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ background: "#0f2347", borderRadius: "8px", padding: "8px 14px", display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#9aaabe", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "9px", textTransform: "uppercase", margin: "0 0 2px" }}>Ответов</p>
              <p style={{ color: "#c9a84c", fontFamily: "'Cormorant', serif", fontSize: "22px", fontWeight: 700, margin: 0 }}>{answers.length}</p>
            </div>
            <div style={{ width: "1px", height: "30px", background: "rgba(255,255,255,0.1)" }} />
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#9aaabe", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "9px", textTransform: "uppercase", margin: "0 0 2px" }}>Оценка</p>
              <p style={{ color: "#f0c060", fontFamily: "'Cormorant', serif", fontSize: "22px", fontWeight: 700, margin: 0 }}>★ {avgStars}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            <div style={{ background: "#c9a84c", padding: "8px", borderRadius: "8px", display: "inline-block" }}>
              <QRCodeSVG value={reflectionUrl} size={100} fgColor="#0f2347" bgColor="#c9a84c" />
            </div>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "8px", color: "#9aaabe", margin: 0, textAlign: "center" }}>Сканируй</p>
          </div>
          {answers.length > 0 && (
            <button onClick={handleClear} style={{ background: "none", border: "1px solid #fca5a5", borderRadius: "6px", padding: "4px 8px", cursor: "pointer", color: "#ef4444", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "9px" }}>
              Очистить
            </button>
          )}
        </div>
      </div>

      {answers.length === 0 ? (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <div style={{ width: "60px", height: "60px", border: "2px dashed #e8edf4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="Users" size={24} style={{ color: "#c5d0de" }} />
          </div>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: "#9aaabe", margin: 0 }}>Ожидаем ответы студентов…</p>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#c5d0de", margin: 0 }}>Студенты сканируют QR-код и отвечают с телефона</p>
        </div>
      ) : (
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px", overflowY: "auto", alignContent: "start" }}>
          {answers.map(a => (
            <div key={a.id} style={{
              border: newIds.has(a.id) ? "1.5px solid #c9a84c" : "1px solid #e8edf4",
              borderRadius: "8px", padding: "10px 12px",
              background: newIds.has(a.id) ? "linear-gradient(135deg,#fdf5e0,#fef9ec)" : "#fff",
              transition: "all 0.4s ease",
              boxShadow: newIds.has(a.id) ? "0 4px 14px rgba(201,168,76,0.2)" : "none",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                <div>
                  <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: "11px", color: "#0f1f3d", margin: 0 }}>{a.name}</p>
                  {a.group && <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "9px", color: "#9aaabe", margin: "2px 0 0" }}>{a.group}</p>}
                </div>
                {a.stars > 0 && (
                  <span style={{ fontSize: "11px", color: "#f0c060" }}>{"★".repeat(a.stars)}</span>
                )}
              </div>
              {a.phrases?.filter(p => p.text).map((p, i) => (
                <div key={i} style={{ marginTop: "4px" }}>
                  <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "9px", color: "#c9a84c", margin: "0 0 1px", fontWeight: 600 }}>{p.phrase}</p>
                  <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", color: "#4a607f", margin: 0, lineHeight: 1.4 }}>{p.text}</p>
                </div>
              ))}
              {a.stars > 0 && <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "9px", color: "#9aaabe", margin: "6px 0 0" }}>{starLabels[a.stars - 1]}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}