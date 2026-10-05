/* Acsia Digital Cockpit — HMI core
   Shared chrome + widgets. Exposes: hmiIcon, StatusBar, Dock, Panel, DriveModes, MapCanvas */

const { useState: useS, useEffect: useE, useRef: useR } = React;

function hmiIcon(name, size = 22, stroke = 1.9) {
  return `<i data-lucide="${name}" style="width:${size}px;height:${size}px;stroke-width:${stroke}"></i>`;
}
function HIcon({ name, size = 22, stroke = 1.9, color }) {
  const ref = useR(null);
  useE(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = `<i data-lucide="${name}"></i>`;
      window.lucide.createIcons({ attrs: { width: size, height: size, "stroke-width": stroke } });
    }
  }, [name, size, stroke]);
  return <span ref={ref} style={{ display: "inline-flex", lineHeight: 0, color }} />;
}

/* Glassy panel surface used across views */
function Panel({ children, style, pad = 22 }) {
  return (
    <div style={{ background: "linear-gradient(180deg, rgba(40,69,110,0.45), rgba(30,54,89,0.30))", border: "1px solid rgba(108,193,236,0.16)", borderRadius: 22, padding: pad, backdropFilter: "blur(8px)", ...style }}>
      {children}
    </div>
  );
}

function StatusBar() {
  const [now, setNow] = useS(new Date());
  useE(() => { const t = setInterval(() => setNow(new Date()), 1000 * 20); return () => clearInterval(t); }, []);
  const hh = now.getHours(), mm = now.getMinutes().toString().padStart(2, "0");
  const time = `${((hh % 12) || 12)}:${mm}`;
  const ampm = hh < 12 ? "AM" : "PM";
  return (
    <div style={{ height: 54, display: "flex", alignItems: "center", padding: "0 26px", gap: 18, color: "#cdddf0" }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#fff", letterSpacing: "-0.01em" }}>
        {time} <span style={{ fontSize: 12, color: "#8ea3bd", fontWeight: 500 }}>{ampm}</span>
      </span>
      <span style={{ width: 1, height: 18, background: "rgba(142,163,189,0.3)" }} />
      <span style={{ fontSize: 13.5, color: "#8ea3bd" }}>Thu 4 Jun</span>
      <div style={{ display: "flex", alignItems: "center", gap: 7, marginLeft: 8, fontSize: 13, color: "#8ea3bd" }}>
        <HIcon name="sun" size={16} color="#6cc1ec" /> 22°C · Trivandrum
      </div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
        <HIcon name="bluetooth" size={16} color="#6cc1ec" />
        <HIcon name="wifi" size={16} color="#6cc1ec" />
        <HIcon name="signal-high" size={16} color="#6cc1ec" />
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(108,193,236,0.12)", padding: "5px 6px 5px 12px", borderRadius: 999 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Ananya</span>
          <span style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#36abff,#1d8ee0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff" }}>A</span>
        </div>
      </div>
    </div>
  );
}

const DOCK = [
  { id: "home", icon: "layout-grid", label: "Home" },
  { id: "nav", icon: "navigation", label: "Navigation" },
  { id: "media", icon: "disc-3", label: "Media" },
  { id: "phone", icon: "phone", label: "Phone" },
  { id: "climate", icon: "fan", label: "Climate" },
  { id: "ev", icon: "battery-charging", label: "Energy" },
  { id: "settings", icon: "settings", label: "Settings" },
];

function Dock({ active, onChange }) {
  return (
    <div style={{ height: 92, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "0 20px" }}>
      <div style={{ display: "flex", gap: 8, background: "rgba(11,22,38,0.6)", border: "1px solid rgba(108,193,236,0.14)", borderRadius: 22, padding: 8 }}>
        {DOCK.map((d) => {
          const on = active === d.id;
          return (
            <button key={d.id} onClick={() => onChange(d.id)} title={d.label}
              style={{ width: 64, height: 60, borderRadius: 16, border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5,
                background: on ? "linear-gradient(180deg,#36abff,#1d8ee0)" : "transparent",
                boxShadow: on ? "0 8px 20px rgba(54,171,255,0.4)" : "none", transition: "all .18s ease" }}>
              <HIcon name={d.icon} size={23} color={on ? "#fff" : "#9fb4cd"} />
              <span style={{ fontSize: 9.5, fontWeight: 600, color: on ? "#fff" : "#7e93ad", letterSpacing: "0.02em" }}>{d.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DriveModes() {
  const [mode, setMode] = useS("Comfort");
  const modes = [["Eco", "leaf"], ["Comfort", "armchair"], ["Sport", "zap"]];
  return (
    <div style={{ display: "flex", gap: 6, background: "rgba(11,22,38,0.55)", border: "1px solid rgba(108,193,236,0.14)", borderRadius: 14, padding: 5 }}>
      {modes.map(([m, ic]) => {
        const on = mode === m;
        return (
          <button key={m} onClick={() => setMode(m)}
            style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 15px", borderRadius: 10, border: "none", cursor: "pointer",
              background: on ? "rgba(54,171,255,0.18)" : "transparent", color: on ? "#fff" : "#8ea3bd", transition: "all .15s ease" }}>
            <HIcon name={ic} size={16} color={on ? "#36abff" : "#7e93ad"} />
            <span style={{ fontSize: 13.5, fontWeight: 600 }}>{m}</span>
          </button>
        );
      })}
    </div>
  );
}

/* Stylised navigation map — CSS/SVG chrome (route + roads), not photographic imagery */
function MapCanvas({ height = "100%", radius = 22 }) {
  return (
    <div style={{ position: "relative", width: "100%", height, borderRadius: radius, overflow: "hidden", background: "radial-gradient(120% 120% at 30% 20%, #142a44 0%, #0c1a2c 70%)" }}>
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="#1e3a5c" strokeWidth="14" fill="none" strokeLinecap="round">
          <path d="M-20 120 L240 120 L300 60 L640 60" />
          <path d="M80 -20 L80 300 L180 420" />
          <path d="M-20 280 L200 280 L260 340 L640 340" />
          <path d="M420 -20 L420 220 L520 320 L520 420" />
        </g>
        <g stroke="#24496f" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.7">
          <path d="M180 120 L180 280" />
          <path d="M300 60 L300 340" />
          <path d="M420 120 L640 120" />
        </g>
        {/* active route */}
        <path d="M120 360 L120 200 L260 120 L420 120 L500 60" fill="none" stroke="#36abff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M120 360 L120 200 L260 120 L420 120 L500 60" fill="none" stroke="#9fdcff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        <circle cx="500" cy="60" r="9" fill="#36abff" stroke="#0c1a2c" strokeWidth="3" />
      </svg>
      {/* car puck */}
      <div style={{ position: "absolute", left: "20%", top: "90%", transform: "translate(-50%,-50%)", width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#36abff,#1d8ee0)", border: "3px solid #cdeeff", boxShadow: "0 0 0 6px rgba(54,171,255,0.22), 0 6px 16px rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HIcon name="navigation-2" size={14} color="#fff" />
      </div>
    </div>
  );
}

Object.assign(window, { hmiIcon, HIcon, Panel, StatusBar, Dock, DriveModes, MapCanvas });
