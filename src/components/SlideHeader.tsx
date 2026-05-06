export default function SlideHeader({ title, subtitle }: { title: string; subtitle?: string }) {
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
