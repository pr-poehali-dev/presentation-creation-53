import { useState } from "react";
import SlideHeader from "@/components/SlideHeader";

const DESSERT_IMAGE = "https://cdn.poehali.dev/projects/436630c1-5a0c-4fc7-95ee-2c5bd439a41a/files/7c8ec60f-507c-4bbe-a026-a9aaa6698330.jpg";

export function SlideTitle() {
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

export function SlideContents({ onGo }: { onGo?: (slide: number) => void }) {
  const items = [
    { label: "Пояснительная записка", slide: 2 },
    { label: "Цели и задачи мероприятия", slide: 3 },
    { label: "План мероприятия", slide: 4 },
    { label: "Техника Revisée", slide: 5 },
    { label: "Суть подхода", slide: 6 },
    { label: "Ключевые направления пересмотра", slide: 7, sub: "6 направлений" },
    { label: "Практическая часть", slide: 13 },
    { label: "Алгоритм приготовления десерта", slide: 14 },
    { label: "Проверь себя", slide: 15 },
    { label: "Рефлексия", slide: 16 },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Содержание" subtitle="Нажмите на раздел, чтобы перейти к нему" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "20px" }}>
        {items.map((item, i) => {
          const active = hovered === i;
          return (
            <button
              key={i}
              onClick={() => onGo?.(item.slide)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "10px 14px",
                border: active ? "1.5px solid #c9a84c" : "1px solid #e8edf4",
                borderRadius: "4px",
                background: active ? "linear-gradient(135deg,#fdf5e0,#fef9ec)" : "#fff",
                cursor: "pointer", textAlign: "left",
                transition: "all 0.18s ease",
                boxShadow: active ? "0 4px 14px rgba(201,168,76,0.15)" : "none",
                transform: active ? "translateY(-1px)" : "none",
              }}
            >
              <span style={{ fontFamily: "'Cormorant', serif", fontSize: "22px", fontWeight: 300, color: "#c9a84c", opacity: active ? 1 : 0.6, minWidth: "30px", transition: "opacity 0.18s" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ flex: 1 }}>
                <span style={{ display: "block", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px", color: active ? "#7a5a10" : "#1e2d4d", fontWeight: active ? 600 : 500, lineHeight: 1.3, transition: "color 0.18s" }}>
                  {item.label}
                </span>
                {"sub" in item && item.sub && (
                  <span style={{ display: "block", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", color: "#c9a84c", marginTop: "2px" }}>{item.sub}</span>
                )}
              </span>
              {active && <span style={{ color: "#c9a84c", fontSize: "16px" }}>→</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SlideIntro() {
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

export function SlideGoals() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Цели и задачи" />
      <div style={{ flex: 1, display: "flex", gap: "24px", marginTop: "24px" }}>
        <div style={{ flex: "0 0 220px" }}>
          <div style={{ background: "#0f2347", borderRadius: "2px", padding: "24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ color: "#c9a84c", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.25em", fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: "16px" }}>Цель мероприятия</p>
              <p style={{ color: "#ffffff", fontFamily: "'Cormorant', serif", fontSize: "20px", fontWeight: 300, lineHeight: 1.4, fontStyle: "italic" }}>«Закрепить полученные ранее знания и познакомиться с современными тенденциями в кондитерском деле, которые можно будет применять на практике»</p>
            </div>
            <div style={{ width: "48px", height: "1px", background: "#c9a84c", opacity: 0.5, marginTop: "16px" }} />
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", color: "#9aaabe", textTransform: "uppercase", letterSpacing: "0.15em" }}>Задачи</p>
          {[
            { label: "Задача", text: "Приготовить десерт и продемонстрировать основные умения в оформлении и подаче десерта." },
          ].map((task) => (
            <div key={task.label} style={{ display: "flex", gap: "12px", padding: "14px 16px", border: "1px solid #e8edf4", borderRadius: "2px" }}>
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

export function SlidePlan() {
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

export function SlideTechnique() {
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

function DirectionSlide({ num, total, title, description, examples, image }: {
  num: number; total: number; title: string; description: string; examples: { label: string; text: string }[]; image: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Ключевые направления пересмотра" subtitle={`Направление ${num} из ${total}`} />
      <div style={{ flex: 1, display: "flex", gap: "32px", marginTop: "22px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontFamily: "'Cormorant', serif", fontSize: "42px", fontWeight: 300, color: "#c9a84c", lineHeight: 1 }}>{String(num).padStart(2, "0")}</span>
            <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "28px", fontWeight: 600, color: "#0f1f3d", margin: 0 }}>{title}</h3>
          </div>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "12px", color: "#4a607f", lineHeight: 1.7, borderLeft: "3px solid #e8edf4", paddingLeft: "14px", margin: 0 }}>{description}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
            {examples.map((ex, i) => (
              <div key={i} style={{ background: "#f7f9fc", border: "1px solid #e8edf4", borderRadius: "2px", padding: "10px 14px" }}>
                <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "10px", fontWeight: 600, color: "#c9a84c", textTransform: "uppercase", letterSpacing: "0.1em" }}>{ex.label}</span>
                <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#3d5278", lineHeight: 1.5, margin: "4px 0 0" }}>{ex.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "260px", flexShrink: 0, borderRadius: "2px", overflow: "hidden", border: "1px solid #e8edf4" }}>
          <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
}

export function SlideDir1() {
  return <DirectionSlide num={1} total={6} title="Деконструкция" description="Разбор классического десерта на компоненты с новой подачей — каждый элемент существует отдельно и раскрывается в новом контексте." examples={[{ label: "Тирамису", text: "Эспрессо-икра + пена маскарпоне + бисквитная крошка" }, { label: "Чизкейк", text: "Мусс из творожного сыра + карамелизованная основа + ягодный гель" }]} image="https://cdn.poehali.dev/projects/436630c1-5a0c-4fc7-95ee-2c5bd439a41a/files/309529cc-b7da-496b-aa99-93582cf44534.jpg" />;
}

export function SlideDir2() {
  return <DirectionSlide num={2} total={6} title="Смена текстуры" description="Использование технологий молекулярной гастрономии для радикального изменения ощущений при сохранении узнаваемого вкуса." examples={[{ label: "Шоколадный торт", text: "Шоколадное облако (эспума) + хрустящий диск" }, { label: "Принцип", text: "Контраст между воздушным и плотным, нежным и хрустящим" }]} image="https://cdn.poehali.dev/projects/436630c1-5a0c-4fc7-95ee-2c5bd439a41a/files/d6369c87-e38e-4205-9812-2a079b236b82.jpg" />;
}

export function SlideDir3() {
  return <DirectionSlide num={3} total={6} title="Изменение формы и порции" description="Переосмысление масштаба и формата подачи — от большого к малому, от единого к многому." examples={[{ label: "Торт → стаканчики", text: "Большой торт трансформируется в мини-версии для индивидуальной подачи" }, { label: "Эклеры / Наполеон", text: "Эклер-ролл (рулет с начинкой); слоёные мини-тарталетки с кремом" }]} image="https://cdn.poehali.dev/projects/436630c1-5a0c-4fc7-95ee-2c5bd439a41a/files/f393300b-f7da-4770-a63a-31b1e827c7b9.jpg" />;
}

export function SlideDir4() {
  return <DirectionSlide num={4} total={6} title="Обновление вкусового профиля" description="Добавление неожиданных нот, сезонных ингредиентов и адаптация под актуальные тренды питания." examples={[{ label: "Контраст вкусов", text: "Соль к карамели, перец к шоколаду, цитрус к ванили" }, { label: "Тренды", text: "Веган, безглютеновый, низкосахарный; сезонные ягоды, имбирь, мята" }]} image="https://cdn.poehali.dev/projects/436630c1-5a0c-4fc7-95ee-2c5bd439a41a/files/328a059c-6329-4493-826c-3a89ef22f192.jpg" />;
}

export function SlideDir5() {
  return <DirectionSlide num={5} total={6} title="Технологическая модернизация" description="Применение современного оборудования и техник для достижения точности, эффектности и стабильности результата." examples={[{ label: "Оборудование", text: "Су-вид для нежных текстур; шоковая заморозка для сохранения свежести" }, { label: "Инновации", text: "3D-печать сложных декоративных элементов; сферификация и желирование" }]} image="https://cdn.poehali.dev/projects/436630c1-5a0c-4fc7-95ee-2c5bd439a41a/files/617735dc-f3a8-4590-ad6a-2c46cb959c4c.jpg" />;
}

export function SlideDir6() {
  return <DirectionSlide num={6} total={6} title="Интерактивная подача" description="Вовлечение гостя в процесс создания десерта — театральность, игра и эффект присутствия." examples={[{ label: "Самосборка", text: "Компоненты подаются отдельно — гость собирает десерт сам" }, { label: "Эффект", text: "Сухой лёд; горячий соус, вызывающий таяние элементов при подаче" }]} image="https://cdn.poehali.dev/projects/436630c1-5a0c-4fc7-95ee-2c5bd439a41a/files/948a33d6-ccd1-4a80-b681-0504fbb9c708.jpg" />;
}

export function SlideApproach() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 60px", background: "#fff" }}>
      <SlideHeader title="Суть подхода" />
      <div style={{ flex: 1, display: "flex", gap: "32px", marginTop: "24px", alignItems: "center" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ borderLeft: "4px solid #c9a84c", paddingLeft: "28px" }}>
            <p style={{ fontFamily: "'Cormorant', serif", fontSize: "22px", fontWeight: 400, color: "#0f1f3d", lineHeight: 1.5, margin: 0 }}>
              Пересмотр десерта — это не просто косметическое изменение, а глубокая трансформация: сохранение узнаваемого вкуса при радикальном обновлении формы, текстуры или способа подачи.
            </p>
          </div>
          <div style={{ background: "#0f2347", borderRadius: "2px", padding: "24px 28px", display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ color: "#c9a84c", fontSize: "28px", flexShrink: 0 }}>◈</span>
            <p style={{ fontFamily: "'Cormorant', serif", fontSize: "20px", fontWeight: 300, fontStyle: "italic", color: "#fff", lineHeight: 1.5, margin: 0 }}>
              Цель — удивить гостя, сохранив «ноту ностальгии»
            </p>
          </div>
        </div>
        <div style={{ width: "220px", flexShrink: 0, borderRadius: "2px", overflow: "hidden", border: "1px solid #e8edf4", alignSelf: "stretch" }}>
          <img
            src="https://cdn.poehali.dev/projects/436630c1-5a0c-4fc7-95ee-2c5bd439a41a/files/c96e1257-1dda-4b61-89a1-49996a82d931.jpg"
            alt="Современная подача десерта"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}