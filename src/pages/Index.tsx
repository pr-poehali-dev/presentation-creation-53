import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { SlideTitle, SlideContents, SlideIntro, SlideGoals, SlidePlan, SlideTechnique } from "@/components/slides/ContentSlides";
import { SlidePractice, SlideAlgorithm, SlideReflection } from "@/components/slides/PracticeSlides";

const slides = [
  { id: 0 }, { id: 1 }, { id: 2 }, { id: 3 },
  { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 },
];

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
