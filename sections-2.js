// Capabilities, fusion architecture, deployment, automotive sections

// 10 capabilities
const CAPS = [{
  n: '01',
  t: 'One read of the whole person',
  d: 'Vision, voice and the heart, fused into one continuous read of how someone is genuinely doing. Emotion and stress first, then focus, fatigue, drowsiness and engagement. Plenty of teams do one signal well. Putting them all together is the hard part, and it is the part we built.',
  tag: 'PLATFORM'
}, {
  n: '02',
  t: 'Runs on the edge, no cloud needed',
  d: 'The whole engine fits on a single box in the vehicle and runs fully offline. An air-gapped car behaves exactly like a connected one, because nothing ever phones home. Prefer the cloud instead? Same model, same API, your call.',
  tag: 'EDGE'
}, {
  n: '03',
  t: 'Already in the cabin',
  d: 'Live in cabin-monitoring programmes across several R&D settings. Driver and occupant monitoring built to the Euro NCAP 2026 driver-engagement protocol, watching up to four people at once, each with their own state.',
  tag: 'AUTOMOTIVE'
}, {
  n: '04',
  t: 'Four people, four reads',
  d: 'Driver, front passenger and whoever is in the back. Up to four occupants tracked at once across camera and microphone, each with their own state and policy. Child-presence detection is built in for the rear seats.',
  tag: 'CABIN'
}, {
  n: '05',
  t: 'Everything the body shows',
  d: 'Far more than a single mood label. From the face we read emotion, stress, valence and arousal, plus gaze direction, head pose, eye-open state, drowsiness, yawns, and body and hand position. Heart rate and breathing come straight from the camera, with no wearable required, and our heart-rate-to-state model turns that pulse, or one from almost any wearable, into real-time HRV and stress.',
  tag: 'VISION + CARDIAC'
}, {
  n: '06',
  t: 'Built for the chips you ship',
  d: 'Optimised for NVIDIA and a range of other GPU and NPU accelerators, with an Intel NPU collaboration and cloud GPU when you need to scale. We tune and distil to the exact silicon you ship on. Ask us about a specific chip.',
  tag: 'SILICON'
}, {
  n: '07',
  t: 'State-of-the-art emotion and stress, from the voice',
  d: 'Speech emotion and stress recognition that holds up in a noisy, far-field cabin. The same audio also tells you who is speaking, adult or child, coughs, crying and raised voices, overlapping talkers, and whether anyone is speaking at all. Benchmarks and methodology on request.',
  tag: 'VOICE'
}, {
  n: '08',
  t: 'We will tune it to you',
  d: 'Bring your data, your vertical and your hardware target, and our team fine-tunes and distils the model with you, usually in days rather than quarters. It is a service we run alongside you, not a docs page we point you at.',
  tag: 'SERVICE'
}, {
  n: '09',
  t: 'Easy to build with',
  d: 'OpenAPI specs and code samples in Python, JavaScript, TypeScript, Swift, C++, Rust and Java. Streaming and request APIs, reference recipes for driver and occupant monitoring, and a live demo whenever you want one.',
  tag: 'DEVELOPERS'
}, {
  n: '10',
  t: 'Clean IP, privacy built in',
  d: 'New models ship under permissive Apache-2.0, MIT and BSD licences with documented provenance, so the IP holds up when an acquirer runs diligence. Per-occupant consent, a right-to-erasure that genuinely wipes the biometrics, and full audit logs are all there from day one.',
  tag: 'TRUST'
}];
const Capabilities = () => /*#__PURE__*/React.createElement("section", {
  className: "section",
  id: "platform"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement(SectionHeader, {
  idx: 1,
  kicker: "THE PLATFORM",
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "One platform.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "dim-2"
  }, "Every signal that matters.")),
  sub: "Most of the field does one thing well: speech emotion, say, or driver monitoring. We fuse every signal end to end, and that fusion is the whole point."
}), /*#__PURE__*/React.createElement("div", {
  className: "caps-grid"
}, CAPS.map((c, i) => /*#__PURE__*/React.createElement("div", {
  key: c.n,
  className: `cap-card ${i === 0 ? 'cap-feature' : ''}`
}, /*#__PURE__*/React.createElement("div", {
  className: "cap-head"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "cap-num"
}, c.n), /*#__PURE__*/React.createElement(Mono, {
  className: "cap-tag"
}, c.tag)), /*#__PURE__*/React.createElement("h3", {
  className: "cap-title"
}, c.t), /*#__PURE__*/React.createElement("p", {
  className: "cap-desc"
}, c.d), i === 0 && /*#__PURE__*/React.createElement("div", {
  className: "cap-preview"
}, /*#__PURE__*/React.createElement("div", {
  className: "cap-pill"
}, /*#__PURE__*/React.createElement("span", {
  className: "cap-dot"
}), "vision"), /*#__PURE__*/React.createElement("div", {
  className: "cap-pill"
}, /*#__PURE__*/React.createElement("span", {
  className: "cap-dot"
}), "voice"), /*#__PURE__*/React.createElement("div", {
  className: "cap-pill"
}, /*#__PURE__*/React.createElement("span", {
  className: "cap-dot"
}), "heart rate"), /*#__PURE__*/React.createElement("div", {
  className: "cap-pill"
}, /*#__PURE__*/React.createElement("span", {
  className: "cap-dot"
}), "HRV"), /*#__PURE__*/React.createElement("div", {
  className: "cap-pill"
}, /*#__PURE__*/React.createElement("span", {
  className: "cap-dot"
}), "wearable"), /*#__PURE__*/React.createElement("div", {
  className: "cap-pill"
}, /*#__PURE__*/React.createElement("span", {
  className: "cap-dot"
}), "EEG"), /*#__PURE__*/React.createElement("div", {
  className: "cap-pill"
}, /*#__PURE__*/React.createElement("span", {
  className: "cap-dot"
}), "context")))))));

// Fusion architecture diagram
const Fusion = () => {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % 5), 1000);
    return () => clearInterval(id);
  }, []);
  const inputs = [{
    k: 'VISION',
    items: ['face_emotion + stress', 'gaze + eye_state', 'head_pose', 'drowsiness + yawns', 'body + hands']
  }, {
    k: 'VOICE',
    items: ['speech_emotion + stress', 'arousal / valence', 'speaker_id', 'adult / child', 'sound_events']
  }, {
    k: 'CARDIAC + WEARABLE',
    items: ['heart_rate in → HRV + stress out', 'PPG · rPPG (camera) · radar', 'respiration', 'Apple · Google · Polar', 'and all major COTS wearables']
  }, {
    k: 'EEG',
    items: ['band_power', 'frontal_asymmetry', 'cognitive_workload', 'research / on request']
  }, {
    k: 'CONTEXT',
    items: ['cabin_temp', 'road_class', 'time_of_day', 'user_baseline']
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-alt",
    id: "fusion"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    idx: 2,
    kicker: "MULTI-MODAL FUSION",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "One model. ", /*#__PURE__*/React.createElement("span", {
      className: "grad-text"
    }, "Every signal.")),
    sub: "A custom fusion engine, trained on a large multimodal psychophysiology corpus. Continuous, calibrated and fast enough to run in real time on the hardware you already have."
  }), /*#__PURE__*/React.createElement("div", {
    className: "fusion-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fusion-col fusion-inputs"
  }, inputs.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: g.k,
    className: `fusion-input ${active === i ? 'on' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "fusion-input-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "signal-dot"
  }), /*#__PURE__*/React.createElement(Mono, null, g.k), /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, i === 0 ? 'works with any FPS' : i === 1 ? 'works with almost any voice input' : i === 2 ? 'at highest resolution possible' : i === 3 ? 'at highest hardware-capable resolution' : 'continuous')), /*#__PURE__*/React.createElement("div", {
    className: "fusion-input-list"
  }, g.items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it,
    className: "mono dim2"
  }, "\u2192 ", it)))))), /*#__PURE__*/React.createElement("div", {
    className: "fusion-col fusion-core"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "fusion-lines",
    viewBox: "0 0 200 500",
    preserveAspectRatio: "none"
  }, [0.1, 0.3, 0.5, 0.7, 0.9].map((y, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: `M 0 ${y * 500} C 70 ${y * 500}, 130 250, 200 250`,
    fill: "none",
    stroke: active === i ? 'var(--accent)' : 'rgba(255,255,255,0.08)',
    strokeWidth: active === i ? 1.5 : 1,
    style: {
      transition: 'all 200ms'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fusion-core-box"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "CUSTOM AND FLEXIBLE"), /*#__PURE__*/React.createElement("div", {
    className: "core-title"
  }, "SOTA", /*#__PURE__*/React.createElement("br", null), "fusion engine"), /*#__PURE__*/React.createElement("div", {
    className: "core-stats",
    style: {
      gridTemplateColumns: '1fr'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "profile"), /*#__PURE__*/React.createElement(Mono, null, "real-time optimised"))), /*#__PURE__*/React.createElement("div", {
    className: "core-pulse"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fusion-col fusion-out"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fusion-out-card"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "CONTINUOUS STATE"), /*#__PURE__*/React.createElement("div", {
    className: "out-row"
  }, /*#__PURE__*/React.createElement(Mono, null, "arousal"), /*#__PURE__*/React.createElement("div", {
    className: "mini-bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '62%'
    }
  })), /*#__PURE__*/React.createElement(Mono, null, "0.62")), /*#__PURE__*/React.createElement("div", {
    className: "out-row"
  }, /*#__PURE__*/React.createElement(Mono, null, "valence"), /*#__PURE__*/React.createElement("div", {
    className: "mini-bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '74%'
    }
  })), /*#__PURE__*/React.createElement(Mono, null, "+0.41")), /*#__PURE__*/React.createElement("div", {
    className: "out-row"
  }, /*#__PURE__*/React.createElement(Mono, null, "stress"), /*#__PURE__*/React.createElement("div", {
    className: "mini-bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '24%'
    }
  })), /*#__PURE__*/React.createElement(Mono, null, "0.24")), /*#__PURE__*/React.createElement("div", {
    className: "out-row"
  }, /*#__PURE__*/React.createElement(Mono, null, "focus"), /*#__PURE__*/React.createElement("div", {
    className: "mini-bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '66%'
    }
  })), /*#__PURE__*/React.createElement(Mono, null, "0.66")), /*#__PURE__*/React.createElement("div", {
    className: "out-row"
  }, /*#__PURE__*/React.createElement(Mono, null, "fatigue"), /*#__PURE__*/React.createElement("div", {
    className: "mini-bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '18%'
    }
  })), /*#__PURE__*/React.createElement(Mono, null, "0.18")), /*#__PURE__*/React.createElement("div", {
    className: "out-row"
  }, /*#__PURE__*/React.createElement(Mono, null, "drowsy"), /*#__PURE__*/React.createElement("div", {
    className: "mini-bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '09%'
    }
  })), /*#__PURE__*/React.createElement(Mono, null, "0.09"))), /*#__PURE__*/React.createElement("div", {
    className: "fusion-out-card small"
  }, /*#__PURE__*/React.createElement(Mono, {
    className: "dim"
  }, "DOWNSTREAM"), /*#__PURE__*/React.createElement("div", {
    className: "downstream"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "adaptive UI"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "driver monitoring"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "recommend"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "safety alert"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "biofeedback")))))));
};
const DEPLOY_TARGETS = [{
  name: 'NVIDIA Jetson Orin (NX / AGX / Nano)',
  kind: 'edge GPU',
  notes: 'production automotive target · fully offline'
}, {
  name: 'NVIDIA · cloud / workstation',
  kind: 'GPU',
  notes: 'multi-tenant · CUDA-tuned'
}, {
  name: 'Intel',
  kind: 'NPU / CPU',
  notes: 'co-optimised with Intel · partnership'
}, {
  name: 'Apple Neural Engine',
  kind: 'NPU',
  notes: 'Apple Silicon · iOS / macOS'
}, {
  name: 'Automotive SOCs',
  kind: 'NPU / DSP',
  notes: 'Qualcomm · Renesas · on request'
}, {
  name: 'Phone (iOS / Android)',
  kind: 'NPU / GPU',
  notes: 'on-device · subset of features'
}, {
  name: 'Custom SOCs',
  kind: 'on request',
  notes: 'porting & optimisation engagement'
}];
const Deploy = () => /*#__PURE__*/React.createElement("section", {
  className: "section",
  id: "deploy"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement(SectionHeader, {
  idx: 3,
  kicker: "DEPLOY ANYWHERE",
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "Cloud, edge,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "or somewhere in between.")),
  sub: "One model, one API, tuned for the silicon you actually ship on."
}), /*#__PURE__*/React.createElement("div", {
  className: "deploy-table deploy-table-3col"
}, /*#__PURE__*/React.createElement("div", {
  className: "dtable-h"
}, /*#__PURE__*/React.createElement(Mono, null, "TARGET"), /*#__PURE__*/React.createElement(Mono, null, "ACCELERATION"), /*#__PURE__*/React.createElement(Mono, null, "NOTES")), DEPLOY_TARGETS.map(t => /*#__PURE__*/React.createElement("div", {
  key: t.name,
  className: "dtable-r"
}, /*#__PURE__*/React.createElement("div", {
  className: "dt-name"
}, /*#__PURE__*/React.createElement("span", {
  className: "dt-dot"
}), t.name), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, t.kind), /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, t.notes)))), /*#__PURE__*/React.createElement("div", {
  className: "deploy-caveat"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "Inference of \u2264100 ms achievable on certain architectures with the production model. Cloud and on-prem inference speeds vary based on customer arrangement and integration setup.")), /*#__PURE__*/React.createElement("div", {
  className: "deploy-bottom"
}, /*#__PURE__*/React.createElement("div", {
  className: "db-card"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "ENTERPRISE SERVICE"), /*#__PURE__*/React.createElement("h4", null, "Fine-tune in days,", /*#__PURE__*/React.createElement("br", null), "distil in hours."), /*#__PURE__*/React.createElement("p", null, "A managed service we run for enterprise customers. Bring your data, vertical or edge target, and our team adapts and distils the model with you, end to end."), /*#__PURE__*/React.createElement("div", {
  className: "db-pipe"
}, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Mono, null, "1"), /*#__PURE__*/React.createElement("div", null, "data ingest")), /*#__PURE__*/React.createElement("span", {
  className: "arrow"
}, "\u2192"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Mono, null, "2"), /*#__PURE__*/React.createElement("div", null, "fine-tune")), /*#__PURE__*/React.createElement("span", {
  className: "arrow"
}, "\u2192"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Mono, null, "3"), /*#__PURE__*/React.createElement("div", null, "distill")), /*#__PURE__*/React.createElement("span", {
  className: "arrow"
}, "\u2192"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Mono, null, "4"), /*#__PURE__*/React.createElement("div", null, "deploy")))), /*#__PURE__*/React.createElement("div", {
  className: "db-card"
}, /*#__PURE__*/React.createElement(Mono, {
  className: "dim"
}, "PRIVACY"), /*#__PURE__*/React.createElement("h4", null, "Feature extraction", /*#__PURE__*/React.createElement("br", null), "where you need it."), /*#__PURE__*/React.createElement("p", null, "Feature extraction can run on-device, so raw audio and video never leave the user, or in the cloud when your deployment calls for it. Same model, same API, your call."), /*#__PURE__*/React.createElement("div", {
  className: "db-flow"
}, /*#__PURE__*/React.createElement("div", {
  className: "db-node"
}, /*#__PURE__*/React.createElement(Mono, null, "RAW")), /*#__PURE__*/React.createElement("div", {
  className: "db-arr"
}, "extract"), /*#__PURE__*/React.createElement("div", {
  className: "db-node on"
}, /*#__PURE__*/React.createElement(Mono, null, "FEAT")), /*#__PURE__*/React.createElement("div", {
  className: "db-arr"
}, "model"), /*#__PURE__*/React.createElement("div", {
  className: "db-node on"
}, /*#__PURE__*/React.createElement(Mono, null, "STATE")))))));
Object.assign(window, {
  Capabilities,
  Fusion,
  Deploy
});