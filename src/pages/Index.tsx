import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const DESSERT_IMAGE = "https://cdn.poehali.dev/projects/436630c1-5a0c-4fc7-95ee-2c5bd439a41a/files/7c8ec60f-507c-4bbe-a026-a9aaa6698330.jpg";

const slides = [
  { id: 0 }, { id: 1 }, { id: 2 }, { id: 3 },
  { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 },
];

function SlideHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ borderBottom: "1px solid #e8edf4", paddingBottom: "16px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <h2 style={{ fontSize: "28px", fontFamily: "'Cormorant', serif", fontWeight: 600, color: "#0f1f3d", margin: 0 }}>{title}</h2>
          {subtitle && <p style={{ color: "#9aaabe", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", marginTop: "4px", letterSpacing: "0.05em" }}>{subtitle}</p>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontFamily: "'IBM Plex Sans', sans-serif", color: "#c5d0de" }}>
          <span>ГБПОУ «ВКРСТ»</span><span>·</span><span>43.02.15</span>
        </div>
      </div>
    </div>
  );
}

function SlideTitle() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", position: "relative", background: "linear-gradient(135deg, #0a1628 0%, #0f2347 50%, #0a1628 100%)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${DESSERT_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.12 }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
      <div style={{ position: "relative", zIndex: 1, padding: "0 64px", maxWidth: "820px" }}>
        <div style={{ marginBottom: "28px" }}>
          <p style={{ color: "#c9a84c", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 500 }}>Комитет образования и науки Волгоградской области</p>
          <div style={{ width: "80px", height: "1px", background: "#c9a84c", opacity: 0.5, margin: "10px auto" }} />
          <p style={{ color: "#94a3b8", fontSize: "10px", letterSpacing: "0.12em", fontFamily: "'IBM Plex Sans', sans-serif" }}>ГБПОУ «Волгоградский колледж ресторанного сервиса и торговли»</p>
        </div>
        <p style={{ color: "#94a3b8", fontSize: "11px", fontFamily: "'IBM Plex Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "16px" }}>Методическая разработка внеурочного мероприятия</p>
        <h1 style={{ fontSize: "42px", fontFamily: "'Cormorant', serif", fontWeight: 600, color: "#ffffff", lineHeight: 1.2, margin: 0 }}>Современные тенденции</h1>
        <h1 style={{ fontSize: "42px", fontFamily: "'Cormorant', serif", fontWeight: 300, color: "#c9a84c", fontStyle: "italic", lineHeight: 1.2, margin: "4px 0 0" }}>в кондитерском искусстве</h1>
        <div style={{ width: "100px", height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", margin: "28px auto" }} />
        <p style={{ color: "#cbd5e1", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px" }}><span style={{ color: "#c9a84c" }}>Разработано:</span> Лазарева М.Г., Сердюкова О.П.</p>
        <p style={{ color: "#94a3b8", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px", marginTop: "4px" }}>Специальность 43.02.15 «Поварское и кондитерское дело»</p>
        <p style={{ color: "#64748b", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", letterSpacing: "0.2em", marginTop: "10px" }}>ВОЛГОГРАД, 2026</p>
      </div>
    </div>
  );
}

function SlideContents() {
  const items = [
    "Пояснительная записка", "Цели и задачи мероприятия", "План мероприятия",
    "Техника Revisée", "Практическая часть", "Алгоритм приготовления десерта", "Рефлексия",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Содержание" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "24px" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 16px", border: "1px solid #e8edf4", borderRadius: "2px" }}>
            <span style={{ fontFamily: "'Cormorant', serif", fontSize: "28px", fontWeight: 300, color: "#c9a84c", opacity: 0.7, minWidth: "36px" }}>{String(i + 1).padStart(2, "0")}</span>
            <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: "#1e2d4d", fontWeight: 500, lineHeight: 1.3 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideIntro() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Пояснительная записка" />
      <div style={{ flex: 1, display: "flex", gap: "32px", marginTop: "24px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "16px" }}>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px", color: "#3d5278", lineHeight: 1.7 }}>
              Методическая разработка актуальна для педагогических работников, реализующих профессиональные образовательные программы по специальности <strong style={{ color: "#0f1f3d" }}>43.02.15 Поварское и кондитерское дело</strong>.
            </p>
          </div>
          <div style={{ borderLeft: "3px solid #e8edf4", paddingLeft: "16px" }}>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#3d5278", lineHeight: 1.6, marginBottom: "8px" }}>Охватывает профессиональные модули:</p>
            {["ПМ 04 — приготовление и оформление холодных и горячих десертов, напитков сложного ассортимента", "ПМ 08 — выполнение работ по профессии «Кондитер»"].map((m, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
                <span style={{ color: "#c9a84c", flexShrink: 0 }}>▸</span>
                <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#4a607f" }}>{m}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#f7f9fc", padding: "16px", border: "1px solid #e8edf4", borderRadius: "2px" }}>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", color: "#9aaabe", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>Активные методы обучения</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {["Мастер-класс преподавателей", "Выступления студентов", "Обучающая презентация", "Изготовление десерта"].map((m, i) => (
                <div key={i} style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c9a84c", fontSize: "16px", lineHeight: 1 }}>·</span>
                  <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#3d5278" }}>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: "200px", flexShrink: 0 }}>
          <div style={{ height: "100%", borderRadius: "2px", overflow: "hidden", border: "1px solid #e8edf4" }}>
            <img src={DESSERT_IMAGE} alt="Десерт" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideGoals() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Цели и задачи" />
      <div style={{ flex: 1, display: "flex", gap: "24px", marginTop: "24px" }}>
        <div style={{ flex: "0 0 220px" }}>
          <div style={{ background: "#0f2347", borderRadius: "2px", padding: "24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ color: "#c9a84c", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.25em", fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: "16px" }}>Цель мероприятия</p>
              <p style={{ color: "#ffffff", fontFamily: "'Cormorant', serif", fontSize: "20px", fontWeight: 300, lineHeight: 1.4, fontStyle: "italic" }}>«Изучение современных видов оформления и подачи десертов»</p>
            </div>
            <div style={{ width: "48px", height: "1px", background: "#c9a84c", opacity: 0.5, marginTop: "16px" }} />
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", color: "#9aaabe", textTransform: "uppercase", letterSpacing: "0.15em" }}>Задачи</p>
          {[
            { icon: "BookOpen", label: "Обучающая", text: "Расширить знания участников в оформлении и подаче десертов. Развить основные умения и творческий потенциал." },
            { icon: "Palette", label: "Развивающая", text: "Способствовать развитию мыслительной деятельности и творческих способностей обучающихся." },
            { icon: "Users", label: "Воспитательная", text: "Воспитывать понимание социальной значимости профессии и умение работать в коллективе." }
          ].map((task) => (
            <div key={task.label} style={{ display: "flex", gap: "12px", padding: "14px 16px", border: "1px solid #e8edf4", borderRadius: "2px" }}>
              <div style={{ width: "32px", height: "32px", background: "#fdf5e0", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={task.icon} fallback="Star" size={15} style={{ color: "#c9a84c" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#0f1f3d", marginBottom: "4px" }}>{task.label}</p>
                <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#4a607f", lineHeight: 1.6 }}>{task.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlidePlan() {
  const steps = [
    { time: "5 мин", phase: "Организационный момент", items: ["Приветствие и представление участников", "Сообщение темы и целей"] },
    { time: "10 мин", phase: "Теоретическая часть", items: ["Техника Revisée", "Демонстрация готовых десертов", "Сравнение современной и классической подачи", "Вопросы и ответы"] },
    { time: "25 мин", phase: "Практическая часть", items: ["Разделение на группы по темам", "Пошаговое руководство", "Индивидуальная работа"] },
    { time: "5 мин", phase: "Подведение итогов", items: ["Рефлексия", "Оценка работ участников"] },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="План мероприятия" subtitle="Общая продолжительность: 45 минут" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "24px" }}>
        {steps.map((step, i) => (
          <div key={i} style={{ border: "1px solid #e8edf4", borderRadius: "2px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", color: "#9aaabe", textTransform: "uppercase", letterSpacing: "0.1em" }}>Этап {i + 1}</span>
              <span style={{ background: "#c9a84c", color: "#fff", fontSize: "10px", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, padding: "2px 8px", borderRadius: "2px" }}>{step.time}</span>
            </div>
            <p style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "18px", color: "#0f1f3d", margin: 0 }}>{step.phase}</p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
              {step.items.map((item, j) => (
                <li key={j} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c9a84c", flexShrink: 0, fontSize: "10px" }}>▸</span>
                  <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#4a607f", lineHeight: 1.4 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideTechnique() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Техника Revisée" subtitle="Пересмотр существующего десерта в новой обработке" />
      <div style={{ flex: 1, display: "flex", gap: "28px", marginTop: "24px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ background: "#f7f9fc", border: "1px solid #e8edf4", borderRadius: "2px", padding: "16px" }}>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", color: "#c9a84c", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "10px" }}>Что такое «обманка» в гастрономии?</p>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px", color: "#3d5278", lineHeight: 1.7 }}>
              Блюда, внешне напоминающие другие предметы. Термин <em>«тромплёй» (trompe-l'oeil)</em> — из французского языка. Обозначает совокупность приёмов, создающих иллюзию невозможного.
            </p>
          </div>
          <div style={{ borderLeft: "3px solid #c9a84c", paddingLeft: "16px" }}>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", color: "#9aaabe", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>История возникновения</p>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#3d5278", lineHeight: 1.6 }}>
              Идея зародилась в кулинарных школах <strong>более 200 лет назад</strong>. Первые марципановые фигурки появились в Любеке (фирма Niederegger J.G., с 1806 г.). В России фабрикант Алексей Абрикосов развлекал высший свет марципановыми копиями котлет и картошки.
            </p>
          </div>
          <div style={{ borderLeft: "3px solid #e8edf4", paddingLeft: "16px" }}>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", color: "#9aaabe", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Пример для мастер-класса</p>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#3d5278", lineHeight: 1.6 }}>
              Пирожное <strong>«Картошка»</strong> в современной подаче. Состав: бисквит, какао, сливочное масло, сгущённое молоко, коньяк, ром, ваниль.
            </p>
          </div>
        </div>
        <div style={{ width: "200px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ flex: 1, borderRadius: "2px", overflow: "hidden", border: "1px solid #e8edf4" }}>
            <img src={DESSERT_IMAGE} alt="Техника Revisée" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ background: "#0f2347", borderRadius: "2px", padding: "10px 14px", textAlign: "center" }}>
            <p style={{ color: "#c9a84c", fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "13px", margin: 0 }}>"Классика в новой интерпретации"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlidePractice() {
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

function SlideAlgorithm() {
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
        <div style={{ width: "200px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ height: "180px", borderRadius: "2px", overflow: "hidden", border: "1px solid #e8edf4" }}>
            <img src={DESSERT_IMAGE} alt="Готовый десерт" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ background: "#c9a84c", borderRadius: "2px", padding: "12px 14px", textAlign: "center" }}>
            <p style={{ color: "#ffffff", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", fontWeight: 500, margin: 0, lineHeight: 1.4 }}>Готовый десерт — результат творческой работы</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideReflection() {
  const phrases = [
    "Я узнал, что…", "Было интересно…", "Было трудно…", "Я выполнял задание…",
    "Я понял, что…", "Теперь я могу…", "Я приобрел…", "Я научился…", "Я смог…", "Я попробую…",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Рефлексия" subtitle="Обучающиеся высказываются одним предложением, выбирая начало фразы" />
      <div style={{ flex: 1, display: "flex", gap: "24px", marginTop: "24px" }}>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {phrases.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center", padding: "10px 14px", border: "1px solid #e8edf4", borderRadius: "2px" }}>
              <span style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, fontSize: "20px", color: "#c9a84c", minWidth: "24px" }}>{i + 1}</span>
              <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px", color: "#3d5278" }}>{p}</span>
            </div>
          ))}
        </div>
        <div style={{ width: "200px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ background: "#0f2347", borderRadius: "2px", padding: "20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ color: "#c9a84c", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: "12px" }}>Итог мероприятия</p>
              <p style={{ color: "#cbd5e1", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", lineHeight: 1.7 }}>
                Каждый обучающийся оценивает свой вклад в достижение поставленных целей, свою активность и эффективность работы группы.
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p style={{ color: "#64748b", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px" }}>Лазарева М.Г.</p>
              <p style={{ color: "#64748b", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px" }}>Сердюкова О.П.</p>
            </div>
          </div>
          <div style={{ border: "1px solid #c9a84c", borderRadius: "2px", padding: "12px", textAlign: "center" }}>
            <p style={{ color: "#c9a84c", fontFamily: "'Cormorant', serif", fontStyle: "italic", fontSize: "16px", margin: 0 }}>«Спасибо за участие!»</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const total = slides.length;

  const go = (to: number, dir: "next" | "prev") => {
    if (animating || to < 0 || to >= total) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(to);
      setAnimating(false);
    }, 260);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(current + 1, "next");
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(current - 1, "prev");
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); toggleFullscreen(); }
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, animating, isFullscreen]);

  const renderSlide = () => {
    switch (current) {
      case 0: return <SlideTitle />;
      case 1: return <SlideContents />;
      case 2: return <SlideIntro />;
      case 3: return <SlideGoals />;
      case 4: return <SlidePlan />;
      case 5: return <SlideTechnique />;
      case 6: return <SlidePractice />;
      case 7: return <SlideAlgorithm />;
      case 8: return <SlideReflection />;
      default: return null;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: isFullscreen ? "#000" : "#d1d8e3", display: "flex", alignItems: "center", justifyContent: "center", padding: isFullscreen ? "0" : "16px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <div style={{ width: "100%", maxWidth: isFullscreen ? "100vw" : "960px" }}>
        {/* Slide */}
        <div style={{ position: "relative", background: "#fff", borderRadius: "3px", boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.12)", overflow: "hidden", aspectRatio: "16/9" }}>
          {/* Progress */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#e8edf4", zIndex: 20 }}>
            <div style={{ height: "100%", background: "#c9a84c", width: `${((current + 1) / total) * 100}%`, transition: "width 0.4s ease" }} />
          </div>
          {/* Slide number + fullscreen */}
          <div style={{ position: "absolute", top: "10px", right: "14px", zIndex: 20, display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#c5d0de" }}>
              <span style={{ color: "#6b82a0", fontWeight: 500 }}>{current + 1}</span>/<span>{total}</span>
            </span>
            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? "Выйти из полного экрана (Esc)" : "Полный экран (F)"}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "26px", height: "26px", background: "rgba(0,0,0,0.06)", border: "none", borderRadius: "4px", cursor: "pointer", color: "#6b82a0" }}
            >
              <Icon name={isFullscreen ? "Minimize2" : "Maximize2"} size={13} />
            </button>
          </div>
          {/* Content */}
          <div style={{
            position: "absolute", inset: 0,
            opacity: animating ? 0 : 1,
            transform: animating ? (direction === "next" ? "translateX(18px)" : "translateX(-18px)") : "translateX(0)",
            transition: "opacity 0.26s ease, transform 0.26s ease"
          }}>
            {renderSlide()}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "16px", padding: "0 4px" }}>
          <button
            onClick={() => go(current - 1, "prev")}
            disabled={current === 0}
            style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: current === 0 ? "#c5d0de" : "#3d5278", background: "none", border: "none", cursor: current === 0 ? "not-allowed" : "pointer" }}
          >
            <Icon name="ChevronLeft" size={16} />
            Назад
          </button>

          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > current ? "next" : "prev")}
                style={{
                  height: "6px",
                  width: i === current ? "24px" : "6px",
                  borderRadius: "3px",
                  background: i === current ? "#c9a84c" : "#c5d0de",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(current + 1, "next")}
            disabled={current === total - 1}
            style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "13px", color: current === total - 1 ? "#c5d0de" : "#3d5278", background: "none", border: "none", cursor: current === total - 1 ? "not-allowed" : "pointer" }}
          >
            Далее
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>

        {!isFullscreen && (
          <p style={{ textAlign: "center", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#9aaabe", marginTop: "8px" }}>
            Управление: стрелки клавиатуры · <kbd style={{ background: "#e8edf4", padding: "1px 5px", borderRadius: "3px", fontSize: "10px" }}>F</kbd> — полный экран
          </p>
        )}
      </div>
    </div>
  );
}