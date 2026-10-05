/* Acsia Website UI Kit — sections
   Exposes: SiteNav, Hero, Capabilities, Platforms, Stats, CtaBand, SiteFooter, ContactPanel */

const { useState: useStateS } = React;

function SiteNav({ onContact }) {
  const [open, setOpen] = useStateS(false);
  const links = ["Solutions", "Expertise", "Industries", "Company", "Insights"];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.82)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid #e9ebef" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", height: 70, display: "flex", alignItems: "center", gap: 32 }}>
        <AcsiaLogo size={26} />
        <nav style={{ display: "flex", gap: 26, marginLeft: 14 }}>
          {links.map((l) => (
            <a key={l} href="#" onClick={(e) => e.preventDefault()}
              style={{ fontSize: 14.5, fontWeight: 500, color: "#3a4452", textDecoration: "none", padding: "6px 0", borderBottom: "2px solid transparent" }}
              onMouseEnter={(e) => { e.target.style.color = "#1d8ee0"; e.target.style.borderColor = "#36abff"; }}
              onMouseLeave={(e) => { e.target.style.color = "#3a4452"; e.target.style.borderColor = "transparent"; }}>
              {l}
            </a>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 14.5, fontWeight: 500, color: "#1e3659", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            <Icon name="globe" size={16} /> EN
          </a>
          <Btn variant="primary" size="sm" icon="arrow-right" onClick={onContact}>Get in touch</Btn>
        </div>
      </div>
    </header>
  );
}

function Hero({ onContact }) {
  return (
    <section style={{ position: "relative", background: "linear-gradient(155deg, #1e3659 0%, #14243c 60%, #16314f 100%)", overflow: "hidden" }}>
      {/* faint signal-arc motif via radial glows (background only, not illustration) */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(700px 500px at 88% 12%, rgba(54,171,255,0.28), transparent 60%), radial-gradient(500px 400px at 10% 90%, rgba(108,193,236,0.12), transparent 60%)" }} />
      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "92px 28px 96px", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 48, alignItems: "center" }}>
        <div>
          <Eyebrow light>Digital Cockpit · e-Mobility · Telematics</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, lineHeight: 1.04, letterSpacing: "-0.025em", color: "#fff", margin: "18px 0 0" }}>
            Technology that<br />drives Tomorrow
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#c3cedd", maxWidth: 480, margin: "22px 0 32px" }}>
            We use our expertise and imagination to simplify the complex world of automotive technology — delivering safe, sustainable and engaging experiences for drivers and passengers.
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <Btn variant="inverse" size="lg" icon="arrow-right" onClick={onContact}>Explore our solutions</Btn>
            <Btn variant="outlineLight" size="lg" icon="play">Watch brand film</Btn>
          </div>
          <div style={{ display: "flex", gap: 28, marginTop: 44 }}>
            {[["10+", "years of expertise"], ["4", "global locations"], ["Tier-1", "OEM partners"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, color: "#fff" }}>{n}</div>
                <div style={{ fontSize: 12.5, color: "#8ea3bd" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <image-slot id="acsia-hero" style={{ width: "100%", height: 380, display: "block" }} shape="rounded" radius="20" placeholder="Drop a vehicle-interior / cockpit photo (cool-toned)"></image-slot>
          <div style={{ position: "absolute", left: -18, bottom: -18, background: "#fff", borderRadius: 14, padding: "14px 18px", boxShadow: "0 18px 48px rgba(20,36,60,0.22)", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: "#ebf6ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#1d8ee0" }}><Icon name="shield-check" size={20} /></div>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#1e3659", whiteSpace: "nowrap" }}>Functional Safety</div>
              <div style={{ fontSize: 11.5, color: "#8d99ae", whiteSpace: "nowrap" }}>ISO 26262 ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CAPS = [
  { icon: "layout-dashboard", title: "Digital Cockpit & Displays", body: "Instrument clusters, HMI and infotainment that turn complexity into clarity for every journey.", tags: ["Android Automotive", "QNX"] },
  { icon: "battery-charging", title: "e-Mobility", body: "Software powering the safe, sustainable and efficient electric vehicles of tomorrow.", tags: ["BMS", "Charging"] },
  { icon: "radio-tower", title: "Telematics", body: "Connected-vehicle data and signal intelligence — secure, real-time, at fleet scale.", tags: ["Connectivity", "OTA"] },
];

function Capabilities() {
  return (
    <section style={{ background: "#fff", padding: "92px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ maxWidth: 620 }}>
          <Eyebrow>What we do</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 38, letterSpacing: "-0.02em", color: "#1e3659", margin: "12px 0 0" }}>
            Three pillars, one promise — simplifying the complex
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginTop: 44 }}>
          {CAPS.map((c) => <CapCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

function CapCard({ icon, title, body, tags }) {
  const [hover, setHover] = useStateS(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: "#fff", border: "1px solid #e9ebef", borderRadius: 16, padding: 26, boxShadow: hover ? "0 18px 48px rgba(20,36,60,0.12)" : "0 6px 18px rgba(20,36,60,0.06)", transform: hover ? "translateY(-3px)" : "none", transition: "all .2s ease" }}>
      <div style={{ width: 50, height: 50, borderRadius: 13, background: "#ebf6ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#1d8ee0", marginBottom: 18 }}><Icon name={icon} size={26} /></div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "#1e3659", margin: "0 0 8px" }}>{title}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5b6575", margin: "0 0 16px" }}>{body}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{tags.map((t) => <Tag key={t} variant="soft">{t}</Tag>)}</div>
    </div>
  );
}

function Platforms() {
  const items = ["AUTOSAR", "Android Automotive", "Automotive Linux", "QNX", "Qualcomm", "Renesas", "NVIDIA", "Infineon"];
  return (
    <section style={{ background: "#edede9", padding: "64px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
        <div style={{ flex: "0 0 230px" }}>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: "#1e3659", lineHeight: 1.5 }}>Deep expertise across the automotive software & silicon stack</div>
        </div>
        <div style={{ flex: 1, display: "flex", gap: 12, flexWrap: "wrap" }}>
          {items.map((i) => (
            <span key={i} style={{ background: "#fff", border: "1px solid #dad7cd", borderRadius: 999, padding: "9px 18px", fontSize: 14, fontWeight: 500, color: "#1e3659" }}>{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const s = [["$2.6–4.4T", "AI/ML value to the global economy"], ["75%", "of value in software & R&D ops"], ["4", "countries · US, DE, JP, IN"], ["1000s", "of miles of code written"]];
  return (
    <section style={{ background: "#fff", padding: "84px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28 }}>
        {s.map(([n, l]) => (
          <div key={l} style={{ borderLeft: "2px solid #36abff", paddingLeft: 18 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, letterSpacing: "-0.02em", color: "#1e3659" }}>{n}</div>
            <div style={{ fontSize: 14, color: "#5b6575", marginTop: 6, lineHeight: 1.45 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaBand({ onContact }) {
  return (
    <section style={{ background: "linear-gradient(135deg,#36abff,#1d8ee0)", padding: "72px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, letterSpacing: "-0.02em", color: "#fff", margin: 0 }}>Let's build what drives tomorrow.</h2>
          <p style={{ fontSize: 16.5, color: "rgba(255,255,255,0.9)", margin: "10px 0 0" }}>Talk to our engineering team about your next in-vehicle programme.</p>
        </div>
        <Btn variant="inverse" size="lg" icon="arrow-right" onClick={onContact}>Get in touch</Btn>
      </div>
    </section>
  );
}

function SiteFooter() {
  const cols = [
    ["Solutions", ["Digital Cockpit & Displays", "e-Mobility", "Telematics", "LiLA AI Copilot Suite"]],
    ["Expertise", ["AUTOSAR", "Android Automotive", "Cybersecurity", "Functional Safety"]],
    ["Company", ["About Acsia", "Careers", "Insights", "Contact"]],
  ];
  return (
    <footer style={{ background: "#14243c", color: "#aeb9cb", padding: "64px 28px 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 36 }}>
        <div>
          <AcsiaLogo light size={26} />
          <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: "16px 0 0", maxWidth: 280 }}>Acsia Technologies — a leading provider of automotive software. Technology that drives Tomorrow.</p>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            {["linkedin", "youtube", "instagram", "twitter"].map((s) => (
              <span key={s} style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid #28456e", display: "flex", alignItems: "center", justifyContent: "center", color: "#6cc1ec" }}><Icon name={s} size={16} /></span>
            ))}
          </div>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6cc1ec", marginBottom: 14 }}>{h}</div>
            {items.map((i) => <div key={i} style={{ fontSize: 13.5, padding: "6px 0", cursor: "pointer" }}>{i}</div>)}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", borderTop: "1px solid #28456e", marginTop: 40, paddingTop: 22, display: "flex", justifyContent: "space-between", fontSize: 12.5, color: "#8ea3bd" }}>
        <span>© 2026 Acsia Technologies. All rights reserved.</span>
        <span>Trivandrum · Germany · Japan · USA</span>
      </div>
    </footer>
  );
}

function ContactPanel({ open, onClose }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: open ? "auto" : "none" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(20,36,60,0.45)", backdropFilter: "blur(3px)", opacity: open ? 1 : 0, transition: "opacity .25s ease" }} />
      <aside style={{ position: "absolute", top: 0, right: 0, height: "100%", width: 420, maxWidth: "92%", background: "#fff", boxShadow: "-20px 0 60px rgba(20,36,60,0.25)", transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform .3s cubic-bezier(.22,.61,.36,1)", padding: 32, overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Eyebrow>Get in touch</Eyebrow>
          <span onClick={onClose} style={{ cursor: "pointer", color: "#8d99ae" }}><Icon name="x" size={22} /></span>
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, color: "#1e3659", margin: "12px 0 6px" }}>Let's talk automotive software</h3>
        <p style={{ fontSize: 14, color: "#5b6575", margin: "0 0 22px" }}>Tell us about your programme — we'll get back within two business days.</p>
        <Field label="Full name" placeholder="Jane Doe" />
        <Field label="Work email" placeholder="jane@oem.com" />
        <Field label="Area of interest" placeholder="Digital Cockpit & Displays" />
        <Field label="Message" placeholder="A few words about your project…" area />
        <div style={{ marginTop: 8 }}><Btn variant="primary" size="lg" icon="send">Send enquiry</Btn></div>
        <p style={{ fontSize: 11.5, color: "#8d99ae", marginTop: 16 }}>enquiry@acsiatech.com · +91 90379 24896</p>
      </aside>
    </div>
  );
}

function Field({ label, placeholder, area }) {
  const [focus, setFocus] = useStateS(false);
  const st = { width: "100%", fontFamily: "var(--font-sans)", fontSize: 14.5, color: "#1e3659", background: "#fff", border: `1.5px solid ${focus ? "#36abff" : "#d7dae0"}`, boxShadow: focus ? "0 0 0 3px rgba(54,171,255,0.2)" : "none", borderRadius: 10, padding: "11px 13px", outline: "none", boxSizing: "border-box" };
  return (
    <label style={{ display: "block", marginBottom: 16 }}>
      <span style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: "#1e3659", marginBottom: 6 }}>{label}</span>
      {area
        ? <textarea rows={3} placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ ...st, resize: "vertical" }} />
        : <input placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={st} />}
    </label>
  );
}

Object.assign(window, { SiteNav, Hero, Capabilities, Platforms, Stats, CtaBand, SiteFooter, ContactPanel });
