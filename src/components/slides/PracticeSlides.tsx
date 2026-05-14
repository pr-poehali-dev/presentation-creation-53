import { useState } from "react";
import Icon from "@/components/ui/icon";
import SlideHeader from "@/components/SlideHeader";

const DESSERT_IMAGE = "https://cdn.poehali.dev/projects/436630c1-5a0c-4fc7-95ee-2c5bd439a41a/files/7c8ec60f-507c-4bbe-a026-a9aaa6698330.jpg";

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

  const toggle = (i: number) => {
    setSelected(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Рефлексия" subtitle="Нажмите на фразу, чтобы выбрать её и высказаться" />
      <div style={{ flex: 1, display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {phrases.map((p, i) => {
            const active = selected.includes(i);
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                style={{
                  display: "flex", gap: "10px", alignItems: "center",
                  padding: "10px 14px",
                  border: active ? "2px solid #c9a84c" : "1px solid #e8edf4",
                  borderRadius: "6px",
                  background: active ? "linear-gradient(135deg, #fdf5e0 0%, #fef9ec 100%)" : "#fff",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  transform: active ? "scale(1.02)" : "scale(1)",
                  boxShadow: active ? "0 4px 12px rgba(201,168,76,0.2)" : "none",
                }}
              >
                <span style={{ fontSize: "18px", flexShrink: 0, filter: active ? "none" : "grayscale(0.4)" }}>{p.emoji}</span>
                <span style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "12px",
                  color: active ? "#7a5a10" : "#3d5278",
                  fontWeight: active ? 600 : 400,
                  transition: "all 0.2s ease",
                  flex: 1,
                }}>{p.text}</span>
                {active && (
                  <Icon name="CheckCircle" size={14} style={{ color: "#c9a84c", flexShrink: 0 }} />
                )}
              </button>
            );
          })}
        </div>

        <div style={{ width: "180px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ background: "#0f2347", borderRadius: "6px", padding: "16px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ color: "#c9a84c", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: "10px" }}>Итог</p>
              <p style={{ color: "#cbd5e1", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", lineHeight: 1.7 }}>
                Каждый обучающийся оценивает свой вклад, активность и эффективность работы в группе.
              </p>
            </div>
            <div style={{ marginTop: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                <p style={{ color: "#9aaabe", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", margin: 0 }}>Активность</p>
                <p style={{ color: "#c9a84c", fontFamily: "'Cormorant', serif", fontSize: "18px", fontWeight: 700, margin: 0 }}>
                  {Math.round((selected.length / phrases.length) * 100)}%
                </p>
              </div>
              <div style={{ height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: `${(selected.length / phrases.length) * 100}%`,
                  background: selected.length === phrases.length
                    ? "linear-gradient(90deg, #c9a84c, #f0c060)"
                    : "#c9a84c",
                  borderRadius: "3px",
                  transition: "width 0.4s ease",
                }} />
              </div>
              <p style={{ color: "#64748b", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", margin: "6px 0 0", textAlign: "center" }}>
                {selected.length === 0 && "нажмите на фразу"}
                {selected.length > 0 && selected.length < phrases.length && `${selected.length} из ${phrases.length} фраз`}
                {selected.length === phrases.length && "все фразы! 🎉"}
              </p>
            </div>
            <div style={{ marginTop: "10px" }}>
              <p style={{ color: "#475569", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", margin: "0 0 2px" }}>Лазарева М.Г.</p>
              <p style={{ color: "#475569", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", margin: 0 }}>Сердюкова О.П.</p>
            </div>
          </div>
          <div style={{ border: "1px solid #c9a84c", borderRadius: "6px", padding: "10px", textAlign: "center" }}>
            <p style={{ color: "#c9a84c", fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "15px", margin: 0 }}>«Спасибо за участие!»</p>
          </div>
        </div>
      </div>
    </div>
  );
}