// Page sections for Maaind website

const THEMES = [
  { id: 'obsidian', label: 'Obsidian', sub: 'Default · emerald on ink', bg: '#0a0c0b', color: 'oklch(82% 0.18 165)' },
  { id: 'carbon',   label: 'Carbon',   sub: 'Cobalt on navy',           bg: '#04071a', color: 'oklch(72% 0.20 245)' },
  { id: 'plasma',   label: 'Plasma',   sub: 'Magenta on aubergine',     bg: '#0d0420', color: 'oklch(76% 0.22 320)' },
  { id: 'graphite', label: 'Graphite', sub: 'Amber on coffee',          bg: '#120c06', color: 'oklch(80% 0.17 70)'  },
  { id: 'parchment',label: 'Parchment',sub: 'Editorial light',          bg: '#f5f1e8', color: 'oklch(50% 0.16 30)'  },
];

const ThemeSwitch = () => {
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem('maaind.theme') || 'obsidian'; } catch (e) { return 'obsidian'; }
  });
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('maaind.theme', theme); } catch (e) {}
  }, [theme]);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const active = THEMES.find(t => t.id === theme) || THEMES[0];

  return (
    <div className="theme-switch" ref={ref}>
      <button type="button" className="theme-switch-btn" onClick={() => setOpen(o => !o)} aria-haspopup="listbox" aria-expanded={open}>
        <span className="theme-swatch-dual" style={{ background: active.bg }}>
          <span className="theme-swatch-accent" style={{ background: active.color }} />
        </span>
        <span>{active.label}</span>
        <span className="theme-caret">▾</span>
      </button>
      {open && (
        <div className="theme-menu" role="listbox">
          {THEMES.map(t => (
            <button key={t.id} type="button" role="option" aria-selected={t.id === theme}
              className={'theme-item' + (t.id === theme ? ' on' : '')}
              onClick={() => { setTheme(t.id); setOpen(false); }}>
              <span className="theme-swatch-dual" style={{ background: t.bg }}>
                <span className="theme-swatch-accent" style={{ background: t.color }} />
              </span>
              <span style={{display:'flex', flexDirection:'column', gap:2, alignItems:'flex-start'}}>
                <span>{t.label}</span>
                <span style={{fontFamily:'JetBrains Mono, monospace', fontSize:9.5, letterSpacing:'0.06em', color:'var(--fg-3)'}}>{t.sub}</span>
              </span>
              <span className="theme-item-mono">{t.id === theme ? '✓' : ''}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-left">
          <a href="#" className="logo logo-img-link" aria-label="Maaind">
            <img src="maaind_logo.png" alt="Maaind" className="logo-img" />
          </a>
          <ThemeSwitch />
        </div>
        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#fusion">Fusion</a>
          <a href="#deploy">Deploy</a>
          <a href="#automotive">Automotive</a>
          <a href="#security">Security</a>
          <a href="#docs">Docs</a>
        </div>
        <div className="nav-cta">
          <a href="https://ea1wg59mqn4.typeform.com/to/iVv585ne" target="_blank" rel="noopener" className="btn btn-ghost">Get in touch</a>
          <a href="https://ea1wg59mqn4.typeform.com/to/O1IhNavD" target="_blank" rel="noopener" className="btn btn-primary">Get API <span className="arr">→</span></a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="hero-grid-bg" />
    <div className="hero-spotlight" />
    <div className="container hero-inner">
      <div className="hero-status">
        <span className="status-dot" />
        <Mono>Powerful multi-modal fusion · live</Mono>
      </div>
      <h1 className="hero-title">
        The most multi-modal<br />
        <span className="grad-text">psychophysiology</span> platform<br />
        on the market.
      </h1>
      <p className="hero-sub">
        Maaind fuses voice, vision, cardiac, wearable and contextual signals into a single,
        continuous read of human state - arousal, valence, stress, focus, fatigue, drowsiness, engagement.
        Same fusion model in the cloud or on-device. Multi-user. Inference in &le;100 ms on supported architectures.
      </p>
      <div className="hero-cta">
        <a href="https://ea1wg59mqn4.typeform.com/to/O1IhNavD" target="_blank" rel="noopener" className="btn btn-primary btn-lg">Get API access <span className="arr">→</span></a>
        <a href="https://ea1wg59mqn4.typeform.com/to/iVv585ne" target="_blank" rel="noopener" className="btn btn-ghost btn-lg">Get in touch</a>
      </div>
      <div className="hero-reassure">
        <Mono className="dim">⏱ INTEGRATE IN A DAY</Mono>
        <span className="hr-sep" />
        <Mono className="dim">drop-in REST + SDKs · no extra hardware · cloud or on-device · we’ll help you ship</Mono>
      </div>

      <div className="hero-viz">
        <div className="viz-frame">
          <div className="viz-head">
            <div className="viz-traffic"><span /><span /><span /></div>
            <Mono className="viz-path">maaind/runtime · session_8a3f · 24fps · npu</Mono>
            <div className="viz-live"><span className="live-dot" /><Mono>LIVE</Mono></div>
          </div>
          <div className="viz-body">
            <div className="viz-col">
              <div className="viz-card">
                <div className="viz-card-h"><Mono>VISION · 30Hz</Mono><Mono className="dim">live</Mono></div>
                <div className="cv-stage cv-stage-photo">
                  <img src="hero-face.png" className="cv-photo" alt="" />
                  <div className="cv-photo-tint" />
                  <div className="cv-overlay-grid" />
                  <div className="cv-photo-frame">
                    <div className="cv-photo-bbox" />
                    <span className="cv-marker eye-l" />
                    <span className="cv-marker eye-r" />
                    <span className="cv-marker nose" />
                    <span className="cv-marker mouth-l" />
                    <span className="cv-marker mouth-r" />
                  </div>
                  <div className="cv-readouts">
                    <div className="cv-readout"><Mono className="dim">EYES</Mono><Mono className="accent-text">open · 0.98</Mono></div>
                    <div className="cv-readout"><Mono className="dim">GAZE</Mono><Mono>+0.12, −0.04</Mono></div>
                    <div className="cv-readout"><Mono className="dim">EMOTION</Mono><Mono>focused</Mono></div>
                    <div className="cv-readout"><Mono className="dim">DROWSY</Mono><Mono>0.07</Mono></div>
                  </div>
                </div>
              </div>
              <div className="viz-card mini">
                <div className="viz-card-h"><Mono>HRV · RMSSD</Mono><Mono className="dim">42 ms</Mono></div>
                <HRTrace width={520} height={64} />
              </div>
            </div>
            <div className="viz-col">
              <div className="viz-card">
                <div className="viz-card-h"><Mono>SPEECH · 16kHz · multi-speaker</Mono><Mono className="dim">noise-robust</Mono></div>
                <div style={{ padding: '14px 14px 6px' }}>
                  <Waveform height={70} bars={56} />
                </div>
                <div className="speech-tags">
                  <span className="chip">speaker · S2</span>
                  <span className="chip">lang · en-GB</span>
                  <span className="chip">stress · low</span>
                  <span className="chip">valence · +0.41</span>
                  <span className="chip accent">SNR · −6 dB ✓</span>
                </div>
              </div>
              <div className="viz-card">
                <div className="viz-card-h"><Mono>FUSION · STATE</Mono><Mono className="dim">on supported HW</Mono></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: 14 }}>
                  <EmotionRadar size={180} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <Bar label="Calm" v={0.78} />
                    <Bar label="Focus" v={0.66} />
                    <Bar label="Stress" v={0.24} />
                    <Bar label="Fatigue" v={0.18} />
                    <Bar label="Engagement" v={0.71} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="viz-foot">
            <Mono className="dim">▸ multi-user · multi-modal · multi-language</Mono>
            <Mono className="dim">cloud · edge · automotive · phone</Mono>
          </div>
        </div>
      </div>

      <div className="hero-logos">
        <Mono className="dim">Selected partners, collaborators &amp; research links</Mono>
        <div className="logos-row">
          {['NVIDIA', 'INTEL', 'QUALCOMM', 'UCL', 'TU/E'].map(l => (
            <span key={l} className="logo-pill">{l}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Bar = ({ label, v }) => (
  <div className="bar-row">
    <Mono className="bar-label">{label}</Mono>
    <div className="bar-track"><div className="bar-fill" style={{ width: `${v * 100}%` }} /></div>
    <Mono className="bar-val">{v.toFixed(2)}</Mono>
  </div>
);

// Stats strip
const Stats = () => (
  <section className="stats">
    <div className="container">
      <div className="stats-grid">
        <div className="stat">
          <div className="stat-num"><Counter to={92.3} decimals={1} suffix="%" /></div>
          <div className="stat-label">SER weighted F1<br /><span className="dim mono">IEMOCAP · competitive with published SOTA</span></div>
        </div>
        <div className="stat">
          <div className="stat-num">&le;<Counter to={100} suffix=" ms" /></div>
          <div className="stat-label">inference latency<br /><span className="dim mono">on supported architectures · cloud / on-prem varies</span></div>
        </div>
        <div className="stat">
          <div className="stat-num"><Counter to={5} /></div>
          <div className="stat-label">modality families fused<br /><span className="dim mono">voice · vision · cardiac · wearable · context</span></div>
        </div>
        <div className="stat">
          <div className="stat-num"><Counter to={30} />+</div>
          <div className="stat-label">languages supported<br /><span className="dim mono">SER · streaming</span></div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Nav, Hero, Bar, Stats });
