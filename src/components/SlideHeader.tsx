import { createContext, useContext } from "react";

export const ContentsContext = createContext<(() => void) | null>(null);

export default function SlideHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  const goContents = useContext(ContentsContext);
  return (
    <div style={{ borderBottom: "1px solid #e8edf4", paddingBottom: "16px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <h2 style={{ fontSize: "28px", fontFamily: "'Cormorant', serif", fontWeight: 600, color: "#0f1f3d", margin: 0 }}>{title}</h2>
          {subtitle && <p style={{ color: "#9aaabe", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", marginTop: "4px", letterSpacing: "0.05em" }}>{subtitle}</p>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {goContents && (
            <button
              onClick={goContents}
              style={{ display: "flex", alignItems: "center", gap: "5px", padding: "4px 10px", border: "1px solid #e8edf4", borderRadius: "4px", background: "#f7f9fc", cursor: "pointer", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "11px", color: "#6b82a0", transition: "all 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#c9a84c"; (e.currentTarget as HTMLButtonElement).style.color = "#c9a84c"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#e8edf4"; (e.currentTarget as HTMLButtonElement).style.color = "#6b82a0"; }}
            >
              ☰ Содержание
            </button>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontFamily: "'IBM Plex Sans', sans-serif", color: "#c5d0de" }}>
            <span>ГБПОУ «ВКРСТ»</span><span>·</span><span>43.02.15</span>
          </div>
        </div>
      </div>
    </div>
  );
}
