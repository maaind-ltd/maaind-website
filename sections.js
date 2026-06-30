// Page sections for Maaind website

const THEMES = [{
  id: 'obsidian',
  label: 'Obsidian',
  sub: 'Default · emerald on ink',
  bg: '#0a0c0b',
  color: 'oklch(82% 0.18 165)',
  mode: 'dark'
}, {
  id: 'harbor',
  label: 'Harbor',
  sub: 'Brand · teal on deep ink',
  bg: '#06130f',
  color: 'oklch(80% 0.13 178)',
  mode: 'dark'
}, {
  id: 'atrium',
  label: 'Atrium',
  sub: 'Brand · maaind teal on bone',
  bg: '#fafaf5',
  color: 'oklch(56% 0.12 178)',
  mode: 'light'
}, {
  id: 'mist',
  label: 'Mist',
  sub: 'Brand · teal on linen-grey',
  bg: '#eef0ec',
  color: 'oklch(54% 0.13 175)',
  mode: 'light'
}, {
  id: 'sage',
  label: 'Sage',
  sub: 'Warm · moss on putty',
  bg: '#ece8dc',
  color: 'oklch(42% 0.10 145)',
  mode: 'light'
}, {
  id: 'bloom',
  label: 'Bloom',
  sub: 'Warm · clay on blush',
  bg: '#f5ebe0',
  color: 'oklch(52% 0.13 28)',
  mode: 'light'
}, {
  id: 'linen',
  label: 'Linen',
  sub: 'Warm · sage on cream',
  bg: '#f1ece0',
  color: 'oklch(48% 0.10 150)',
  mode: 'light'
}, {
  id: 'parchment',
  label: 'Parchment',
  sub: 'Editorial light',
  bg: '#f5f1e8',
  color: 'oklch(50% 0.16 30)',
  mode: 'light'
}, {
  id: 'fjord',
  label: 'Fjord',
  sub: 'Cool · teal-blue on grey',
  bg: '#eaeef2',
  color: 'oklch(50% 0.12 230)',
  mode: 'light'
}, {
  id: 'sand',
  label: 'Sand',
  sub: 'Warm · bronze on tan',
  bg: '#f1e8d8',
  color: 'oklch(50% 0.10 65)',
  mode: 'light'
}, {
  id: 'lilac',
  label: 'Lilac',
  sub: 'Soft · violet on lavender',
  bg: '#eeebf4',
  color: 'oklch(50% 0.14 300)',
  mode: 'light'
}, {
  id: 'meadow',
  label: 'Meadow',
  sub: 'Fresh · green on light',
  bg: '#eef2e4',
  color: 'oklch(48% 0.13 145)',
  mode: 'light'
}, {
  id: 'dusk',
  label: 'Dusk',
  sub: 'Warm · peach on plum',
  bg: '#1a1018',
  color: 'oklch(82% 0.12 55)',
  mode: 'dark'
}, {
  id: 'clay',
  label: 'Clay',
  sub: 'Warm · terracotta on earth',
  bg: '#1a120c',
  color: 'oklch(75% 0.14 40)',
  mode: 'dark'
}, {
  id: 'graphite',
  label: 'Graphite',
  sub: 'Amber on coffee',
  bg: '#120c06',
  color: 'oklch(80% 0.17 70)',
  mode: 'dark'
}, {
  id: 'carbon',
  label: 'Carbon',
  sub: 'Cobalt on navy',
  bg: '#04071a',
  color: 'oklch(72% 0.20 245)',
  mode: 'dark'
}, {
  id: 'plasma',
  label: 'Plasma',
  sub: 'Magenta on aubergine',
  bg: '#0d0420',
  color: 'oklch(76% 0.22 320)',
  mode: 'dark'
}, {
  id: 'slate',
  label: 'Slate',
  sub: 'Cool · sky on blue-grey',
  bg: '#0b0f15',
  color: 'oklch(80% 0.10 230)',
  mode: 'dark'
}, {
  id: 'ember',
  label: 'Ember',
  sub: 'Warm · coral on charcoal',
  bg: '#150d0a',
  color: 'oklch(73% 0.16 38)',
  mode: 'dark'
}, {
  id: 'midnight',
  label: 'Midnight',
  sub: 'Premium · gold on indigo',
  bg: '#08081a',
  color: 'oklch(83% 0.13 88)',
  mode: 'dark'
}];

// Section-by-section theme combinations. Each cycles its `seq` across the page's vertical sections.
const THEME_MAP = THEMES.reduce((m, t) => {
  m[t.id] = t;
  return m;
}, {});
const COMBOS = [{
  id: 'signature',
  combo: true,
  top: true,
  label: 'Maaind Signature',
  sub: 'Obsidian alternating with Bloom & Parchment',
  seq: ['obsidian', 'bloom', 'obsidian', 'parchment'],
  base: 'obsidian'
}, {
  id: 'ink-bloom',
  combo: true,
  label: 'Obsidian × Bloom',
  sub: 'Ink and warm blush',
  seq: ['obsidian', 'bloom'],
  base: 'obsidian'
}, {
  id: 'harbor-mist',
  combo: true,
  label: 'Harbor × Mist',
  sub: 'Brand teal, dark and light',
  seq: ['harbor', 'mist'],
  base: 'harbor'
}, {
  id: 'ink-atrium',
  combo: true,
  label: 'Obsidian × Atrium',
  sub: 'Ink and bone',
  seq: ['obsidian', 'atrium'],
  base: 'obsidian'
}, {
  id: 'dusk-bloom',
  combo: true,
  label: 'Dusk × Bloom',
  sub: 'Plum and blush',
  seq: ['dusk', 'bloom'],
  base: 'dusk'
}, {
  id: 'clay-linen',
  combo: true,
  label: 'Clay × Linen',
  sub: 'Terracotta and cream',
  seq: ['clay', 'linen'],
  base: 'clay'
}, {
  id: 'midnight-sand',
  combo: true,
  label: 'Midnight × Sand',
  sub: 'Indigo gold and warm tan',
  seq: ['midnight', 'sand'],
  base: 'midnight'
}, {
  id: 'carbon-fjord',
  combo: true,
  label: 'Carbon × Fjord',
  sub: 'Cobalt, dark and light',
  seq: ['carbon', 'fjord'],
  base: 'carbon'
}, {
  id: 'plasma-lilac',
  combo: true,
  label: 'Plasma × Lilac',
  sub: 'Magenta and lavender',
  seq: ['plasma', 'lilac'],
  base: 'plasma'
}, {
  id: 'graphite-parchment',
  combo: true,
  label: 'Graphite × Parchment',
  sub: 'Amber and editorial',
  seq: ['graphite', 'parchment'],
  base: 'graphite'
}];
const SCHEMES = [...COMBOS, ...THEMES];
const DEFAULT_SCHEME = 'signature';
function schemeSwatch(s) {
  if (s && s.combo) {
    const a = THEME_MAP[s.seq[0]] || THEMES[0];
    const b = THEME_MAP[s.seq[1]] || a;
    return {
      bg: `linear-gradient(135deg, ${a.bg} 0 50%, ${b.bg} 50% 100%)`,
      accent: b.color
    };
  }
  return {
    bg: s ? s.bg : '#000',
    accent: s ? s.color : '#fff'
  };
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
      z.setAttribute('data-mode', t && t.mode || 'dark');
    });
    const base = THEME_MAP[s.base] || THEMES[0];
    root.setAttribute('data-theme', s.base);
    root.setAttribute('data-mode', base.mode || 'dark');
  } else {
    zones.forEach(z => {
      z.removeAttribute('data-theme');
      z.removeAttribute('data-mode');
    });
    root.setAttribute('data-theme', s.id);
    root.setAttribute('data-mode', s.mode || 'dark');
  }
}
const ThemeSwitch = () => {
  const [scheme, setScheme] = React.useState(() => {
    try {
      return localStorage.getItem('maaind.scheme') || DEFAULT_SCHEME;
    } catch (e) {
      return DEFAULT_SCHEME;
    }
  });
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    applyScheme(scheme);
    const raf = requestAnimationFrame(() => applyScheme(scheme));
    try {
      localStorage.setItem('maaind.scheme', scheme);
    } catch (e) {}
    return () => cancelAnimationFrame(raf);
  }, [scheme]);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  const active = SCHEMES.find(s => s.id === scheme) || COMBOS[0];
  const aSw = schemeSwatch(active);
  const renderItem = s => {
    const sw = schemeSwatch(s);
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      type: "button",
      role: "option",
      "aria-selected": s.id === scheme,
      className: 'theme-item' + (s.id === scheme ? ' on' : ''),
      onClick: () => {
        setScheme(s.id);
        setOpen(false);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "theme-swatch-dual",
      style: {
        background: sw.bg
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "theme-swatch-accent",
      style: {
        background: sw.accent
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, s.label, s.top && /*#__PURE__*/React.createElement("span", {
      className: "theme-pick"
    }, "Top pick")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 9.5,
        letterSpacing: '0.06em',
        color: 'var(--fg-3)'
      }
    }, s.sub)), /*#__PURE__*/React.createElement("span", {
      className: "theme-item-mono"
    }, s.id === scheme ? '✓' : ''));
  };

  // Theme dropdown intentionally hidden: this component still runs the effect
  // above that applies the per-section "Signature" theming on load.
  return null;
};
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${scrolled ? 'nav-scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-left"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "logo logo-img-link",
    "aria-label": "Maaind"
  }, /*#__PURE__*/React.createElement("img", {
    src: "maaind_logo.png",
    alt: "Maaind",
    className: "logo-img"
  })), /*#__PURE__*/React.createElement(ThemeSwitch, null)), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#why-integrate"
  }, "Why"), /*#__PURE__*/React.createElement("a", {
    href: "#platform"
  }, "Platform"), /*#__PURE__*/React.createElement("a", {
    href: "#automotive"
  }, "Automotive"), /*#__PURE__*/React.createElement("a", {
    href: "#voice-ai"
  }, "Voice AI"), /*#__PURE__*/React.createElement("a", {
    href: "#health"
  }, "Health"), /*#__PURE__*/React.createElement("a", {
    href: "#security"
  }, "Security"), /*#__PURE__*/React.createElement("a", {
    href: "#docs"
  }, "Docs")), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://ea1wg59mqn4.typeform.com/to/iVv585ne",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost"
  }, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    href: "https://ea1wg59mqn4.typeform.com/to/O1IhNavD",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary"
  }, "Get API ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192")))));
};
const Hero = () => /*#__PURE__*/React.createElement("section", {
  className: "hero"
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-grid-bg"
}), /*#__PURE__*/React.createElement("div", {
  className: "hero-spotlight"
}), /*#__PURE__*/React.createElement("div", {
  className: "container hero-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-status"
}, /*#__PURE__*/React.createElement("span", {
  className: "status-dot"
}), /*#__PURE__*/React.createElement(Mono, null, "Edge and cloud-deployed multimodal fusion, live in multiple verticals in production")), /*#__PURE__*/React.createElement("h1", {
  className: "hero-title"
}, "The most multimodal", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  className: "grad-text"
}, "psychophysiology"), " platform", /*#__PURE__*/React.createElement("br", null), "on the market."), /*#__PURE__*/React.createElement("p", {
  className: "hero-sub"
}, "Maaind brings vision, voice and the heart into one continuous, calibrated read of how a person is really doing: emotion, stress, focus, fatigue, drowsiness and engagement. The same engine runs in the cloud or entirely on-device, even fully offline, and is already in use across multiple verticals."), /*#__PURE__*/React.createElement("div", {
  className: "hero-cta"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://ea1wg59mqn4.typeform.com/to/O1IhNavD",
  target: "_blank",
  rel: "noopener",
  className: "btn btn-primary btn-lg"
}, "Get API access ", /*#__PURE__*/React.createElement("span", {
  className: "arr"
}, "\u2192")), /*#__PURE__*/React.createElement("a", {
  href: "https://ea1wg59mqn4.typeform.com/to/iVv585ne",
  target: "_blank",
  rel: "noopener",
  className: "btn btn-ghost btn-lg"
}, "Get in touch")), /*#__PURE__*/React.createElement("div", {
  className: "hero-reassure"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "\u23F1 INTEGRATE IN A DAY"), /*#__PURE__*/React.createElement("span", {
  className: "hr-sep"
}), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "drop-in REST and SDKs \xB7 runs on the device, even offline \xB7 used in various automotive settings \xB7 and we help you ship")), /*#__PURE__*/React.createElement("div", {
  className: "hero-viz"
}, /*#__PURE__*/React.createElement("div", {
  className: "viz-frame"
}, /*#__PURE__*/React.createElement("div", {
  className: "viz-head"
}, /*#__PURE__*/React.createElement("div", {
  className: "viz-traffic"
}, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement(Mono, {
  className: "viz-path"
}, "maaind/runtime \xB7 session_8a3f \xB7 24fps \xB7 npu"), /*#__PURE__*/React.createElement("div", {
  className: "viz-live"
}, /*#__PURE__*/React.createElement("span", {
  className: "live-dot"
}), /*#__PURE__*/React.createElement(Mono, null, "LIVE"))), /*#__PURE__*/React.createElement("div", {
  className: "viz-body"
}, /*#__PURE__*/React.createElement("div", {
  className: "viz-col"
}, /*#__PURE__*/React.createElement("div", {
  className: "viz-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "viz-card-h"
}, /*#__PURE__*/React.createElement(Mono, null, "VISION \xB7 ANY FPS"), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "live")), /*#__PURE__*/React.createElement("div", {
  className: "cv-stage cv-stage-photo"
}, /*#__PURE__*/React.createElement("img", {
  src: "hero-face.png",
  className: "cv-photo",
  alt: ""
}), /*#__PURE__*/React.createElement("div", {
  className: "cv-photo-tint"
}), /*#__PURE__*/React.createElement("div", {
  className: "cv-overlay-grid"
}), /*#__PURE__*/React.createElement("div", {
  className: "cv-photo-frame"
}, /*#__PURE__*/React.createElement("div", {
  className: "cv-photo-bbox"
}), /*#__PURE__*/React.createElement("span", {
  className: "cv-marker eye-l"
}), /*#__PURE__*/React.createElement("span", {
  className: "cv-marker eye-r"
}), /*#__PURE__*/React.createElement("span", {
  className: "cv-marker nose"
}), /*#__PURE__*/React.createElement("span", {
  className: "cv-marker mouth-l"
}), /*#__PURE__*/React.createElement("span", {
  className: "cv-marker mouth-r"
})), /*#__PURE__*/React.createElement("div", {
  className: "cv-readouts"
}, /*#__PURE__*/React.createElement("div", {
  className: "cv-readout"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "EYES"), /*#__PURE__*/React.createElement(Mono, {
  className: "accent-text"
}, "open \xB7 0.98")), /*#__PURE__*/React.createElement("div", {
  className: "cv-readout"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "GAZE"), /*#__PURE__*/React.createElement(Mono, null, "+0.12, \u22120.04")), /*#__PURE__*/React.createElement("div", {
  className: "cv-readout"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "EMOTION"), /*#__PURE__*/React.createElement(Mono, null, "focused")), /*#__PURE__*/React.createElement("div", {
  className: "cv-readout"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "DROWSY"), /*#__PURE__*/React.createElement(Mono, null, "0.07"))))), /*#__PURE__*/React.createElement("div", {
  className: "viz-card mini"
}, /*#__PURE__*/React.createElement("div", {
  className: "viz-card-h"
}, /*#__PURE__*/React.createElement(Mono, null, "HRV \xB7 RMSSD"), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "42 ms")), /*#__PURE__*/React.createElement(HRTrace, {
  width: 520,
  height: 64
}))), /*#__PURE__*/React.createElement("div", {
  className: "viz-col"
}, /*#__PURE__*/React.createElement("div", {
  className: "viz-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "viz-card-h"
}, /*#__PURE__*/React.createElement(Mono, null, "VOICE \xB7 MULTI-SPEAKER"), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "noise-robust")), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '14px 14px 6px'
  }
}, /*#__PURE__*/React.createElement(Waveform, {
  height: 70,
  bars: 56
})), /*#__PURE__*/React.createElement("div", {
  className: "speech-tags"
}, /*#__PURE__*/React.createElement("span", {
  className: "chip"
}, "speaker \xB7 S2"), /*#__PURE__*/React.createElement("span", {
  className: "chip"
}, "lang \xB7 en-GB"), /*#__PURE__*/React.createElement("span", {
  className: "chip"
}, "stress \xB7 low"), /*#__PURE__*/React.createElement("span", {
  className: "chip"
}, "valence \xB7 +0.41"), /*#__PURE__*/React.createElement("span", {
  className: "chip accent"
}, "SNR \xB7 \u22126 dB \u2713"))), /*#__PURE__*/React.createElement("div", {
  className: "viz-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "viz-card-h"
}, /*#__PURE__*/React.createElement(Mono, null, "FUSION \xB7 STATE"), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "on supported HW")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    padding: 14
  }
}, /*#__PURE__*/React.createElement(EmotionRadar, {
  size: 180
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Bar, {
  label: "Calm",
  v: 0.78
}), /*#__PURE__*/React.createElement(Bar, {
  label: "Focus",
  v: 0.66
}), /*#__PURE__*/React.createElement(Bar, {
  label: "Stress",
  v: 0.24
}), /*#__PURE__*/React.createElement(Bar, {
  label: "Fatigue",
  v: 0.18
}), /*#__PURE__*/React.createElement(Bar, {
  label: "Engagement",
  v: 0.71
})))))), /*#__PURE__*/React.createElement("div", {
  className: "viz-foot"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "\u25B8 multi-user \xB7 multimodal \xB7 multilingual"), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "cloud \xB7 edge \xB7 automotive \xB7 phone")))), /*#__PURE__*/React.createElement("div", {
  className: "hero-logos"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "Selected customers, partners & research links"), /*#__PURE__*/React.createElement("div", {
  className: "logos-row"
}, ['MICROSOFT', 'PORSCHE', 'NVIDIA', 'INTEL', 'ACHMEA', 'DSTL', 'UCL'].map(l => /*#__PURE__*/React.createElement("span", {
  key: l,
  className: "logo-pill"
}, l))))));
const Bar = ({
  label,
  v
}) => /*#__PURE__*/React.createElement("div", {
  className: "bar-row"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "bar-label"
}, label), /*#__PURE__*/React.createElement("div", {
  className: "bar-track"
}, /*#__PURE__*/React.createElement("div", {
  className: "bar-fill",
  style: {
    width: `${v * 100}%`
  }
})), /*#__PURE__*/React.createElement(Mono, {
  className: "bar-val"
}, v.toFixed(2)));

// Stats strip
const Stats = () => /*#__PURE__*/React.createElement("section", {
  className: "stats"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "stats-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, /*#__PURE__*/React.createElement(Counter, {
  to: 92.3,
  decimals: 1,
  suffix: "%"
})), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "speech emotion + stress F1", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  className: "dim mono"
}, "IEMOCAP \xB7 on par with published state of the art"))), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, "\u2264", /*#__PURE__*/React.createElement(Counter, {
  to: 100,
  suffix: " ms"
})), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "inference latency", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  className: "dim mono"
}, "on supported architectures \xB7 cloud / on-prem varies"))), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, /*#__PURE__*/React.createElement(Counter, {
  to: 5
})), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "modality families fused", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  className: "dim mono"
}, "voice \xB7 vision \xB7 cardiac+wearable \xB7 EEG \xB7 context"))), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, /*#__PURE__*/React.createElement(Counter, {
  to: 30
}), "+"), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "languages, streaming", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  className: "dim mono"
}, "speech emotion + stress recognition"))))));
Object.assign(window, {
  Nav,
  Hero,
  Bar,
  Stats
});