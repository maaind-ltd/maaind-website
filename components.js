function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Shared visual components for Maaind website

const Mono = ({
  children,
  className = '',
  ...rest
}) => /*#__PURE__*/React.createElement("span", _extends({
  className: `mono ${className}`
}, rest), children);
const Tag = ({
  children,
  dot = true,
  accent = false
}) => /*#__PURE__*/React.createElement("span", {
  className: `tag ${accent ? 'tag-accent' : ''}`
}, dot && /*#__PURE__*/React.createElement("span", {
  className: "tag-dot"
}), /*#__PURE__*/React.createElement("span", {
  className: "mono"
}, children));
const Eyebrow = ({
  idx,
  label
}) => /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, /*#__PURE__*/React.createElement("span", {
  className: "mono dim"
}, String(idx).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
  className: "eyebrow-line"
}), /*#__PURE__*/React.createElement("span", {
  className: "mono"
}, label));
const SectionHeader = ({
  idx,
  kicker,
  title,
  sub
}) => /*#__PURE__*/React.createElement("div", {
  className: "section-header"
}, /*#__PURE__*/React.createElement(Eyebrow, {
  idx: idx,
  label: kicker
}), /*#__PURE__*/React.createElement("h2", {
  className: "section-title"
}, title), sub && /*#__PURE__*/React.createElement("p", {
  className: "section-sub"
}, sub));

// Animated waveform (simulates audio + emotion stream)
const Waveform = ({
  height = 80,
  bars = 64,
  accent = 'var(--accent)',
  live = true
}) => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    if (!live) return;
    let raf;
    const tick = () => {
      setT(performance.now() / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [live]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      height,
      width: '100%'
    }
  }, Array.from({
    length: bars
  }).map((_, i) => {
    const phase = i / bars;
    const v = Math.sin(t * 2 + i * 0.4) * 0.3 + Math.sin(t * 5 + i * 0.18) * 0.25 + Math.sin(t * 1.1 + i * 0.7) * 0.2;
    const h = Math.max(3, (Math.abs(v) + 0.1) * height * 0.9);
    const distance = Math.abs(phase - 0.5) * 2;
    const op = 0.35 + (1 - distance) * 0.65;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: `calc((100% - ${(bars - 1) * 2}px) / ${bars})`,
        height: h,
        background: accent,
        opacity: op,
        borderRadius: 1
      }
    });
  }));
};

// Animated HR / HRV trace
const HRTrace = ({
  width = 600,
  height = 120,
  accent = 'var(--accent)'
}) => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const tick = () => {
      setT(performance.now() / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const points = [];
  const N = 240;
  for (let i = 0; i < N; i++) {
    const x = i / N * width;
    const localT = i / N + t * 0.15;
    // QRS-like waveform
    const beatPhase = localT * 4 % 1;
    let y = height / 2;
    if (beatPhase < 0.05) y -= Math.sin(beatPhase / 0.05 * Math.PI) * 6;else if (beatPhase < 0.1) y += Math.sin((beatPhase - 0.05) / 0.05 * Math.PI) * 4;else if (beatPhase < 0.18) y -= Math.sin((beatPhase - 0.1) / 0.08 * Math.PI) * height * 0.4;else if (beatPhase < 0.25) y += Math.sin((beatPhase - 0.18) / 0.07 * Math.PI) * 10;
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hrFade",
    x1: "0",
    x2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: accent,
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.15",
    stopColor: accent,
    stopOpacity: "1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: accent,
    stopOpacity: "1"
  }))), /*#__PURE__*/React.createElement("polyline", {
    points: points.join(' '),
    fill: "none",
    stroke: "url(#hrFade)",
    strokeWidth: "1.5"
  }));
};

// Emotion radar (animated)
const EmotionRadar = ({
  size = 240,
  accent = 'var(--accent)'
}) => {
  const labels = ['Calm', 'Focus', 'Stress', 'Fatigue', 'Joy', 'Tension'];
  const [vals, setVals] = React.useState([0.7, 0.55, 0.3, 0.2, 0.6, 0.35]);
  React.useEffect(() => {
    const id = setInterval(() => {
      setVals(v => v.map(x => Math.max(0.1, Math.min(0.95, x + (Math.random() - 0.5) * 0.22))));
    }, 450);
    return () => clearInterval(id);
  }, []);
  const cx = size / 2,
    cy = size / 2,
    r = size * 0.34;
  const N = labels.length;
  const PADX = 30,
    PADY = 16;
  const points = vals.map((v, i) => {
    const a = i / N * Math.PI * 2 - Math.PI / 2;
    return [cx + Math.cos(a) * r * v, cy + Math.sin(a) * r * v];
  });
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: size,
    viewBox: `${-PADX} ${-PADY} ${size + PADX * 2} ${size + PADY * 2}`,
    preserveAspectRatio: "xMidYMid meet",
    style: {
      display: 'block',
      maxWidth: size + PADX * 2
    }
  }, [0.25, 0.5, 0.75, 1].map(s => /*#__PURE__*/React.createElement("polygon", {
    key: s,
    points: Array.from({
      length: N
    }).map((_, i) => {
      const a = i / N * Math.PI * 2 - Math.PI / 2;
      return `${cx + Math.cos(a) * r * s},${cy + Math.sin(a) * r * s}`;
    }).join(' '),
    fill: "none",
    stroke: "rgba(255,255,255,0.06)",
    strokeWidth: "1"
  })), labels.map((_, i) => {
    const a = i / N * Math.PI * 2 - Math.PI / 2;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: cx,
      y1: cy,
      x2: cx + Math.cos(a) * r,
      y2: cy + Math.sin(a) * r,
      stroke: "rgba(255,255,255,0.05)"
    });
  }), /*#__PURE__*/React.createElement("polygon", {
    points: points.map(p => p.join(',')).join(' '),
    fill: accent,
    fillOpacity: "0.12",
    stroke: accent,
    strokeWidth: "1.5",
    style: {
      transition: 'all 800ms cubic-bezier(.4,.2,.2,1)'
    }
  }), points.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: "2.5",
    fill: accent,
    style: {
      transition: 'all 800ms cubic-bezier(.4,.2,.2,1)'
    }
  })), labels.map((l, i) => {
    const a = i / N * Math.PI * 2 - Math.PI / 2;
    const cosA = Math.cos(a);
    const lx = cx + cosA * (r + 14);
    const ly = cy + Math.sin(a) * (r + 14);
    const anchor = cosA > 0.3 ? 'end' : cosA < -0.3 ? 'start' : 'middle';
    return /*#__PURE__*/React.createElement("text", {
      key: l,
      x: lx,
      y: ly,
      fill: "rgba(255,255,255,0.55)",
      fontSize: "9.5",
      fontFamily: "JetBrains Mono, monospace",
      textAnchor: anchor,
      dominantBaseline: "middle",
      style: {
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
      }
    }, l);
  }));
};

// Animated counter
const Counter = ({
  to,
  suffix = '',
  dur = 1400,
  decimals = 0
}) => {
  const [v, setV] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const tick = now => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          setV(to * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, {
      threshold: 0.3
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, dur]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, v.toFixed(decimals), suffix);
};
Object.assign(window, {
  Mono,
  Tag,
  Eyebrow,
  SectionHeader,
  Waveform,
  HRTrace,
  EmotionRadar,
  Counter
});