import { useState } from "react";

const API_URL = "https://functions.poehali.dev/fe5010b3-d20c-47d9-a488-3e4569b79e07";

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

export default function Reflection() {
  const [step, setStep] = useState<"form" | "done">("form");
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [stars, setStars] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const starLabels = ["Плохо", "Удовлетворительно", "Хорошо", "Отлично", "Превосходно"];

  const handleSend = async () => {
    if (!name.trim()) { setError("Введите ваше имя"); return; }
    if (selected === null) { setError("Выберите фразу"); return; }
    setSending(true);
    setError("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          group: group.trim(),
          stars,
          phrases: [{ phrase: phrases[selected].text, text: text.trim() }],
        }),
      });
      if (res.ok) setStep("done");
      else setError("Ошибка. Попробуйте ещё раз.");
    } catch {
      setError("Нет соединения.");
    } finally {
      setSending(false);
    }
  };

  if (step === "done") {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0a1628,#0f2347)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "64px", marginBottom: "16px" }}>✅</div>
          <p style={{ fontFamily: "'Cormorant', serif", fontSize: "28px", color: "#c9a84c", fontStyle: "italic", margin: "0 0 8px" }}>Спасибо!</p>
          <p style={{ fontFamily: "sans-serif", fontSize: "14px", color: "#9aaabe" }}>Ваш ответ отправлен преподавателю</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0a1628,#0f2347)", padding: "20px 16px" }}>
      <div style={{ maxWidth: "480px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <p style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif", margin: "0 0 6px" }}>Рефлексия</p>
          <h1 style={{ color: "#fff", fontFamily: "'Cormorant', serif", fontSize: "26px", fontWeight: 600, margin: 0 }}>Поделитесь впечатлением</h1>
        </div>

        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "16px", marginBottom: "12px" }}>
          <p style={{ color: "#9aaabe", fontFamily: "sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>Ваши данные</p>
          <input
            placeholder="Имя и фамилия *"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.08)", color: "#fff", fontFamily: "sans-serif", fontSize: "14px", outline: "none", marginBottom: "8px", boxSizing: "border-box" }}
          />
          <input
            placeholder="Группа"
            value={group}
            onChange={e => setGroup(e.target.value)}
            style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.08)", color: "#fff", fontFamily: "sans-serif", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "16px", marginBottom: "12px" }}>
          <p style={{ color: "#9aaabe", fontFamily: "sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>Выберите фразу *</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {phrases.map((p, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px",
                  borderRadius: "8px", border: selected === i ? "1.5px solid #c9a84c" : "1px solid rgba(255,255,255,0.1)",
                  background: selected === i ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.04)",
                  cursor: "pointer", textAlign: "left",
                }}
              >
                <span style={{ fontSize: "18px" }}>{p.emoji}</span>
                <span style={{ color: selected === i ? "#f0c060" : "#cbd5e1", fontFamily: "sans-serif", fontSize: "13px" }}>{p.text}</span>
              </button>
            ))}
          </div>
          {selected !== null && (
            <textarea
              placeholder="Допишите свою мысль…"
              value={text}
              onChange={e => setText(e.target.value)}
              style={{ width: "100%", marginTop: "10px", padding: "12px", borderRadius: "8px", border: "1px solid rgba(201,168,76,0.4)", background: "rgba(201,168,76,0.08)", color: "#fff", fontFamily: "sans-serif", fontSize: "13px", outline: "none", resize: "none", minHeight: "70px", boxSizing: "border-box" }}
            />
          )}
        </div>

        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "16px", marginBottom: "16px" }}>
          <p style={{ color: "#9aaabe", fontFamily: "sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px", textAlign: "center" }}>Оцените занятие</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "6px" }}>
            {[1, 2, 3, 4, 5].map(s => (
              <button key={s} onClick={() => setStars(s)} onMouseEnter={() => setHoverStar(s)} onMouseLeave={() => setHoverStar(0)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "32px", lineHeight: 1, padding: "4px" }}>
                <span style={{ color: (hoverStar || stars) >= s ? "#f0c060" : "#2d4060" }}>★</span>
              </button>
            ))}
          </div>
          {stars > 0 && <p style={{ color: "#c9a84c", fontFamily: "sans-serif", fontSize: "12px", textAlign: "center", margin: 0 }}>{starLabels[stars - 1]}</p>}
        </div>

        {error && <p style={{ color: "#f87171", fontFamily: "sans-serif", fontSize: "13px", textAlign: "center", marginBottom: "10px" }}>{error}</p>}

        <button
          onClick={handleSend}
          disabled={sending}
          style={{
            width: "100%", padding: "16px", borderRadius: "10px",
            background: sending ? "#334155" : "linear-gradient(135deg,#c9a84c,#e8c96a)",
            border: "none", cursor: sending ? "not-allowed" : "pointer",
            fontFamily: "sans-serif", fontSize: "15px", fontWeight: 700,
            color: sending ? "#64748b" : "#0f2347",
          }}
        >
          {sending ? "Отправляю…" : "Отправить ответ →"}
        </button>
      </div>
    </div>
  );
}
