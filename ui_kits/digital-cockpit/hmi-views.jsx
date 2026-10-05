/* Acsia Digital Cockpit — views
   Exposes: HomeView, NavView, MediaView, ClimateView, EVView, SimpleView */

const { useState: useV } = React;

/* ---------- shared widgets ---------- */
function NowPlaying({ media, setMedia, compact }) {
  const { playing, track, artist } = media;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ width: compact ? 54 : 70, height: compact ? 54 : 70, borderRadius: 14, background: "linear-gradient(135deg,#1d8ee0,#1e3659)", flex: "none", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 18px rgba(0,0,0,0.35)" }}>
        <HIcon name="music" size={compact ? 22 : 28} color="#cdeeff" />
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontSize: compact ? 14 : 16, fontWeight: 600, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{track}</div>
        <div style={{ fontSize: compact ? 12 : 13, color: "#8ea3bd", marginTop: 2 }}>{artist}</div>
      </div>
      <button onClick={() => setMedia({ ...media, playing: !playing })}
        style={{ width: compact ? 42 : 50, height: compact ? 42 : 50, borderRadius: "50%", border: "none", cursor: "pointer", background: "linear-gradient(135deg,#36abff,#1d8ee0)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 18px rgba(54,171,255,0.4)", flex: "none" }}>
        <HIcon name={playing ? "pause" : "play"} size={compact ? 18 : 22} color="#fff" />
      </button>
    </div>
  );
}

function TempStepper({ label, value, onChange, accent = "#36abff" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8ea3bd" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <StepBtn icon="minus" onClick={() => onChange(Math.max(16, value - 0.5))} />
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, color: "#fff", letterSpacing: "-0.02em", minWidth: 96, textAlign: "center" }}>
          {value.toFixed(1)}<span style={{ fontSize: 20, color: accent }}>°</span>
        </div>
        <StepBtn icon="plus" onClick={() => onChange(Math.min(28, value + 0.5))} />
      </div>
    </div>
  );
}
function StepBtn({ icon, onClick }) {
  return (
    <button onClick={onClick} style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid rgba(108,193,236,0.25)", background: "rgba(108,193,236,0.10)", color: "#cdeeff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <HIcon name={icon} size={20} color="#cdeeff" />
    </button>
  );
}

/* battery ring */
function BatteryRing({ pct, size = 200 }) {
  const r = size / 2 - 14, c = 2 * Math.PI * r;
  const big = size >= 150;
  const numF = big ? 46 : Math.round(size * 0.22);
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(108,193,236,0.16)" strokeWidth={big ? 14 : 9} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={r} stroke="url(#bg)" strokeWidth={big ? 14 : 9} fill="none" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)} />
        <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6cc1ec" /><stop offset="1" stopColor="#36abff" /></linearGradient></defs>
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: numF, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>{pct}<span style={{ fontSize: numF * 0.46, color: "#6cc1ec" }}>%</span></div>
        {big && <div style={{ fontSize: 12.5, color: "#8ea3bd", display: "flex", alignItems: "center", gap: 5, marginTop: 4 }}><HIcon name="zap" size={13} color="#36abff" /> Charging</div>}
      </div>
    </div>
  );
}

/* ---------- HOME ---------- */
function HomeView({ go, media, setMedia, climate, setClimate, ev }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gridTemplateRows: "auto 1fr", gap: 16, height: "100%" }}>
      <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, color: "#fff", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>Good morning, Ananya</div>
          <div style={{ fontSize: 13.5, color: "#8ea3bd", marginTop: 4 }}>412 km range · all systems nominal</div>
        </div>
        <DriveModes />
      </div>

      {/* map card */}
      <Panel pad={0} style={{ overflow: "hidden", position: "relative", minHeight: 0 }}>
        <MapCanvas radius={22} />
        <div style={{ position: "absolute", left: 18, top: 18, right: 18, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ background: "rgba(11,22,38,0.78)", backdropFilter: "blur(8px)", borderRadius: 14, padding: "12px 16px", border: "1px solid rgba(108,193,236,0.18)" }}>
            <div style={{ fontSize: 12, color: "#8ea3bd" }}>Next stop</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>Acsia GHQ · Technopark</div>
            <div style={{ fontSize: 12.5, color: "#36abff", marginTop: 3, fontWeight: 600 }}>12 min · 6.4 km</div>
          </div>
          <button onClick={() => go("nav")} style={{ background: "linear-gradient(135deg,#36abff,#1d8ee0)", color: "#fff", border: "none", borderRadius: 12, padding: "11px 16px", fontWeight: 600, fontSize: 13.5, cursor: "pointer", display: "flex", alignItems: "center", gap: 7, boxShadow: "0 8px 18px rgba(54,171,255,0.4)" }}>
            <HIcon name="navigation" size={16} color="#fff" /> Go
          </button>
        </div>
      </Panel>

      {/* right column widgets */}
      <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1.1fr", gap: 16, minHeight: 0 }}>
        <Panel style={{ cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div onClick={() => go("media")} style={{ marginBottom: 0 }}>
            <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6cc1ec", marginBottom: 12 }}>Now Playing</div>
            <NowPlaying media={media} setMedia={setMedia} compact />
          </div>
        </Panel>
        <Panel style={{ cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div onClick={() => go("climate")} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6cc1ec", marginBottom: 8 }}>Climate · Dual zone</div>
              <div style={{ display: "flex", gap: 18 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "#fff" }}>{climate.driver.toFixed(1)}°</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "#8ea3bd" }}>{climate.passenger.toFixed(1)}°</span>
              </div>
            </div>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(108,193,236,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}><HIcon name="fan" size={24} color="#6cc1ec" /></div>
          </div>
        </Panel>
        <Panel style={{ cursor: "pointer" }}>
          <div onClick={() => go("ev")} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <BatteryRing pct={ev.pct} size={96} />
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6cc1ec", marginBottom: 6 }}>Battery</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "#fff" }}>{ev.range} km</div>
              <div style={{ fontSize: 12.5, color: "#8ea3bd", marginTop: 2 }}>Full at 08:40</div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}

/* ---------- NAV ---------- */
function NavView() {
  const dests = [["Acsia GHQ · Technopark", "6.4 km", "building-2"], ["Home · Kowdiar", "11.2 km", "house"], ["Trivandrum Intl Airport", "18.7 km", "plane"]];
  return (
    <div style={{ position: "relative", height: "100%", borderRadius: 22, overflow: "hidden" }}>
      <MapCanvas radius={22} />
      <div style={{ position: "absolute", left: 20, top: 20, width: 340 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(11,22,38,0.82)", backdropFilter: "blur(8px)", border: "1px solid rgba(108,193,236,0.18)", borderRadius: 14, padding: "12px 16px" }}>
          <HIcon name="search" size={18} color="#6cc1ec" />
          <span style={{ fontSize: 14.5, color: "#8ea3bd" }}>Search destination…</span>
        </div>
        <div style={{ marginTop: 12, background: "rgba(11,22,38,0.82)", backdropFilter: "blur(8px)", border: "1px solid rgba(108,193,236,0.18)", borderRadius: 14, overflow: "hidden" }}>
          {dests.map(([n, d, ic], i) => (
            <div key={n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", borderTop: i ? "1px solid rgba(108,193,236,0.12)" : "none" }}>
              <span style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(108,193,236,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}><HIcon name={ic} size={17} color="#6cc1ec" /></span>
              <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{n}</div></div>
              <span style={{ fontSize: 12.5, color: "#36abff", fontWeight: 600 }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", right: 20, top: 20, background: "linear-gradient(135deg,#36abff,#1d8ee0)", borderRadius: 16, padding: "16px 20px", boxShadow: "0 10px 24px rgba(54,171,255,0.4)" }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)" }}>Arriving in</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, color: "#fff" }}>12 min</div>
        <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.9)" }}>09:18 · 6.4 km</div>
      </div>
    </div>
  );
}

/* ---------- MEDIA ---------- */
function MediaView({ media, setMedia }) {
  const sources = ["Bluetooth", "Radio", "USB", "Streaming"];
  const [src, setSrc] = useV("Bluetooth");
  const queue = [["Aurora", "Solar Fields"], ["Midnight Drive", "Kavinsky"], ["Open Roads", "Tycho"], ["Glacier", "Hammock"]];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 16, height: "100%" }}>
      <Panel style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {sources.map((s) => (
            <button key={s} onClick={() => setSrc(s)} style={{ padding: "8px 16px", borderRadius: 999, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, background: src === s ? "rgba(54,171,255,0.18)" : "rgba(108,193,236,0.07)", color: src === s ? "#fff" : "#8ea3bd" }}>{s}</button>
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22 }}>
          <div style={{ width: 200, height: 200, borderRadius: 22, background: "linear-gradient(135deg,#1d8ee0,#1e3659)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 18px 44px rgba(0,0,0,0.4)" }}>
            <HIcon name="music-4" size={68} color="#cdeeff" />
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, color: "#fff" }}>{media.track}</div>
            <div style={{ fontSize: 14, color: "#8ea3bd", marginTop: 3 }}>{media.artist} · {src}</div>
          </div>
          {/* scrubber */}
          <div style={{ width: "82%" }}>
            <div style={{ height: 5, borderRadius: 3, background: "rgba(108,193,236,0.16)" }}><div style={{ width: "38%", height: "100%", borderRadius: 3, background: "linear-gradient(90deg,#6cc1ec,#36abff)" }} /></div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 11.5, color: "#8ea3bd" }}><span>1:42</span><span>4:30</span></div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
            <HIcon name="shuffle" size={20} color="#8ea3bd" />
            <HIcon name="skip-back" size={26} color="#cdeeff" />
            <button onClick={() => setMedia({ ...media, playing: !media.playing })} style={{ width: 64, height: 64, borderRadius: "50%", border: "none", cursor: "pointer", background: "linear-gradient(135deg,#36abff,#1d8ee0)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 24px rgba(54,171,255,0.45)" }}>
              <HIcon name={media.playing ? "pause" : "play"} size={28} color="#fff" />
            </button>
            <HIcon name="skip-forward" size={26} color="#cdeeff" />
            <HIcon name="repeat" size={20} color="#8ea3bd" />
          </div>
        </div>
      </Panel>
      <Panel>
        <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6cc1ec", marginBottom: 14 }}>Up next</div>
        {queue.map(([t, a], i) => (
          <div key={t} onClick={() => setMedia({ ...media, track: t, artist: a, playing: true })}
            style={{ display: "flex", alignItems: "center", gap: 13, padding: "13px 8px", borderRadius: 12, cursor: "pointer", background: media.track === t ? "rgba(54,171,255,0.12)" : "transparent" }}>
            <span style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg,#1d8ee0,#1e3659)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}><HIcon name="music" size={18} color="#cdeeff" /></span>
            <div style={{ flex: 1 }}><div style={{ fontSize: 14.5, fontWeight: 600, color: media.track === t ? "#fff" : "#cdddf0" }}>{t}</div><div style={{ fontSize: 12, color: "#8ea3bd" }}>{a}</div></div>
            {media.track === t && media.playing && <HIcon name="audio-lines" size={18} color="#36abff" />}
          </div>
        ))}
      </Panel>
    </div>
  );
}

/* ---------- CLIMATE ---------- */
function ClimateView({ climate, setClimate }) {
  const toggles = [["Driver seat", "armchair", true], ["A/C", "snowflake", true], ["Auto", "sparkles", true], ["Defrost", "wind", false], ["Recirculate", "refresh-cw", false], ["Sync zones", "link", false]];
  const [on, setOn] = useV(toggles.map((t) => t[2]));
  return (
    <div style={{ display: "grid", gridTemplateRows: "1.2fr 1fr", gap: 16, height: "100%" }}>
      <Panel style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        <TempStepper label="Driver" value={climate.driver} onChange={(v) => setClimate({ ...climate, driver: v })} />
        <div style={{ width: 1, height: "70%", background: "rgba(108,193,236,0.16)" }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <HIcon name="fan" size={30} color="#36abff" />
          <div style={{ display: "flex", gap: 5 }}>{[1, 2, 3, 4, 5].map((n) => <span key={n} style={{ width: 9, height: 24, borderRadius: 3, background: n <= 3 ? "#36abff" : "rgba(108,193,236,0.16)" }} />)}</div>
          <span style={{ fontSize: 12, color: "#8ea3bd" }}>Fan speed</span>
        </div>
        <div style={{ width: 1, height: "70%", background: "rgba(108,193,236,0.16)" }} />
        <TempStepper label="Passenger" value={climate.passenger} onChange={(v) => setClimate({ ...climate, passenger: v })} accent="#6cc1ec" />
      </Panel>
      <Panel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, height: "100%" }}>
          {toggles.map(([label, ic], i) => (
            <button key={label} onClick={() => setOn(on.map((v, j) => j === i ? !v : v))}
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 18px", borderRadius: 14, border: "1px solid " + (on[i] ? "rgba(54,171,255,0.4)" : "rgba(108,193,236,0.14)"), cursor: "pointer", background: on[i] ? "rgba(54,171,255,0.14)" : "rgba(11,22,38,0.4)" }}>
              <HIcon name={ic} size={22} color={on[i] ? "#36abff" : "#7e93ad"} />
              <span style={{ fontSize: 14, fontWeight: 600, color: on[i] ? "#fff" : "#8ea3bd" }}>{label}</span>
            </button>
          ))}
        </div>
      </Panel>
    </div>
  );
}

/* ---------- EV / ENERGY ---------- */
function EVView({ ev }) {
  const stats = [["Range", ev.range + " km", "route"], ["Consumption", "16.2 kWh/100km", "activity"], ["Charge rate", "48 kW DC", "zap"], ["Time to full", "34 min", "clock"]];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 16, height: "100%" }}>
      <Panel style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22 }}>
        <BatteryRing pct={ev.pct} size={210} />
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(54,171,255,0.12)", border: "1px solid rgba(54,171,255,0.3)", borderRadius: 999, padding: "9px 18px" }}>
          <HIcon name="plug-zap" size={18} color="#36abff" />
          <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>DC Fast charging · 48 kW</span>
        </div>
      </Panel>
      <div style={{ display: "grid", gridTemplateRows: "auto 1fr", gap: 16 }}>
        <Panel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {stats.map(([l, v, ic]) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 42, height: 42, borderRadius: 11, background: "rgba(108,193,236,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}><HIcon name={ic} size={19} color="#6cc1ec" /></span>
                <div><div style={{ fontSize: 11.5, color: "#8ea3bd" }}>{l}</div><div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "#fff" }}>{v}</div></div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel>
          <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6cc1ec", marginBottom: 16 }}>Energy flow · last 30 min</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: "62%" }}>
            {[40, 55, 48, 70, 62, 80, 72, 90, 84, 76, 88, 95].map((h, i) => (
              <div key={i} style={{ flex: 1, height: h + "%", borderRadius: "5px 5px 0 0", background: "linear-gradient(180deg,#36abff,rgba(54,171,255,0.25))" }} />
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

/* ---------- generic placeholder for phone / settings ---------- */
function SimpleView({ icon, title, sub }) {
  return (
    <Panel style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
      <div style={{ width: 88, height: 88, borderRadius: 24, background: "rgba(108,193,236,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}><HIcon name={icon} size={40} color="#6cc1ec" /></div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, color: "#fff" }}>{title}</div>
      <div style={{ fontSize: 14, color: "#8ea3bd", maxWidth: 360, textAlign: "center", lineHeight: 1.55 }}>{sub}</div>
    </Panel>
  );
}

Object.assign(window, { HomeView, NavView, MediaView, ClimateView, EVView, SimpleView });
