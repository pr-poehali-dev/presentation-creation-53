import { useState } from "react";
import Icon from "@/components/ui/icon";
import SlideHeader from "@/components/SlideHeader";

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

const SEND_REFLECTION_URL = "https://functions.poehali.dev/242ce028-c59a-4b0b-a247-37887edf2b96";

export function SlideReflection() {
  const phrases = [
    { text: "Я узнал, что…", emoji: "💡" },
    { text: "Было интересно…", emoji: "✨" },
    { text: "Было трудно…", emoji: "💪" },
    { text: "Я выполнял задание…", emoji: "📝" },
    { text: "Я понял, что…", emoji: "🎯" },
    { text: "Теперь я могу…", emoji: "🚀" },
    { text: "Я приобрел…", emoji: "🏆" },
    { text: "Я научился…", emoji: "📚" },
    { text: "Я смог…", emoji: "⭐" },
    { text: "Я попробую…", emoji: "🌱" },
  ];
  const [selected, setSelected] = useState<number[]>([]);
  const [activePhrase, setActivePhrase] = useState<number | null>(null);
  const [texts, setTexts] = useState<Record<number, string>>({});
  const [stars, setStars] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const toggle = (i: number) => {
    if (selected.includes(i)) {
      setSelected(prev => prev.filter(x => x !== i));
      if (activePhrase === i) setActivePhrase(null);
    } else {
      setSelected(prev => [...prev, i]);
      setActivePhrase(i);
    }
  };

  const starLabels = ["Плохо", "Удовлетворительно", "Хорошо", "Отлично", "Превосходно"];

  const handleSend = async () => {
    if (!name.trim()) { setError("Введите имя"); return; }
    setSending(true);
    setError("");
    try {
      const filledPhrases = selected.map(i => ({ phrase: phrases[i].text, text: texts[i] || "" }));
      const res = await fetch(SEND_REFLECTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), group: group.trim(), stars, phrases: filledPhrases }),
      });
      if (res.ok) { setSent(true); }
      else { setError("Ошибка отправки. Попробуйте ещё раз."); }
    } catch {
      setError("Нет соединения. Попробуйте ещё раз.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "32px 50px", background: "#fff" }}>
      <SlideHeader title="Рефлексия" subtitle="Выберите фразу, допишите мысль и отправьте преподавателю" />
      <div style={{ flex: 1, display: "flex", gap: "18px", marginTop: "16px" }}>
        {/* Phrases grid */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", alignContent: "start" }}>
          {phrases.map((p, i) => {
            const active = selected.includes(i);
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                style={{
                  display: "flex", gap: "8px", alignItems: "center",
                  padding: "8px 12px",
                  border: active ? "2px solid #c9a84c" : "1px solid #e8edf4",
                  borderRadius: "6px",
                  background: active ? "linear-gradient(135deg, #fdf5e0, #fef9ec)" : "#fff",
                  cursor: "pointer", textAlign: "left",
                  transition: "all 0.2s ease",
                  transform: active ? "scale(1.02)" : "scale(1)",
                  boxShadow: active ? "0 3px 10px rgba(201,168,76,0.18)" : "none",
                }}
              >
                <span style={{ fontSize: "16px", flexShrink: 0 }}>{p.emoji}</span>
                <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: active ? "#7a5a10" : "#3d5278", fontWeight: active ? 600 : 400, flex: 1 }}>{p.text}</span>
                {active && <Icon name="CheckCircle" size={13} style={{ color: "#c9a84c", flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>

        {/* Right panel */}
        <div style={{ width: "220px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px" }}>

          {/* Text input */}
          <div style={{ background: "#f7f9fc", border: "1px solid #e8edf4", borderRadius: "6px", padding: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ color: "#9aaabe", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", margin: 0 }}>
              {activePhrase !== null ? phrases[activePhrase].text : "Выберите фразу слева"}
            </p>
            <textarea
              placeholder={activePhrase !== null ? "Напишите свою мысль…" : ""}
              value={activePhrase !== null ? (texts[activePhrase] || "") : ""}
              onChange={e => activePhrase !== null && setTexts(prev => ({ ...prev, [activePhrase]: e.target.value }))}
              disabled={activePhrase === null}
              style={{
                width: "100%", minHeight: "52px", resize: "none",
                fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#1e2d4d",
                border: "1px solid #e8edf4", borderRadius: "4px", padding: "6px 8px",
                background: activePhrase !== null ? "#fff" : "#f0f3f8",
                outline: "none", lineHeight: 1.5, boxSizing: "border-box",
              }}
            />
          </div>

          {/* Stars rating */}
          <div style={{ background: "#0f2347", borderRadius: "6px", padding: "10px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <p style={{ color: "#c9a84c", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: "'IBM Plex Sans', sans-serif", margin: 0 }}>Оцените урок</p>
            <div style={{ display: "flex", gap: "4px" }}>
              {[1, 2, 3, 4, 5].map(s => (
                <button key={s} onClick={() => setStars(s)} onMouseEnter={() => setHoverStar(s)} onMouseLeave={() => setHoverStar(0)}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", fontSize: "20px", transition: "transform 0.15s", transform: (hoverStar || stars) >= s ? "scale(1.2)" : "scale(1)" }}>
                  <span style={{ color: (hoverStar || stars) >= s ? "#f0c060" : "#2d4060" }}>★</span>
                </button>
              ))}
            </div>
            {stars > 0 && <p style={{ color: "#c9a84c", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", margin: 0 }}>{starLabels[stars - 1]}</p>}
          </div>

          {/* Send form */}
          {!sent ? (
            <div style={{ background: "#f7f9fc", border: "1px solid #e8edf4", borderRadius: "6px", padding: "10px", display: "flex", flexDirection: "column", gap: "7px" }}>
              <p style={{ color: "#9aaabe", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", margin: 0 }}>Отправить преподавателю</p>
              <input
                placeholder="Ваше имя *"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ width: "100%", padding: "6px 8px", borderRadius: "4px", border: "1px solid #e8edf4", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#1e2d4d", outline: "none", boxSizing: "border-box", background: "#fff" }}
              />
              <input
                placeholder="Группа"
                value={group}
                onChange={e => setGroup(e.target.value)}
                style={{ width: "100%", padding: "6px 8px", borderRadius: "4px", border: "1px solid #e8edf4", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#1e2d4d", outline: "none", boxSizing: "border-box", background: "#fff" }}
              />
              {error && <p style={{ color: "#e05c5c", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", margin: 0 }}>{error}</p>}
              <button
                onClick={handleSend}
                disabled={sending}
                style={{
                  width: "100%", padding: "8px", borderRadius: "4px",
                  background: sending ? "#e8edf4" : "linear-gradient(135deg,#c9a84c,#e8c96a)",
                  border: "none", cursor: sending ? "not-allowed" : "pointer",
                  fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", fontWeight: 600,
                  color: sending ? "#9aaabe" : "#0f2347",
                  transition: "all 0.2s",
                }}
              >
                {sending ? "Отправляю…" : "Отправить →"}
              </button>
            </div>
          ) : (
            <div style={{ background: "linear-gradient(135deg,#0f2347,#1a3566)", borderRadius: "6px", padding: "14px", textAlign: "center", display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
              <span style={{ fontSize: "28px" }}>✅</span>
              <p style={{ color: "#c9a84c", fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "16px", margin: 0 }}>Отправлено!</p>
              <p style={{ color: "#9aaabe", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", margin: 0 }}>Спасибо за участие</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}