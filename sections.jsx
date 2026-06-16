// Page sections for Maaind website

const THEMES = [
  { id: 'obsidian', label: 'Obsidian', sub: 'Default · emerald on ink',  bg: '#0a0c0b', color: 'oklch(82% 0.18 165)', mode: 'dark'  },
  { id: 'harbor',   label: 'Harbor',   sub: 'Brand · teal on deep ink',   bg: '#06130f', color: 'oklch(80% 0.13 178)', mode: 'dark'  },
  { id: 'atrium',   label: 'Atrium',   sub: 'Brand · maaind teal on bone', bg: '#fafaf5', color: 'oklch(56% 0.12 178)', mode: 'light' },
  { id: 'mist',     label: 'Mist',     sub: 'Brand · teal on linen-grey', bg: '#eef0ec', color: 'oklch(54% 0.13 175)', mode: 'light' },
  { id: 'sage',     label: 'Sage',     sub: 'Warm · moss on putty',      bg: '#ece8dc', color: 'oklch(42% 0.10 145)', mode: 'light' },
  { id: 'bloom',    label: 'Bloom',    sub: 'Warm · clay on blush',      bg: '#f5ebe0', color: 'oklch(52% 0.13 28)',  mode: 'light' },
  { id: 'linen',    label: 'Linen',    sub: 'Warm · sage on cream',      bg: '#f1ece0', color: 'oklch(48% 0.10 150)', mode: 'light' },
  { id: 'parchment',label: 'Parchment',sub: 'Editorial light',           bg: '#f5f1e8', color: 'oklch(50% 0.16 30)',  mode: 'light' },
  { id: 'fjord',    label: 'Fjord',    sub: 'Cool · teal-blue on grey',  bg: '#eaeef2', color: 'oklch(50% 0.12 230)', mode: 'light' },
  { id: 'sand',     label: 'Sand',     sub: 'Warm · bronze on tan',      bg: '#f1e8d8', color: 'oklch(50% 0.10 65)',  mode: 'light' },
  { id: 'lilac',    label: 'Lilac',    sub: 'Soft · violet on lavender', bg: '#eeebf4', color: 'oklch(50% 0.14 300)', mode: 'light' },
  { id: 'meadow',   label: 'Meadow',   sub: 'Fresh · green on light',    bg: '#eef2e4', color: 'oklch(48% 0.13 145)', mode: 'light' },
  { id: 'dusk',     label: 'Dusk',     sub: 'Warm · peach on plum',      bg: '#1a1018', color: 'oklch(82% 0.12 55)',  mode: 'dark'  },
  { id: 'clay',     label: 'Clay',     sub: 'Warm · terracotta on earth',bg: '#1a120c', color: 'oklch(75% 0.14 40)',  mode: 'dark'  },
  { id: 'graphite', label: 'Graphite', sub: 'Amber on coffee',           bg: '#120c06', color: 'oklch(80% 0.17 70)',  mode: 'dark'  },
  { id: 'carbon',   label: 'Carbon',   sub: 'Cobalt on navy',            bg: '#04071a', color: 'oklch(72% 0.20 245)', mode: 'dark'  },
  { id: 'plasma',   label: 'Plasma',   sub: 'Magenta on aubergine',      bg: '#0d0420', color: 'oklch(76% 0.22 320)', mode: 'dark'  },
  { id: 'slate',    label: 'Slate',    sub: 'Cool · sky on blue-grey',   bg: '#0b0f15', color: 'oklch(80% 0.10 230)', mode: 'dark'  },
  { id: 'ember',    label: 'Ember',    sub: 'Warm · coral on charcoal',  bg: '#150d0a', color: 'oklch(73% 0.16 38)',  mode: 'dark'  },
  { id: 'midnight', label: 'Midnight', sub: 'Premium · gold on indigo',  bg: '#08081a', color: 'oklch(83% 0.13 88)',  mode: 'dark'  },
];

// Section-by-section theme combinations. Each cycles its `seq` across the page's vertical sections.
const THEME_MAP = THEMES.reduce((m, t) => { m[t.id] = t; return m; }, {});

const COMBOS = [
  { id: 'signature', combo: true, top: true, label: 'Maaind Signature', sub: 'Obsidian alternating with Bloom & Parchment', seq: ['obsidian','bloom','obsidian','parchment'], base: 'obsidian' },
  { id: 'ink-bloom',         combo: true, label: 'Obsidian × Bloom',   sub: 'Ink and warm blush',        seq: ['obsidian','bloom'],    base: 'obsidian' },
  { id: 'harbor-mist',       combo: true, label: 'Harbor × Mist',     sub: 'Brand teal, dark and light', seq: ['harbor','mist'],       base: 'harbor'   },
  { id: 'ink-atrium',        combo: true, label: 'Obsidian × Atrium',  sub: 'Ink and bone',             seq: ['obsidian','atrium'],   base: 'obsidian' },
  { id: 'dusk-bloom',        combo: true, label: 'Dusk × Bloom',       sub: 'Plum and blush',           seq: ['dusk','bloom'],        base: 'dusk'     },
  { id: 'clay-linen',        combo: true, label: 'Clay × Linen',       sub: 'Terracotta and cream',     seq: ['clay','linen'],        base: 'clay'     },
  { id: 'midnight-sand',     combo: true, label: 'Midnight × Sand',    sub: 'Indigo gold and warm tan', seq: ['midnight','sand'],     base: 'midnight' },
  { id: 'carbon-fjord',      combo: true, label: 'Carbon × Fjord',     sub: 'Cobalt, dark and light',   seq: ['carbon','fjord'],      base: 'carbon'   },
  { id: 'plasma-lilac',      combo: true, label: 'Plasma × Lilac',     sub: 'Magenta and lavender',     seq: ['plasma','lilac'],      base: 'plasma'   },
  { id: 'graphite-parchment',combo: true, label: 'Graphite × Parchment',sub: 'Amber and editorial',      seq: ['graphite','parchment'],base: 'graphite' },
];

const SCHEMES = [...COMBOS, ...THEMES];
const DEFAULT_SCHEME = 'signature';

function schemeSwatch(s) {
  if (s && s.combo) {
    const a = THEME_MAP[s.seq[0]] || THEMES[0];
    const b = THEME_MAP[s.seq[1]] || a;
    return { bg: `linear-gradient(135deg, ${a.bg} 0 50%, ${b.bg} 50% 100%)`, accent: b.color };
  }
  return { bg: s ? s.bg : '#000', accent: s ? s.color : '#fff' };
}

function applyScheme(id) {
  const root = document.documentElement;
  const s = SCHEMES.find(x => x.id === id) || COMBOS[0];
  const zones = Array.from(document.querySelectorAll('main > .theme-zone'));
  if (s.combo) {
    zones.forEach((z, i) => {
      const tid = s.seq[i % s.seq.length];
      const t = THEME_MAP[tid];
      z.setAttribute('data-theme', tid);
      z.setAttribute('data-mode', (t && t.mode) || 'dark');
    });
    const base = THEME_MAP[s.base] || THEMES[0];
    root.setAttribute('data-theme', s.base);
    root.setAttribute('data-mode', base.mode || 'dark');
  } else {
    zones.forEach(z => { z.removeAttribute('data-theme'); z.removeAttribute('data-mode'); });
    root.setAttribute('data-theme', s.id);
    root.setAttribute('data-mode', s.mode || 'dark');
  }
}

const ThemeSwitch = () => {
  const [scheme, setScheme] = React.useState(() => {
    try { return localStorage.getItem('maaind.scheme') || DEFAULT_SCHEME; } catch (e) { return DEFAULT_SCHEME; }
  });
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    applyScheme(scheme);
    const raf = requestAnimationFrame(() => applyScheme(scheme));
    try { localStorage.setItem('maaind.scheme', scheme); } catch (e) {}
    return () => cancelAnimationFrame(raf);
  }, [scheme]);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const active = SCHEMES.find(s => s.id === scheme) || COMBOS[0];
  const aSw = schemeSwatch(active);

  const renderItem = (s) => {
    const sw = schemeSwatch(s);
    return (
      <button key={s.id} type="button" role="option" aria-selected={s.id === scheme}
        className={'theme-item' + (s.id === scheme ? ' on' : '')}
        onClick={() => { setScheme(s.id); setOpen(false); }}>
        <span className="theme-swatch-dual" style={{ background: sw.bg }}>
          <span className="theme-swatch-accent" style={{ background: sw.accent }} />
        </span>
        <span style={{display:'flex', flexDirection:'column', gap:2, alignItems:'flex-start'}}>
          <span style={{display:'flex', alignItems:'center'}}>{s.label}{s.top && <span className="theme-pick">Top pick</span>}</span>
          <span style={{fontFamily:'JetBrains Mono, monospace', fontSize:9.5, letterSpacing:'0.06em', color:'var(--fg-3)'}}>{s.sub}</span>
        </span>
        <span className="theme-item-mono">{s.id === scheme ? '✓' : ''}</span>
      </button>
    );
  };

  // Theme dropdown intentionally hidden: this component still runs the effect
  // above that applies the per-section "Signature" theming on load.
  return null;
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
          <a href="#why-integrate">Why</a>
          <a href="#platform">Platform</a>
          <a href="#automotive">Automotive</a>
          <a href="#voice-ai">Voice AI</a>
          <a href="#health">Health</a>
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
        <Mono>Edge-deployed multimodal fusion, live in vehicles today</Mono>
      </div>
      <h1 className="hero-title">
        The most multimodal<br />
        <span className="grad-text">psychophysiology</span> platform<br />
        on the market.
      </h1>
      <p className="hero-sub">
        Maaind reads vision, voice and the heart together, and turns them into one continuous,
        calibrated picture of how a person is really doing: their emotion, stress, focus, fatigue, drowsiness and engagement.
        The same engine runs in the cloud or entirely on the device, even air-gapped with nothing leaving the car. It already runs in cabin-monitoring programmes with leading automakers.
      </p>
      <div className="hero-cta">
        <a href="https://ea1wg59mqn4.typeform.com/to/O1IhNavD" target="_blank" rel="noopener" className="btn btn-primary btn-lg">Get API access <span className="arr">→</span></a>
        <a href="https://ea1wg59mqn4.typeform.com/to/iVv585ne" target="_blank" rel="noopener" className="btn btn-ghost btn-lg">Get in touch</a>
      </div>
      <div className="hero-reassure">
        <Mono className="dim">⏱ INTEGRATE IN A DAY</Mono>
        <span className="hr-sep" />
        <Mono className="dim">drop-in REST and SDKs · runs on the device, even offline · live in vehicle programmes · and we help you ship</Mono>
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
                <div className="viz-card-h"><Mono>VISION · ANY FPS</Mono><Mono className="dim">live</Mono></div>
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
                <div className="viz-card-h"><Mono>VOICE · MULTI-SPEAKER</Mono><Mono className="dim">noise-robust</Mono></div>
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
            <Mono className="dim">▸ multi-user · multimodal · multilingual</Mono>
            <Mono className="dim">cloud · edge · automotive · phone</Mono>
          </div>
        </div>
      </div>

      <div className="hero-logos">
        <Mono className="dim">Selected customers, partners &amp; research links</Mono>
        <div className="logos-row">
          {['MICROSOFT', 'PORSCHE', 'NVIDIA', 'INTEL', 'ACHMEA', 'DSTL', 'UCL'].map(l => (
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
          <div className="stat-label">speech emotion + stress F1<br /><span className="dim mono">IEMOCAP · on par with published state of the art</span></div>
        </div>
        <div className="stat">
          <div className="stat-num">&le;<Counter to={100} suffix=" ms" /></div>
          <div className="stat-label">inference latency<br /><span className="dim mono">on supported architectures · cloud / on-prem varies</span></div>
        </div>
        <div className="stat">
          <div className="stat-num"><Counter to={5} /></div>
          <div className="stat-label">modality families fused<br /><span className="dim mono">voice · vision · cardiac+wearable · EEG · context</span></div>
        </div>
        <div className="stat">
          <div className="stat-num"><Counter to={30} />+</div>
          <div className="stat-label">languages, streaming<br /><span className="dim mono">speech emotion + stress recognition</span></div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Nav, Hero, Bar, Stats });
