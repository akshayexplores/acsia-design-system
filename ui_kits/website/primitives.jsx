/* Acsia Website UI Kit — primitives
   Exposes: AcsiaLogo, Btn, Tag, Eyebrow, Icon  (to window) */

const { useState, useEffect, useRef } = React;

/* Lucide icon helper — renders a single icon by name */
function Icon({ name, size = 20, stroke = 1.9, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, "stroke-width": stroke }, nameAttr: "data-lucide" });
    }
  }, [name, size, stroke]);
  return <span ref={ref} style={{ display: "inline-flex", lineHeight: 0, ...style }} />;
}

/* Logo lockup — PLACEHOLDER. Replace with official Acsia artwork (wordmark + 4 dots). */
function AcsiaLogo({ light = false, size = 26 }) {
  const ink = light ? "#ffffff" : "#1e3659";
  const dots = light
    ? ["#36abff", "#6cc1ec", "#edede9", "#ffffff"]
    : ["#36abff", "#5eb3e4", "#6cc1ec", "#1e3659"];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: size, letterSpacing: "-0.02em", color: ink, lineHeight: 1 }}>
      acsia
      <span style={{ display: "inline-flex", gap: 3, marginLeft: 7 }}>
        {dots.map((c, i) => (
          <span key={i} style={{ width: size * 0.16, height: size * 0.16, borderRadius: "50%", background: c, display: "block" }} />
        ))}
      </span>
    </span>
  );
}

function Eyebrow({ children, light = false, style }) {
  return (
    <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: light ? "#6cc1ec" : "#36abff", ...style }}>
      {children}
    </span>
  );
}

function Btn({ children, variant = "primary", size = "md", icon, onClick, type = "button" }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const pad = size === "lg" ? "14px 26px" : size === "sm" ? "8px 16px" : "11px 22px";
  const fs = size === "lg" ? 16 : size === "sm" ? 13.5 : 15;
  const base = {
    fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: fs, borderRadius: 10,
    padding: pad, border: "1.5px solid transparent", cursor: "pointer",
    transition: "all .15s ease", display: "inline-flex", alignItems: "center", gap: 8,
    whiteSpace: "nowrap", lineHeight: 1.1,
    transform: press ? "translateY(1px) scale(0.99)" : "none",
  };
  const variants = {
    primary: { background: hover ? "#1d8ee0" : "#36abff", color: "#fff", boxShadow: press ? "0 4px 12px rgba(54,171,255,.28)" : "0 8px 20px rgba(54,171,255,.30)" },
    secondary: { background: hover ? "#ebf6ff" : "#fff", color: hover ? "#1d8ee0" : "#1e3659", borderColor: hover ? "#36abff" : "#d7dae0" },
    ghost: { background: hover ? "#ebf6ff" : "transparent", color: "#1d8ee0" },
    inverse: { background: hover ? "#eaf4ff" : "#fff", color: "#1e3659" },
    outlineLight: { background: hover ? "rgba(255,255,255,0.12)" : "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.45)" },
  };
  return (
    <button type={type} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants[variant] }}>
      {children}
      {icon && <Icon name={icon} size={fs + 2} />}
    </button>
  );
}

function Tag({ children, variant = "soft" }) {
  const v = {
    solid: { background: "#36abff", color: "#fff" },
    soft: { background: "#ebf6ff", color: "#1d8ee0" },
    outline: { background: "#fff", color: "#1e3659", border: "1.5px solid #d7dae0" },
    ink: { background: "#1e3659", color: "#fff" },
  }[variant];
  return <span style={{ fontSize: 12.5, fontWeight: 500, padding: "6px 13px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 6, ...v }}>{children}</span>;
}

Object.assign(window, { Icon, AcsiaLogo, Eyebrow, Btn, Tag });
