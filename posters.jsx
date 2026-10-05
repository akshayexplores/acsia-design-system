/* ====================================================================
   AEK 2026 LinkedIn posters — three composition options
   Acsia Technologies · portrait 1080×1350
   ==================================================================== */

// --- shared bits ---------------------------------------------------------
function Logo() {
  // Official reversed (white + blue dots) wordmark — for dark grounds.
  return (
    <img className="logo-img" src="assets/acsia-logo-reversed.png" alt="Acsia" />
  );
}

// Venue default — Forum am Schlosspark, Ludwigsburg (AEK venue).
// Press photo (Landesamt für Denkmalpflege RPS / A. Dubslaff) used as a
// stand-in; drag your own licensed shot onto any slot to replace it.
const VENUE = "https://rps.baden-wuerttemberg.de/fileadmin/_processed_/0/1/csm_240207_Forum_am_Schlosspark_LB_Bild_01_03df3d9f29.jpg";

function Photo({ id, className }) {
  return (
    <image-slot
      id={id}
      class={"poster-photo " + (className || "")}
      shape="rect"
      fit="cover"
      src={VENUE}
      placeholder="Drop venue / cockpit hero — cool-toned, crisp"
    ></image-slot>
  );
}

// Slot for the OFFICIAL AEK 2026 logo (grab it from the congress media /
// partner kit and drop it here). Empty state shows a tidy labelled box.
function AekLogo({ id, light }) {
  return (
    <span className={"aek-logo" + (light ? " light" : "")}>
      <image-slot
        id={id}
        class="aek-logo-slot"
        shape="rect"
        fit="contain"
        placeholder="Official AEK 2026 logo"
      ></image-slot>
    </span>
  );
}

function Cta() {
  return (
    <div className="cta-row">
      <a className="btn" href="mailto:enquiry@acsiatech.com?subject=Meeting%20at%20AEK%202026">
        Book a slot <span className="arrow">&rarr;</span>
      </a>
      <span className="cta-email">enquiry@acsiatech.com</span>
    </div>
  );
}

function EventDetails() {
  return (
    <div className="details">
      <div className="detail"><span className="k">When</span><span><strong>16&ndash;17 June 2026</strong></span></div>
      <div className="detail"><span className="k">Where</span><span>Forum am Schlosspark &middot; Ludwigsburg, Germany</span></div>
    </div>
  );
}

// --- A · Photo full-bleed, message anchored lower-left -------------------
function PosterA() {
  return (
    <div className="poster">
      <Photo id="aek-a" />
      <div className="scrim scrim-top"></div>
      <div className="scrim scrim-bottom"></div>
      <div className="poster-frame"></div>
      <div className="poster-inner">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Logo />
          <AekLogo id="aek-logo-a" />
        </header>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "34px" }}>
          <div className="eyebrow">Automobil&#8209;Elektronik Kongress 2026</div>
          <h1 className="headline">We&rsquo;ll be at<br />AEK 2026.<br /><span className="accent">Let&rsquo;s meet.</span></h1>
          <div className="rule"></div>
          <EventDetails />
          <Cta />
          <div className="tagline">Acsia &middot; <b>Technology that drives Tomorrow</b></div>
        </div>
      </div>
    </div>
  );
}

// --- B · Split: photo top, Midnight panel bottom ------------------------
function PosterB() {
  return (
    <div className="poster">
      <Photo id="aek-b" className="split-photo-slot" />
      <div className="split-photo">
        <div className="scrim scrim-top"></div>
      </div>
      <div className="split-logo"><Logo /></div>
      <div className="split-aek"><AekLogo id="aek-logo-b" /></div>

      <div className="split-panel">
        <div className="eyebrow" style={{ color: "#36abff" }}>Meet Acsia at AEK 2026</div>
        <h1 className="headline" style={{ fontSize: "82px", marginTop: "20px" }}>
          We&rsquo;ll be in<br />Ludwigsburg. <span className="accent">Let&rsquo;s meet.</span>
        </h1>
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "30px" }}>
          <EventDetails />
          <Cta />
          <div className="tagline">Technology that drives Tomorrow</div>
        </div>
      </div>
    </div>
  );
}

// --- C · Full scrim, centered statement ---------------------------------
function PosterC() {
  return (
    <div className="poster">
      <Photo id="aek-c" />
      <div className="scrim scrim-full"></div>
      <div className="poster-frame"></div>
      <div className="poster-inner" style={{ alignItems: "center", textAlign: "center" }}>
        <Logo />

        <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
          <AekLogo id="aek-logo-c" light />
          <div className="eyebrow muted">We&rsquo;re attending &middot; 30th edition</div>
          <h1 className="headline" style={{ fontSize: "128px", letterSpacing: "-0.03em" }}>
            AEK<br /><span className="accent">2026</span>
          </h1>
          <div className="subhead" style={{ fontSize: "46px" }}>Let&rsquo;s meet in Ludwigsburg.</div>
          <div className="rule"></div>
          <div className="detail" style={{ fontSize: "26px", justifyContent: "center" }}>
            <strong>16&ndash;17 June 2026</strong>&nbsp;&middot;&nbsp;Forum am Schlosspark, Germany
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", width: "100%" }}>
          <Cta />
          <div className="tagline">Acsia &middot; <b>Technology that drives Tomorrow</b></div>
        </div>
      </div>
    </div>
  );
}

// --- canvas --------------------------------------------------------------
function AEKPosters() {
  return (
    <DesignCanvas>
      <DCSection
        id="aek2026"
        title="AEK 2026 — LinkedIn poster"
        subtitle="Portrait 1080×1350 · drop your hero photo into each · pick a direction"
      >
        <DCArtboard id="a" label="A · Photo-led, lower-left" width={1080} height={1350}>
          <PosterA />
        </DCArtboard>
        <DCArtboard id="b" label="B · Split panel" width={1080} height={1350}>
          <PosterB />
        </DCArtboard>
        <DCArtboard id="c" label="C · Centered statement" width={1080} height={1350}>
          <PosterC />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

Object.assign(window, { AEKPosters });
