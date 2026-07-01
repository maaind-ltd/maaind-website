// Automotive, wearables, security, docs, footer

const Automotive = () => /*#__PURE__*/React.createElement("section", {
  className: "section section-dark",
  id: "automotive"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement(SectionHeader, {
  idx: 4,
  kicker: "USE CASES",
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "Wherever human state", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "changes the outcome.")),
  sub: /*#__PURE__*/React.createElement(React.Fragment, null, "We built the platform for any setting where knowing how a person is doing changes the outcome: ", /*#__PURE__*/React.createElement("strong", null, "automotive"), " (DMS + OMS), ", /*#__PURE__*/React.createElement("strong", null, "defence"), " and safety-critical operator monitoring, ", /*#__PURE__*/React.createElement("strong", null, "health and digital therapeutics"), ", ", /*#__PURE__*/React.createElement("strong", null, "voice AIs and agents"), ", ", /*#__PURE__*/React.createElement("strong", null, "insurance"), ", and ", /*#__PURE__*/React.createElement("strong", null, "consumer wellbeing"), ". We are already live across several of these. Here is one worked example: ", /*#__PURE__*/React.createElement("span", {
    className: "accent-text"
  }, "automotive cabin sensing"), ".")
}), /*#__PURE__*/React.createElement("div", {
  className: "auto-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "auto-main"
}, /*#__PURE__*/React.createElement("div", {
  className: "cabin-frame"
}, /*#__PURE__*/React.createElement("div", {
  className: "cabin-bg"
}), /*#__PURE__*/React.createElement("div", {
  className: "cabin-grid"
}), /*#__PURE__*/React.createElement("div", {
  className: "cabin-occupants"
}, [{
  x: 22,
  y: 38,
  label: 'driver',
  state: 'attentive',
  stress: 0.18,
  img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&crop=faces',
  name: 'M. Andersen'
}, {
  x: 64,
  y: 38,
  label: 'passenger',
  state: 'relaxed',
  stress: 0.12,
  img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&crop=faces',
  name: 'A. Petrova'
}, {
  x: 22,
  y: 70,
  label: 'rear_L',
  state: 'drowsy',
  stress: 0.42,
  img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&h=240&fit=crop&crop=faces',
  name: 'D. Okafor'
}, {
  x: 64,
  y: 70,
  label: 'rear_R',
  state: 'engaged',
  stress: 0.22,
  img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=240&h=240&fit=crop&crop=faces',
  name: 'S. Tanaka'
}].map((o, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "occupant"
}, /*#__PURE__*/React.createElement("div", {
  className: "occ-bbox"
}, /*#__PURE__*/React.createElement("div", {
  className: "occ-face"
}, /*#__PURE__*/React.createElement("img", {
  src: o.img,
  alt: "",
  loading: "lazy",
  referrerPolicy: "no-referrer"
})), /*#__PURE__*/React.createElement("span", {
  className: "occ-landmark",
  style: {
    top: '40%',
    left: '38%'
  }
}), /*#__PURE__*/React.createElement("span", {
  className: "occ-landmark",
  style: {
    top: '40%',
    left: '62%'
  }
}), /*#__PURE__*/React.createElement("span", {
  className: "occ-landmark",
  style: {
    top: '55%',
    left: '50%'
  }
}), /*#__PURE__*/React.createElement("span", {
  className: "occ-landmark",
  style: {
    top: '70%',
    left: '42%'
  }
}), /*#__PURE__*/React.createElement("span", {
  className: "occ-landmark",
  style: {
    top: '70%',
    left: '58%'
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "occ-label"
}, /*#__PURE__*/React.createElement(Mono, null, o.label, " / ", o.name), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, o.state), /*#__PURE__*/React.createElement("div", {
  className: "mini-bar slim"
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: `${o.stress * 100}%`
  }
})))))), /*#__PURE__*/React.createElement("div", {
  className: "cabin-hud"
}, /*#__PURE__*/React.createElement("div", {
  className: "hud-item"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "CABIN STATE"), /*#__PURE__*/React.createElement(Mono, null, "3 attentive / 1 drowsy")), /*#__PURE__*/React.createElement("div", {
  className: "hud-item"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "ACTION"), /*#__PURE__*/React.createElement(Mono, {
  className: "accent-text"
}, "\u2192 rear ventilation +")), /*#__PURE__*/React.createElement("div", {
  className: "hud-item"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "CHIP"), /*#__PURE__*/React.createElement(Mono, null, "Jetson Orin / 38 ms"))))), /*#__PURE__*/React.createElement("div", {
  className: "auto-side"
}, /*#__PURE__*/React.createElement("div", {
  className: "auto-feature"
}, /*#__PURE__*/React.createElement("span", {
  className: "kicker"
}, "SAFETY"), /*#__PURE__*/React.createElement("h4", null, "Driver monitoring (DMS)"), /*#__PURE__*/React.createElement("p", null, "Drowsiness, microsleep, distraction, eyes-off-road, hands-near-wheel and the unresponsive-driver case. Built to the Euro NCAP 2026 driver-engagement protocol, using the timing thresholds it asks for.")), /*#__PURE__*/React.createElement("div", {
  className: "auto-feature"
}, /*#__PURE__*/React.createElement("span", {
  className: "kicker"
}, "COMFORT"), /*#__PURE__*/React.createElement("h4", null, "Occupant wellbeing (OMS)"), /*#__PURE__*/React.createElement("p", null, "Per-seat stress, mood and engagement, enough for the car to tune climate, audio and ambient lighting to whoever is actually sitting there."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 8,
    fontSize: 12,
    color: 'var(--fg-3)'
  }
}, "Per-seat OMS requires cabin camera + seat-PPG / capacitive-sensor inputs at integration.")), /*#__PURE__*/React.createElement("div", {
  className: "auto-feature"
}, /*#__PURE__*/React.createElement("span", {
  className: "kicker"
}, "STANDARDS POSTURE"), /*#__PURE__*/React.createElement("h4", null, "Aligned with automotive safety & cyber standards"), /*#__PURE__*/React.createElement("p", null, "The platform is built and documented with the major automotive standards in mind: functional safety, cyber-security and software-update processes for cars. We share our internal documentation with OEM and Tier\xA01 procurement teams on request."))))));
const Wearables = () => {
  const groups = [{
    n: '01',
    t: 'Every consumer wearable',
    d: 'We connect to the consumer off-the-shelf (COTS) wearables your users already own. If it reports a heart rate, we can read it.',
    pills: ['Apple Watch', 'Google / Pixel', 'Samsung', 'Garmin', 'Fitbit', 'Whoop', 'Oura']
  }, {
    n: '02',
    t: 'Chest straps & ECG-quality sensors',
    d: 'When you want the cleanest possible signal, we take higher-fidelity inputs too, including chest straps and ECG-grade sensors.',
    pills: ['Polar H10', 'Movesense', 'ECG straps', 'medical-grade']
  }, {
    n: '03',
    t: 'No wearable at all',
    d: 'Heart rate without anything on the body, captured contactlessly from a camera or from radar, then fed into the same pipeline.',
    pills: ['camera rPPG', 'radar', 'contactless']
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "wearables"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    idx: 7,
    kicker: "INTEGRATIONS",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Any heart-rate source,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "grad-text"
    }, "one HRV & stress model.")),
    sub: "We work with almost anything that reports a pulse. Whichever source it comes from, the heart rate flows into our own inference model and comes back as calibrated HRV and stress, in real time."
  }), /*#__PURE__*/React.createElement("div", {
    className: "integ-grid"
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.n,
    className: "integ-card"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, g.n), /*#__PURE__*/React.createElement("h4", null, g.t), /*#__PURE__*/React.createElement("p", null, g.d), /*#__PURE__*/React.createElement("div", {
    className: "integ-pills"
  }, g.pills.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    className: "logo-pill sm"
  }, p)))))), /*#__PURE__*/React.createElement("div", {
    className: "integ-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "integ-foot-vis"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wearable-pulse"
  })), /*#__PURE__*/React.createElement("div", {
    className: "integ-foot-body"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "accent-text"
  }, "HR \u2192 HRV + STRESS"), /*#__PURE__*/React.createElement("p", null, "All of these feed one place: our heart-rate-to-state model. Hand it a plain heart-rate stream, even from a device that only outputs HR, and it returns calibrated HRV and a continuous stress read in real time. Everything is normalised to a single, device-agnostic schema.")), /*#__PURE__*/React.createElement(Mono, {
    className: "dim integ-foot-note"
  }, "BLE GATT / ANT+ / raw stream API / iOS HealthKit / Google Health Connect"))));
};
const Security = () => {
  const buckets = [{
    label: 'DESIGNED WITH IN MIND',
    sub: 'documented against these standards',
    items: ['ISO 27001', 'ASPICE L3', 'Euro NCAP 2026']
  }, {
    label: 'WORKING WITH',
    sub: 'regulations we operate under',
    items: ['UK GDPR', 'EU GDPR', 'CCPA', 'HIPAA-aligned workflows', 'EU AI Act / emotion-recognition aware']
  }, {
    label: 'MOVING TOWARDS',
    sub: 'progressing alignment / audits',
    items: ['SOC 2 Type II', 'ISO 27001 certification', 'ASPICE L3 formal assessment', 'Cyber Essentials Plus']
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-alt",
    id: "security"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    idx: 8,
    kicker: "TRUST & SECURITY",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Privacy by design.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "grad-text"
    }, "Compliance by default.")),
    sub: "Runs fully on-device, even air-gapped. Permissively-licensed models, per-occupant consent, GDPR right-to-erasure, no raw-data egress, and full control over where data lives."
  }), /*#__PURE__*/React.createElement("div", {
    className: "sec-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-pillars"
  }, [{
    t: 'Runs fully on-device',
    d: 'The whole engine can run self-contained on an edge box with no network calls at runtime. Raw audio and video never have to leave the vehicle.'
  }, {
    t: 'Clean, permissive IP',
    d: 'New models ship under Apache-2.0, MIT and BSD licences with documented provenance. Clean intellectual property for when an acquirer or partner runs technical diligence.'
  }, {
    t: 'Erasure that means it',
    d: 'Per-occupant consent flags, and a GDPR Article 17 erasure that cryptographically zeroes the biometric data before the record is removed. Air-gap and EU / UK data residency supported.'
  }, {
    t: 'Auditable by design',
    d: 'Versioned models, reproducible builds, signed inference, and audit logs for every enrollment, deletion and label change.'
  }].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    className: "sec-pillar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-check"
  }, "\u2713"), /*#__PURE__*/React.createElement("h4", null, p.t), /*#__PURE__*/React.createElement("p", null, p.d))))), /*#__PURE__*/React.createElement("div", {
    className: "sec-side"
  }, buckets.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.label,
    className: "sec-bucket"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-bucket-h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, b.label), /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, b.sub)), /*#__PURE__*/React.createElement("div", {
    className: "sec-badges"
  }, b.items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "sec-badge empty"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, b.note || '-')) : b.items.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    className: "sec-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sec-tick"
  }), s)))))))));
};
const CODE_SNIPPETS = {
  python: [['c-com', '# Stream multi-modal state in real-time'], ['nl'], ['c-key', 'from'], ['t', ' maaind '], ['c-key', 'import'], ['t', ' Stream, Modality'], ['nl'], ['nl'], ['t', 'stream = Stream.connect(api_key=os.environ['], ['c-str', '"MAAIND_KEY"'], ['t', '])'], ['nl'], ['t', 'stream.attach(Modality.'], ['c-fn', 'VISION'], ['t', ', source='], ['c-str', '"camera://0"'], ['t', ')'], ['nl'], ['t', 'stream.attach(Modality.'], ['c-fn', 'AUDIO'], ['t', ', source='], ['c-str', '"mic://default"'], ['t', ')'], ['nl'], ['t', 'stream.attach(Modality.'], ['c-fn', 'PPG'], ['t', ', source='], ['c-str', '"polar://h10"'], ['t', ')'], ['nl'], ['nl'], ['c-key', 'async for'], ['t', ' state '], ['c-key', 'in'], ['t', ' stream.fuse(rate='], ['c-num', '30'], ['t', '):'], ['nl'], ['t', '    '], ['c-key', 'if'], ['t', ' state.stress > '], ['c-num', '0.7'], ['t', ':'], ['nl'], ['t', '        ui.'], ['c-fn', 'soften'], ['t', '()'], ['nl'], ['t', '    '], ['c-key', 'if'], ['t', ' state.drowsy > '], ['c-num', '0.5'], ['t', ':'], ['nl'], ['t', '        cabin.'], ['c-fn', 'cool'], ['t', '(target='], ['c-num', '19'], ['t', ')'], ['nl']],
  typescript: [['c-com', '// Stream multi-modal state in real-time'], ['nl'], ['c-key', 'import'], ['t', ' { Stream, Modality } '], ['c-key', 'from'], ['t', ' '], ['c-str', '"@maaind/sdk"'], ['t', ';'], ['nl'], ['nl'], ['c-key', 'const'], ['t', ' stream = '], ['c-key', 'await'], ['t', ' Stream.'], ['c-fn', 'connect'], ['t', '({ apiKey: process.env.MAAIND_KEY });'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.VISION, '], ['c-str', '"camera://0"'], ['t', ');'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.AUDIO,  '], ['c-str', '"mic://default"'], ['t', ');'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.PPG,    '], ['c-str', '"polar://h10"'], ['t', ');'], ['nl'], ['nl'], ['c-key', 'for await'], ['t', ' ('], ['c-key', 'const'], ['t', ' state '], ['c-key', 'of'], ['t', ' stream.'], ['c-fn', 'fuse'], ['t', '({ rate: '], ['c-num', '30'], ['t', ' })) {'], ['nl'], ['t', '  '], ['c-key', 'if'], ['t', ' (state.stress > '], ['c-num', '0.7'], ['t', ') ui.'], ['c-fn', 'soften'], ['t', '();'], ['nl'], ['t', '  '], ['c-key', 'if'], ['t', ' (state.drowsy > '], ['c-num', '0.5'], ['t', ') cabin.'], ['c-fn', 'cool'], ['t', '({ target: '], ['c-num', '19'], ['t', ' });'], ['nl'], ['t', '}'], ['nl']],
  swift: [['c-com', '// Stream multi-modal state in real-time'], ['nl'], ['c-key', 'import'], ['t', ' Maaind'], ['nl'], ['nl'], ['c-key', 'let'], ['t', ' stream = '], ['c-key', 'try await'], ['t', ' Stream.'], ['c-fn', 'connect'], ['t', '(apiKey: ProcessInfo.processInfo.environment['], ['c-str', '"MAAIND_KEY"'], ['t', ']!)'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(.vision, source: '], ['c-str', '"camera://front"'], ['t', ')'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(.audio,  source: '], ['c-str', '"mic://default"'], ['t', ')'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(.ppg,    source: '], ['c-str', '"healthkit"'], ['t', ')'], ['nl'], ['nl'], ['c-key', 'for try await'], ['t', ' state '], ['c-key', 'in'], ['t', ' stream.'], ['c-fn', 'fuse'], ['t', '(rate: '], ['c-num', '30'], ['t', ') {'], ['nl'], ['t', '  '], ['c-key', 'if'], ['t', ' state.stress > '], ['c-num', '0.7'], ['t', ' { ui.'], ['c-fn', 'soften'], ['t', '() }'], ['nl'], ['t', '  '], ['c-key', 'if'], ['t', ' state.drowsy > '], ['c-num', '0.5'], ['t', ' { cabin.'], ['c-fn', 'cool'], ['t', '(target: '], ['c-num', '19'], ['t', ') }'], ['nl'], ['t', '}'], ['nl']],
  kotlin: [['c-com', '// Stream multi-modal state in real-time'], ['nl'], ['c-key', 'import'], ['t', ' ai.maaind.*'], ['nl'], ['nl'], ['c-key', 'val'], ['t', ' stream = Stream.'], ['c-fn', 'connect'], ['t', '(apiKey = System.getenv('], ['c-str', '"MAAIND_KEY"'], ['t', '))'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.VISION, '], ['c-str', '"camera://0"'], ['t', ')'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.AUDIO,  '], ['c-str', '"mic://default"'], ['t', ')'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.PPG,    '], ['c-str', '"healthconnect"'], ['t', ')'], ['nl'], ['nl'], ['t', 'stream.'], ['c-fn', 'fuse'], ['t', '(rate = '], ['c-num', '30'], ['t', ').'], ['c-fn', 'collect'], ['t', ' { state ->'], ['nl'], ['t', '  '], ['c-key', 'if'], ['t', ' (state.stress > '], ['c-num', '0.7'], ['t', ') ui.'], ['c-fn', 'soften'], ['t', '()'], ['nl'], ['t', '  '], ['c-key', 'if'], ['t', ' (state.drowsy > '], ['c-num', '0.5'], ['t', ') cabin.'], ['c-fn', 'cool'], ['t', '(target = '], ['c-num', '19'], ['t', ')'], ['nl'], ['t', '}'], ['nl']],
  rust: [['c-com', '// Stream multi-modal state in real-time'], ['nl'], ['c-key', 'use'], ['t', ' maaind::{Stream, Modality};'], ['nl'], ['nl'], ['c-key', 'let mut'], ['t', ' stream = Stream::'], ['c-fn', 'connect'], ['t', '(&env::var('], ['c-str', '"MAAIND_KEY"'], ['t', ')?).await?;'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Vision, '], ['c-str', '"camera://0"'], ['t', ');'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Audio,  '], ['c-str', '"mic://default"'], ['t', ');'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Ppg,    '], ['c-str', '"polar://h10"'], ['t', ');'], ['nl'], ['nl'], ['c-key', 'while let'], ['t', ' Some(state) = stream.'], ['c-fn', 'fuse'], ['t', '('], ['c-num', '30'], ['t', ').next().await {'], ['nl'], ['t', '    '], ['c-key', 'if'], ['t', ' state.stress > '], ['c-num', '0.7'], ['t', ' { ui::'], ['c-fn', 'soften'], ['t', '(); }'], ['nl'], ['t', '    '], ['c-key', 'if'], ['t', ' state.drowsy > '], ['c-num', '0.5'], ['t', ' { cabin::'], ['c-fn', 'cool'], ['t', '('], ['c-num', '19'], ['t', '); }'], ['nl'], ['t', '}'], ['nl']],
  'C++': [['c-com', '// Stream multi-modal state in real-time'], ['nl'], ['c-key', '#include'], ['t', ' '], ['c-str', '<maaind/stream.hpp>'], ['nl'], ['nl'], ['t', 'auto stream = maaind::Stream::'], ['c-fn', 'connect'], ['t', '(std::getenv('], ['c-str', '"MAAIND_KEY"'], ['t', '));'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Vision, '], ['c-str', '"camera://0"'], ['t', ');'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Audio,  '], ['c-str', '"mic://default"'], ['t', ');'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Ppg,    '], ['c-str', '"polar://h10"'], ['t', ');'], ['nl'], ['nl'], ['t', 'stream.'], ['c-fn', 'fuse'], ['t', '('], ['c-num', '30'], ['t', ', [&](auto& state) {'], ['nl'], ['t', '    '], ['c-key', 'if'], ['t', ' (state.stress > '], ['c-num', '0.7'], ['t', ')  ui::'], ['c-fn', 'soften'], ['t', '();'], ['nl'], ['t', '    '], ['c-key', 'if'], ['t', ' (state.drowsy > '], ['c-num', '0.5'], ['t', ') cabin::'], ['c-fn', 'cool'], ['t', '('], ['c-num', '19'], ['t', ');'], ['nl'], ['t', '});'], ['nl']],
  java: [['c-com', '// Stream multi-modal state in real-time'], ['nl'], ['c-key', 'import'], ['t', ' ai.maaind.Stream;'], ['nl'], ['c-key', 'import'], ['t', ' ai.maaind.Modality;'], ['nl'], ['nl'], ['t', 'Stream stream = Stream.'], ['c-fn', 'connect'], ['t', '(System.getenv('], ['c-str', '"MAAIND_KEY"'], ['t', '));'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.VISION, '], ['c-str', '"camera://0"'], ['t', ');'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.AUDIO,  '], ['c-str', '"mic://default"'], ['t', ');'], ['nl'], ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.PPG,    '], ['c-str', '"polar://h10"'], ['t', ');'], ['nl'], ['nl'], ['t', 'stream.'], ['c-fn', 'fuse'], ['t', '('], ['c-num', '30'], ['t', ').'], ['c-fn', 'forEach'], ['t', '(state -> {'], ['nl'], ['t', '    '], ['c-key', 'if'], ['t', ' (state.stress > '], ['c-num', '0.7'], ['t', ')  ui.'], ['c-fn', 'soften'], ['t', '();'], ['nl'], ['t', '    '], ['c-key', 'if'], ['t', ' (state.drowsy > '], ['c-num', '0.5'], ['t', ') cabin.'], ['c-fn', 'cool'], ['t', '('], ['c-num', '19'], ['t', ');'], ['nl'], ['t', '});'], ['nl']]
};
const LANG_LABELS = ['python', 'typescript', 'swift', 'kotlin', 'java', 'rust', 'C++'];

// Additional real Maaind API examples (string form + lightweight highlighter).
const API_SNIPPETS = {
  hrv: {
    python: `# Heart rate in, HRV and stress out
import requests

BASE = "https://api.maaind.com/v1"
AUTH = {"Authorization": "Token <your-token>"}

# 1. Send recent mean-HR readings: [timestamp_ms, bpm]
requests.post(f"{BASE}/send-hr/", headers=AUTH, json={
    "device_token": "driver-01",
    "hr_data": [[1669207020000, 71], [1669207021000, 72]],
    "auto_compute_hrv": True,
})

# 2. Read back the predicted HRV and stress state
r = requests.post(f"{BASE}/get-hrv/", headers=AUTH, json={
    "device_token": "driver-01",
    "timestamp_for_prediction_in_ms": 1669207126274,
})
print(r.json()["predicted_hrv"], r.json()["discrete_value"])`,
    typescript: `// Heart rate in, HRV and stress out
const BASE = "https://api.maaind.com/v1";
const AUTH = { Authorization: "Token <your-token>", "Content-Type": "application/json" };

// 1. Send recent mean-HR readings: [timestampMs, bpm]
await fetch(BASE + "/send-hr/", {
  method: "POST",
  headers: AUTH,
  body: JSON.stringify({
    device_token: "driver-01",
    hr_data: [[1669207020000, 71], [1669207021000, 72]],
    auto_compute_hrv: true,
  }),
});

// 2. Read back the predicted HRV and stress state
const res = await fetch(BASE + "/get-hrv/", {
  method: "POST",
  headers: AUTH,
  body: JSON.stringify({
    device_token: "driver-01",
    timestamp_for_prediction_in_ms: 1669207126274,
  }),
});
const hrv = await res.json();
console.log(hrv.predicted_hrv, hrv.discrete_value);`
  },
  ser: {
    python: `# Speech emotion, stress + cabin sound events
import base64, requests

BASE = "https://api.maaind.com/v1"
AUTH = {"Authorization": "Token <your-token>"}

wav = base64.b64encode(open("clip.wav", "rb").read()).decode()
r = requests.post(f"{BASE}/get-ser/", headers=AUTH, json={
    "device_token": "driver-01",
    "raw_audio": wav,
    "denoise": True,
})
s = r.json()
print(s["valence"], s["arousal"], s["stress_level"])
print(s["events"]["top"])   # e.g. ["breathing"]`,
    typescript: `// Speech emotion, stress + cabin sound events
import { readFileSync } from "fs";

const BASE = "https://api.maaind.com/v1";
const AUTH = { Authorization: "Token <your-token>", "Content-Type": "application/json" };

const wav = readFileSync("clip.wav").toString("base64");
const res = await fetch(BASE + "/get-ser/", {
  method: "POST",
  headers: AUTH,
  body: JSON.stringify({ device_token: "driver-01", raw_audio: wav, denoise: true }),
});
const s = await res.json();
console.log(s.valence, s.arousal, s.stress_level);
console.log(s.events.top);   // e.g. ["breathing"]`
  },
  vision: {
    python: `# Facial emotion + contactless heart rate (rPPG) from one frame
import base64, requests

BASE = "https://api.maaind.com/v1"
AUTH = {"Authorization": "Token <your-token>"}

jpg = base64.b64encode(open("frame.jpg", "rb").read()).decode()
r = requests.post(f"{BASE}/visual/frame/", headers=AUTH, json={
    "session_id": "driver-01",
    "frame": jpg,
})
v = r.json()
print(v["emotion"], v["heart_rate"], v["stress"]["score"])`,
    typescript: `// Facial emotion + contactless heart rate (rPPG) from one frame
import { readFileSync } from "fs";

const BASE = "https://api.maaind.com/v1";
const AUTH = { Authorization: "Token <your-token>", "Content-Type": "application/json" };

const jpg = readFileSync("frame.jpg").toString("base64");
const res = await fetch(BASE + "/visual/frame/", {
  method: "POST",
  headers: AUTH,
  body: JSON.stringify({ session_id: "driver-01", frame: jpg }),
});
const v = await res.json();
console.log(v.emotion, v.heart_rate, v.stress.score);`
  },
  stt: {
    python: `# Streaming speech-to-text - real-time, multi-language, auto language detection
import asyncio, json, websockets

URL = "wss://api.maaind.com/v1/transcribe/stream/?language=auto"
AUTH = {"Authorization": "Token <your-token>"}

async def main(mic):
    async with websockets.connect(URL, extra_headers=AUTH) as ws:
        async def push():
            async for chunk in mic:        # 16 kHz PCM audio, as it arrives
                await ws.send(chunk)
        asyncio.create_task(push())
        async for msg in ws:               # partials stream back live
            seg = json.loads(msg)
            print(seg["language"], seg["is_final"], seg["text"])

asyncio.run(main(mic_stream()))`,
    typescript: `// Streaming speech-to-text - real-time, multi-language, auto language detection
const ws = new WebSocket(
  "wss://api.maaind.com/v1/transcribe/stream/?language=auto&token=<your-token>"
);

ws.onmessage = (e) => {
  const seg = JSON.parse(e.data);
  // partials stream in live; is_final marks a closed segment
  console.log(seg.language, seg.is_final, seg.text);
};

// push 16 kHz PCM audio chunks as they arrive from the mic
mic.ondata = (chunk) => ws.send(chunk);`
  },
  attributes: {
    python: `# Age, sex & child-presence - from voice OR vision
import base64, requests

BASE = "https://api.maaind.com/v1"
AUTH = {"Authorization": "Token <your-token>"}

# From voice: enable detailed_mode on the SER endpoint
wav = base64.b64encode(open("clip.wav", "rb").read()).decode()
v = requests.post(f"{BASE}/get-ser/", headers=AUTH, json={
    "device_token": "cabin-01", "raw_audio": wav, "detailed_mode": True,
}).json()
print(v["voice_gender"], v["voice_age_smoothed"], v["audio_cpd_state"])

# From vision: the same attributes from a camera frame
jpg = base64.b64encode(open("frame.jpg", "rb").read()).decode()
f = requests.post(f"{BASE}/visual/frame/", headers=AUTH, json={
    "session_id": "cabin-01", "frame": jpg,
}).json()
print(f["sex"], f["age"], f["child_present"])`,
    typescript: `// Age, sex & child-presence - from voice OR vision
import { readFileSync } from "fs";

const BASE = "https://api.maaind.com/v1";
const AUTH = { Authorization: "Token <your-token>", "Content-Type": "application/json" };

// From voice: enable detailed_mode on the SER endpoint
const wav = readFileSync("clip.wav").toString("base64");
const v = await (await fetch(BASE + "/get-ser/", {
  method: "POST", headers: AUTH,
  body: JSON.stringify({ device_token: "cabin-01", raw_audio: wav, detailed_mode: true }),
})).json();
console.log(v.voice_gender, v.voice_age_smoothed, v.audio_cpd_state);

// From vision: the same attributes from a camera frame
const jpg = readFileSync("frame.jpg").toString("base64");
const f = await (await fetch(BASE + "/visual/frame/", {
  method: "POST", headers: AUTH,
  body: JSON.stringify({ session_id: "cabin-01", frame: jpg }),
})).json();
console.log(f.sex, f.age, f.child_present);`
  },
  dms: {
    python: `# Driver monitoring (DMS) - gaze, head pose, posture, hands, drowsiness
# Available in Maaind Automotive Solution
import base64, requests

BASE = "https://api.maaind.com/v1"
AUTH = {"Authorization": "Token <your-token>"}

jpg = base64.b64encode(open("frame.jpg", "rb").read()).decode()
d = requests.post(f"{BASE}/visual/frame/", headers=AUTH, json={
    "session_id": "driver-01",
    "frame": jpg,
}).json()
print(d["eye_gaze"], d["head_pose"])         # where the eyes and head point
print(d["eyes_open"], d["drowsiness"])       # eye state + drowsiness
print(d["hands_on_wheel"], d["posture"])     # steering wheel + body posture`,
    typescript: `// Driver monitoring (DMS) - gaze, head pose, posture, hands, drowsiness
// Available in Maaind Automotive Solution
import { readFileSync } from "fs";

const BASE = "https://api.maaind.com/v1";
const AUTH = { Authorization: "Token <your-token>", "Content-Type": "application/json" };

const jpg = readFileSync("frame.jpg").toString("base64");
const d = await (await fetch(BASE + "/visual/frame/", {
  method: "POST", headers: AUTH,
  body: JSON.stringify({ session_id: "driver-01", frame: jpg }),
})).json();
console.log(d.eye_gaze, d.head_pose);        // where the eyes and head point
console.log(d.eyes_open, d.drowsiness);      // eye state + drowsiness
console.log(d.hands_on_wheel, d.posture);    // steering wheel + body posture`
  }
};
const API_TABS = [{
  id: 'fusion',
  label: 'Fusion stream',
  desc: 'One fused state from every modality'
}, {
  id: 'hrv',
  label: 'HR/HRV/Stress',
  desc: 'Heart rate in, HRV and stress out'
}, {
  id: 'ser',
  label: 'Speech emotion',
  desc: 'Emotion, stress + sound events from audio'
}, {
  id: 'vision',
  label: 'Vision',
  desc: 'Face emotion + contactless heart rate'
}, {
  id: 'stt',
  label: 'Transcription',
  desc: 'Real-time streaming speech-to-text, multi-language with auto detection'
}, {
  id: 'attributes',
  label: 'Age/Sex/Child Detection',
  desc: 'Age, sex & child-presence, from voice or vision'
}, {
  id: 'dms',
  label: 'DMS',
  desc: 'Driver monitoring: gaze, head pose, posture, hands, drowsiness'
}];

// Lightweight highlighter: comments, double-quoted strings, numbers, keywords.
const HL_RE = /(#.*$|\/\/.*$)|("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)|(\b(?:import|from|const|let|var|await|async|return|if|else|for|while|in|of|def|use|fn|auto|new|True|False|None|true|false|null)\b)/;
function highlightCode(code) {
  const out = [];
  code.split('\n').forEach((line, li) => {
    if (li > 0) out.push(['nl']);
    let rest = line;
    while (rest.length) {
      const m = rest.match(HL_RE);
      if (!m) {
        out.push(['t', rest]);
        break;
      }
      if (m.index > 0) out.push(['t', rest.slice(0, m.index)]);
      const cls = m[1] ? 'c-com' : m[2] ? 'c-str' : m[3] ? 'c-num' : 'c-key';
      out.push([cls, m[0]]);
      rest = rest.slice(m.index + m[0].length);
    }
  });
  return out;
}
const DocsTabs = () => {
  const [api, setApi] = React.useState('fusion');
  const [lang, setLang] = React.useState('python');
  const langsForApi = api === 'fusion' ? LANG_LABELS : Object.keys(API_SNIPPETS[api]);
  const activeLang = langsForApi.includes(lang) ? lang : langsForApi[0];
  const tokens = api === 'fusion' ? CODE_SNIPPETS[activeLang] : highlightCode(API_SNIPPETS[api][activeLang]);
  const activeApi = API_TABS.find(a => a.id === api);
  return /*#__PURE__*/React.createElement("div", {
    className: "docs-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "docs-code"
  }, /*#__PURE__*/React.createElement("div", {
    className: "code-supertabs",
    role: "tablist",
    "aria-label": "Maaind API"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "code-supertabs-label"
  }, "API"), API_TABS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.id,
    type: "button",
    role: "tab",
    "aria-selected": a.id === api,
    className: 'code-supertab' + (a.id === api ? ' on' : ''),
    onClick: () => setApi(a.id)
  }, a.label))), /*#__PURE__*/React.createElement("div", {
    className: "code-tabs",
    role: "tablist"
  }, langsForApi.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    type: "button",
    role: "tab",
    "aria-selected": l === activeLang,
    className: 'code-tab' + (l === activeLang ? ' on' : ''),
    onClick: () => setLang(l)
  }, l))), /*#__PURE__*/React.createElement("pre", {
    className: "code-block",
    key: api + activeLang
  }, tokens.map((tok, i) => {
    if (tok[0] === 'nl') return '\n';
    if (tok[0] === 't') return tok[1];
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: tok[0]
    }, tok[1]);
  })), /*#__PURE__*/React.createElement("div", {
    className: "code-foot"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, activeApi.desc), /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "Some example APIs / full reference docs available upon request"))), /*#__PURE__*/React.createElement("div", {
    className: "docs-side"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://ea1wg59mqn4.typeform.com/to/iVv585ne",
    target: "_blank",
    rel: "noopener",
    className: "docs-link"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "FULL DOCS"), /*#__PURE__*/React.createElement("div", {
    className: "dl-title"
  }, "Detailed quickstart / access on request"), /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "https://ea1wg59mqn4.typeform.com/to/iVv585ne",
    target: "_blank",
    rel: "noopener",
    className: "docs-link"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "API REFERENCE"), /*#__PURE__*/React.createElement("div", {
    className: "dl-title"
  }, "HR/HRV / SER / vision / transcription / age/sex/child / DMS / fusion"), /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "https://ea1wg59mqn4.typeform.com/to/iVv585ne",
    target: "_blank",
    rel: "noopener",
    className: "docs-link"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "RECIPES"), /*#__PURE__*/React.createElement("div", {
    className: "dl-title"
  }, "DMS / OMS / biofeedback / more"), /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "https://ea1wg59mqn4.typeform.com/to/iVv585ne",
    target: "_blank",
    rel: "noopener",
    className: "docs-link accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "LIVE DEMO"), /*#__PURE__*/React.createElement("div", {
    className: "dl-title"
  }, "Available on demand / get in touch"), /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192"))));
};
const Docs = () => /*#__PURE__*/React.createElement("section", {
  className: "section",
  id: "docs"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement(SectionHeader, {
  idx: 9,
  kicker: "DEVELOPER EXPERIENCE",
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "Developer experience", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "we\u2019d want to use ourselves.")),
  sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Python and TypeScript today; Swift, Kotlin, Java, Rust and C++ on the way. Full docs, real APIs and SDKs behind them. The snippet below is one of ours, to give a feel for what the platform can do. ", /*#__PURE__*/React.createElement("a", {
    href: "https://ea1wg59mqn4.typeform.com/to/iVv585ne",
    target: "_blank",
    rel: "noopener",
    className: "link-accent"
  }, "Get in touch"), " for the full docs and a live demo.")
}), /*#__PURE__*/React.createElement(DocsTabs, null)));
const BENEFITS = [{
  n: '01',
  t: 'Affective AI, out of the box',
  d: 'A single API for emotion, stress, focus, fatigue, drowsiness and engagement - calibrated, continuous, deployment-ready.'
}, {
  n: '02',
  t: 'Smarter voice AI & agents',
  d: 'Give your assistant, IVR, copilot or LLM agent a sense of how the user actually feels - and let it respond accordingly.'
}, {
  n: '03',
  t: 'Smarter, personalised environments',
  d: 'Adapt vehicles, devices, operator stations and ambient systems to the human in the loop, in real time.'
}, {
  n: '04',
  t: 'Health, wellbeing & performance',
  d: 'Support individuals across stress, recovery, focus and resilience - clinically-grounded signals, consumer-grade UX.'
}, {
  n: '05',
  t: 'Understand your users, deeply',
  d: 'A continuous read of emotion, psychology and state - for product analytics, research, safety and personalisation.'
}];
const CTA = () => /*#__PURE__*/React.createElement("section", {
  className: "section section-cta"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "cta-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "cta-grid-bg"
}), /*#__PURE__*/React.createElement("span", {
  className: "eyebrow-kicker"
}, "READY WHEN YOU ARE"), /*#__PURE__*/React.createElement("h2", {
  className: "cta-title"
}, "Bring emotional intelligence", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  className: "grad-text"
}, "to every product you ship.")), /*#__PURE__*/React.createElement("p", {
  className: "cta-sub"
}, "Integration is fast. Most teams are live in a day with our REST API and SDKs, no extra hardware. Get a key, talk to an engineer, or ask for our security and automotive evidence packs. We\u2019ll help you ship."), /*#__PURE__*/React.createElement("div", {
  className: "cta-actions"
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
  className: "cta-fineprint"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "~1 day to first integration"), /*#__PURE__*/React.createElement("span", {
  className: "hr-sep"
}), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "engineer on the call / not a sales funnel"), /*#__PURE__*/React.createElement("span", {
  className: "hr-sep"
}), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "evidence packs ready for procurement")))));
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-top"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-brand"
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  className: "logo logo-img-link",
  "aria-label": "Maaind"
}, /*#__PURE__*/React.createElement("img", {
  src: "maaind_logo.png",
  alt: "Maaind",
  className: "logo-img logo-img-footer"
})), /*#__PURE__*/React.createElement("p", null, "Multimodal psychophysiology, fused and calibrated, deployable in the cloud or fully on-device."), /*#__PURE__*/React.createElement("div", {
  className: "footer-locations"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "EINDHOVEN / NL"), /*#__PURE__*/React.createElement("div", null, "High Tech Campus 6A")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "LONDON / UK"), /*#__PURE__*/React.createElement("div", null, "70 White Lion St, N1 9PP")))), /*#__PURE__*/React.createElement("div", {
  className: "footer-cols"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "kicker"
}, "PLATFORM"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Fusion engine"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Speech"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Vision"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Cardiac")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "kicker"
}, "DEPLOY"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Cloud"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Edge"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Automotive"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "On-prem")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "kicker"
}, "DEVELOPERS"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Quickstart"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "API"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "SDKs"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Recipes")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "kicker"
}, "COMPANY"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "About"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Research"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Blog"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Careers")))), /*#__PURE__*/React.createElement("div", {
  className: "footer-bot"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "\xA9 2026 Maaind Technologies B.V. / Eindhoven / London"), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "R&D across NL / UK / AT / US"))));
Object.assign(window, {
  Automotive,
  Wearables,
  Security,
  Docs,
  CTA,
  Footer
});