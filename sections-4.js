// New sections: top-of-page expandable Benefits, customer logo strip, VoiceAI, Health & Wellbeing.

// ---------- WHY INTEGRATE (expandable cards near top of page) ----------

const BENEFITS_X = [{
  n: '01',
  t: 'Affective AI, out of the box',
  d: 'A single API for emotion, stress, focus, fatigue, drowsiness and engagement. Calibrated, continuous and ready to ship.',
  eyebrow: 'PLATFORM',
  long: 'Drop one REST and SDK surface into your stack and you have a continuous, calibrated read of human state: emotion, arousal, valence, stress, focus, fatigue, drowsiness and engagement. It’s multimodal under the hood, picks its own models, and answers in 100 ms or less on supported hardware. No labelled-data project before you can start.',
  points: [['8 calibrated outputs', 'arousal, valence, stress, focus, fatigue, drowsiness, engagement, emotion'], ['One model, one API', 'identical surface across cloud, on-prem and on-device'], ['Integrate in a day', 'drop-in REST + SDKs, no extra hardware, runnable recipes']]
}, {
  n: '02',
  t: 'Smarter voice AI & agents',
  d: 'Give your assistant, IVR, copilot or LLM agent a sense of how the user is feeling, and let it respond accordingly.',
  eyebrow: 'AGENTS / VOICE AI',
  long: 'Most LLMs and voice stacks are deaf to tone. Maaind layers a real-time read of arousal, valence, stress and frustration over any agent, whether that is a voice copilot, an IVR, an in-cabin assistant or a customer-care bot. Agents that hear tone, not just transcripts, and answer accordingly.',
  points: [['Tone-aware turn-taking', 'stop interrupting the frustrated caller, slow down for the overloaded one'], ['Sentiment-routed IVR', 'escalate angry or distressed users to a human, automatically'], ['LLM context-on-tap', 'feed state into your prompt loop as plain JSON or function-tool calls']]
}, {
  n: '03',
  t: 'Smarter, personalised environments',
  d: 'Adapt vehicles, devices, operator stations and ambient systems to the human in the loop, in real time.',
  eyebrow: 'AMBIENT / AUTOMOTIVE',
  long: 'Cars, devices, operator stations, lighting and audio can all adapt once the system knows whether the user is calm or overwhelmed, focused or distracted. Ambient temperature, music tempo, suggestion timing, content density, HUD complexity. The same model runs in the cloud or quantised down to an automotive SOC.',
  points: [['Per-occupant adaptation', 'up to four occupants at once, each with their own state and policy'], ['HVAC / audio / lighting / HUD', 'a control signal for any ambient system in the cabin or room'], ['Cloud or on-SOC', 'INT8 / INT4 quantised across automotive, mobile and edge silicon']]
}, {
  n: '04',
  t: 'Health, wellbeing & performance',
  d: 'Support people through stress, recovery, focus and resilience. Clinically-grounded signals, with a consumer-grade experience on top.',
  eyebrow: 'HEALTH / DTx',
  long: 'Clinically-grounded signals, including HRV, respiration, voice biomarkers, sleep architecture and daily stress load, wrapped in outputs an everyday user can actually understand. It powers mental-wellbeing apps, recovery coaches, occupational-health programmes and digital therapeutics with regulated workflows.',
  points: [['Stress, recovery, readiness', 'continuous daily indices that work alongside the wearables your users already own'], ['Clinical signals, consumer UX', 'HRV / RMSSD / SDNN / EDA / respiration normalised to one schema'], ['DTx-ready', 'designed for regulated workflows and clinical-research deployments']]
}, {
  n: '05',
  t: 'Understand your users, deeply',
  d: 'A continuous read of emotion, psychology and state, for product analytics, research, safety and personalisation.',
  eyebrow: 'INSIGHTS / RESEARCH',
  long: 'A continuous, multimodal read of what your users feel as they use your product. Not post-hoc surveys, not sentiment-guessing on text, but a calibrated, time-aligned signal. Built for product analytics teams, user-research labs, safety teams and personalisation engines.',
  points: [['Time-aligned with telemetry', 'fuse psychological state with your existing product events'], ['Cohorts & segments', 'per-user baselines so deltas are meaningful, not noise'], ['Safety & personalisation', 'flag distress, surface the right content, adapt difficulty']]
}];
const WhyIntegrate = () => {
  const [open, setOpen] = React.useState(0);
  const cards = BENEFITS_X.map((b, i) => /*#__PURE__*/React.createElement("button", {
    key: b.n,
    type: "button",
    className: 'benefit-card-x' + (open === i ? ' on' : ''),
    "aria-expanded": open === i,
    onClick: () => setOpen(o => o === i ? -1 : i)
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, b.n), /*#__PURE__*/React.createElement("div", {
    className: "benefit-t"
  }, b.t), /*#__PURE__*/React.createElement("div", {
    className: "benefit-d"
  }, b.d), /*#__PURE__*/React.createElement("span", {
    className: "benefit-toggle",
    "aria-hidden": "true"
  }, "+")));
  const active = open >= 0 ? BENEFITS_X[open] : null;
  return /*#__PURE__*/React.createElement("section", {
    className: "why-section",
    id: "why-integrate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "why-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-kicker"
  }, "WHY INTEGRATE MAAIND")), /*#__PURE__*/React.createElement("h2", {
    className: "why-title"
  }, "One integration.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "Five compounding benefits.")), /*#__PURE__*/React.createElement("p", {
    className: "why-sub"
  }, "Tap any card to open it up. One fusion model sits behind all five, so adopt one and the rest come almost for free.")), /*#__PURE__*/React.createElement("div", {
    className: "benefit-grid-x"
  }, cards, /*#__PURE__*/React.createElement("div", {
    className: 'benefit-detail' + (active ? ' open' : ''),
    "aria-hidden": !active
  }, active && /*#__PURE__*/React.createElement("div", {
    className: "benefit-detail-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "benefit-detail-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "benefit-detail-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-kicker"
  }, active.n, " / ", active.eyebrow)), /*#__PURE__*/React.createElement("h3", null, active.t), /*#__PURE__*/React.createElement("p", null, active.long)), /*#__PURE__*/React.createElement("div", {
    className: "benefit-detail-points"
  }, active.points.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "benefit-point"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bp-dot"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, k), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)'
    }
  }, v))))))))));
};

// ---------- CUSTOMER / PARTNER LOGO STRIP ----------

// ---------- TRUSTED-BY STATEMENT ----------

const LogoStrip = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "logo-strip",
    "aria-label": "Trusted by enterprise customers and partners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-statement"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-kicker"
  }, "TRUSTED BY"), /*#__PURE__*/React.createElement("p", {
    className: "trust-line"
  }, "Enterprise customers and partners across ", /*#__PURE__*/React.createElement("span", {
    className: "accent-text"
  }, "technology"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "accent-text"
  }, "health"), " and ", /*#__PURE__*/React.createElement("span", {
    className: "accent-text"
  }, "automotive"), ".")));
};

// ---------- VOICE AI & AGENTS section ----------

const VoiceAI = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-alt",
    id: "voice-ai"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    idx: 5,
    kicker: "USE CASE / AGENTS",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Agents that ", /*#__PURE__*/React.createElement("span", {
      className: "grad-text"
    }, "hear how you feel"), ", not just what you said."),
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Most voice AIs and LLM agents only get the words. Maaind hands them the rest: tone of voice and facial signals, real-time emotion, stress and engagement, and where attention actually is. The agent can tell how someone feels and what they really mean. Built for ", /*#__PURE__*/React.createElement("strong", null, "IVR and contact centres"), ", ", /*#__PURE__*/React.createElement("strong", null, "voice copilots"), " and ", /*#__PURE__*/React.createElement("strong", null, "LLM agents"), ", in the cloud or on-device, on one API.")
  }), /*#__PURE__*/React.createElement("div", {
    className: "voice-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "voice-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "voice-grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "voice-bg-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vp-hud"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-hud-item"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "SESSION"), /*#__PURE__*/React.createElement(Mono, null, "call_38a / live")), /*#__PURE__*/React.createElement("div", {
    className: "vp-hud-item"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "LATENCY"), /*#__PURE__*/React.createElement(Mono, null, "42 ms")), /*#__PURE__*/React.createElement("div", {
    className: "vp-hud-item"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "SIGNAL"), /*#__PURE__*/React.createElement(Mono, {
    className: "accent-text"
  }, "voice + state")), /*#__PURE__*/React.createElement("div", {
    className: "vp-hud-item",
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "ACTION"), /*#__PURE__*/React.createElement(Mono, {
    className: "accent-text"
  }, "\u2192 slow cadence / empathise"))), /*#__PURE__*/React.createElement("div", {
    className: "vp-call"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-side-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-avatar"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=180&h=180&fit=crop&crop=faces",
    alt: "",
    loading: "lazy",
    referrerPolicy: "no-referrer"
  })), /*#__PURE__*/React.createElement("div", {
    className: "vp-side-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vp-name"
  }, "Caller / E. Vasquez"), /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "en-GB / live"))), /*#__PURE__*/React.createElement("div", {
    className: "vp-msgs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-msg"
  }, "\"I've tried resetting it three times and it's still not working\u2026\"", /*#__PURE__*/React.createElement("div", {
    className: "vp-msg-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "stress / 0.71"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "valence / \u22120.42")), /*#__PURE__*/React.createElement("div", {
    className: "vp-wave"
  }, Array.from({
    length: 28
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: `${20 + Math.abs(Math.sin(i * 0.7)) * 70}%`,
      animationDelay: `${i * 0.06}s`
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "vp-state"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "CALLER STATE"), /*#__PURE__*/React.createElement("div", {
    className: "vp-state-row"
  }, /*#__PURE__*/React.createElement(Mono, null, "arousal"), /*#__PURE__*/React.createElement("div", {
    className: "mini-bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '74%'
    }
  })), /*#__PURE__*/React.createElement(Mono, null, "0.74")), /*#__PURE__*/React.createElement("div", {
    className: "vp-state-row"
  }, /*#__PURE__*/React.createElement(Mono, null, "stress"), /*#__PURE__*/React.createElement("div", {
    className: "mini-bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '71%'
    }
  })), /*#__PURE__*/React.createElement(Mono, null, "0.71")), /*#__PURE__*/React.createElement("div", {
    className: "vp-state-row"
  }, /*#__PURE__*/React.createElement(Mono, null, "frustration"), /*#__PURE__*/React.createElement("div", {
    className: "mini-bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '64%'
    }
  })), /*#__PURE__*/React.createElement(Mono, null, "0.64"))))), /*#__PURE__*/React.createElement("div", {
    className: "vp-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-side-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-avatar agent"
  }, "M"), /*#__PURE__*/React.createElement("div", {
    className: "vp-side-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vp-name"
  }, "Agent / maaind-aware"), /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "adapting to caller state"))), /*#__PURE__*/React.createElement("div", {
    className: "vp-msgs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-msg agent"
  }, "\"I can hear this has been really frustrating. Let me take it off your plate, stay on the line while I check directly.\"", /*#__PURE__*/React.createElement("div", {
    className: "vp-msg-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip accent"
  }, "empathy mode"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "cadence \u221220%"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "tone / warm"))), /*#__PURE__*/React.createElement("div", {
    className: "vp-msg agent"
  }, "\"While I look into it, would it be easier if I called you back in five minutes?\"", /*#__PURE__*/React.createElement("div", {
    className: "vp-msg-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "offer / async"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "route / escalate(L2)"))))))), /*#__PURE__*/React.createElement("div", {
    className: "usecase-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "usecase-feature"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "IVR & CONTACT CENTRE"), /*#__PURE__*/React.createElement("h4", null, "Sentiment-routed support"), /*#__PURE__*/React.createElement("p", null, "Detect frustration, distress or churn-risk in the first 10 seconds, then route to the right agent, script and tier. It cuts average handle time and lifts CSAT.")), /*#__PURE__*/React.createElement("div", {
    className: "usecase-feature"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "VOICE COPILOTS"), /*#__PURE__*/React.createElement("h4", null, "Tone-aware assistants"), /*#__PURE__*/React.createElement("p", null, "In-cabin, in-app, in-home. The assistant slows down for the overloaded, gets out of the way of the focused, and asks before interrupting the calm.")), /*#__PURE__*/React.createElement("div", {
    className: "usecase-feature"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "LLM AGENTS"), /*#__PURE__*/React.createElement("h4", null, "Emotion as a context channel"), /*#__PURE__*/React.createElement("p", null, "Feed continuous emotional state into your prompt loop or function-tool surface. Agents that respond to ", /*#__PURE__*/React.createElement("em", null, "how"), " the user is asking, not just what they said."))))));
};

// ---------- HEALTH, WELLBEING & PERFORMANCE section ----------

const HRVPath = ({
  width = 380,
  height = 110
}) => {
  // gentle, irregular HRV-like trace
  const pts = [];
  const n = 80;
  for (let i = 0; i < n; i++) {
    const x = i / (n - 1) * width;
    const y = height / 2 + Math.sin(i * 0.5) * 12 + Math.sin(i * 1.3 + 1) * 8 + (Math.random() - 0.5) * 4;
    pts.push([x, y]);
  }
  const d = pts.map((p, i) => i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`).join(' ');
  const area = d + ` L ${width} ${height} L 0 ${height} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    className: "health-chart-svg",
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hrvg",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--accent)",
    stopOpacity: "0.32"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--accent)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#hrvg)"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "1.5"
  }));
};
const Health = () => {
  const stressDay = [0.18, 0.22, 0.28, 0.34, 0.52, 0.61, 0.48, 0.38, 0.42, 0.55, 0.66, 0.58, 0.46, 0.34, 0.28, 0.22, 0.18, 0.14];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-dark",
    id: "health"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    idx: 6,
    kicker: "USE CASE / HEALTH & WELLBEING",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Clinical signals.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "grad-text"
    }, "Consumer-grade UX.")),
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "The platform supports ", /*#__PURE__*/React.createElement("strong", null, "mental wellbeing"), ", ", /*#__PURE__*/React.createElement("strong", null, "recovery & performance"), ", ", /*#__PURE__*/React.createElement("strong", null, "occupational health"), " and ", /*#__PURE__*/React.createElement("strong", null, "digital therapeutics"), ", built on the wearables your users already own and the clinical signals our research stack already extracts.")
  }), /*#__PURE__*/React.createElement("div", {
    className: "health-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "health-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "health-grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "health-bg-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "health-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "health-portrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=480&h=640&fit=crop&crop=faces",
    alt: "",
    loading: "lazy",
    referrerPolicy: "no-referrer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "health-portrait-name"
  }, /*#__PURE__*/React.createElement("span", {
    className: "status-dot"
  }), /*#__PURE__*/React.createElement(Mono, {
    className: "accent-text"
  }, "L. Hartmann / day 14")), /*#__PURE__*/React.createElement("div", {
    className: "health-portrait-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip accent"
  }, "recovery / 78"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "strain / 12.4"))), /*#__PURE__*/React.createElement("div", {
    className: "health-vitals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "health-vitals-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "health-tile"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "HRV / RMSSD"), /*#__PURE__*/React.createElement("div", {
    className: "health-tile-v"
  }, "52", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--fg-3)',
      marginLeft: 4
    }
  }, "ms")), /*#__PURE__*/React.createElement(Mono, {
    className: "health-tile-trend up"
  }, "\u25B2 +6 vs baseline")), /*#__PURE__*/React.createElement("div", {
    className: "health-tile"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "RESTING HR"), /*#__PURE__*/React.createElement("div", {
    className: "health-tile-v"
  }, "58", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--fg-3)',
      marginLeft: 4
    }
  }, "bpm")), /*#__PURE__*/React.createElement(Mono, {
    className: "health-tile-trend up"
  }, "\u25BC \u22123 vs baseline")), /*#__PURE__*/React.createElement("div", {
    className: "health-tile"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "SLEEP"), /*#__PURE__*/React.createElement("div", {
    className: "health-tile-v"
  }, "7h 42m"), /*#__PURE__*/React.createElement(Mono, {
    className: "health-tile-trend up"
  }, "\u25B2 deep 1h 18m"))), /*#__PURE__*/React.createElement("div", {
    className: "health-chart"
  }, /*#__PURE__*/React.createElement("div", {
    className: "health-chart-h"
  }, /*#__PURE__*/React.createElement(Mono, null, "HRV / 24h trace"), /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "restorative window 23:00-06:00")), /*#__PURE__*/React.createElement(HRVPath, null)), /*#__PURE__*/React.createElement("div", {
    className: "health-stress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "health-chart-h"
  }, /*#__PURE__*/React.createElement(Mono, null, "DAILY STRESS LOAD"), /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "moderate / burnout-risk 0.18")), /*#__PURE__*/React.createElement("div", {
    className: "health-stress-bar"
  }, stressDay.map((v, i) => {
    const c = v < 0.3 ? 'var(--accent)' : v < 0.55 ? 'var(--accent-2)' : 'oklch(72% 0.16 35)';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "health-stress-seg",
      style: {
        background: `linear-gradient(to top, ${c} ${v * 100}%, rgba(127,127,127,0.08) ${v * 100}%)`
      }
    });
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "usecase-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "usecase-feature"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "MENTAL WELLBEING"), /*#__PURE__*/React.createElement("h4", null, "Stress & burnout, before the crash"), /*#__PURE__*/React.createElement("p", null, "Continuous daily stress load and recovery balance. Surface concerning trends days before users notice them themselves, for wellness apps, EAPs and occupational-health programmes.")), /*#__PURE__*/React.createElement("div", {
    className: "usecase-feature"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "RECOVERY & PERFORMANCE"), /*#__PURE__*/React.createElement("h4", null, "Readiness with real signals"), /*#__PURE__*/React.createElement("p", null, "HRV-based readiness, sleep architecture, training-load balance. Works with Polar, Garmin, Apple, Whoop, Oura and Empatica out of the box.")), /*#__PURE__*/React.createElement("div", {
    className: "usecase-feature"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "DIGITAL THERAPEUTICS"), /*#__PURE__*/React.createElement("h4", null, "DTx-grade signals, regulated workflows"), /*#__PURE__*/React.createElement("p", null, "Clinically-grounded streams, including HRV, EDA, respiration and voice biomarkers, with auditability, signed inference and data-residency controls for regulated deployments."))))));
};
Object.assign(window, {
  WhyIntegrate,
  LogoStrip,
  VoiceAI,
  Health
});