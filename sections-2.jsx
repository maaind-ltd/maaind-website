// Capabilities, fusion architecture, deployment, automotive sections

// 10 capabilities
const CAPS = [
  { n: '01', t: 'One read of the whole person', d: 'Vision, voice and the heart, fused into one continuous read of how someone is genuinely doing. Emotion and stress first, then focus, fatigue, drowsiness and engagement. Plenty of teams do one signal well. Putting them all together is the hard part, and it is the part we built.', tag: 'PLATFORM' },
  { n: '02', t: 'Runs on the edge, no cloud needed', d: 'The whole engine fits on a single box in the vehicle and runs fully offline. An air-gapped car behaves exactly like a connected one, because nothing ever phones home. Prefer the cloud instead? Same model, same API, your call.', tag: 'EDGE' },
  { n: '03', t: 'Already in the cabin', d: 'Live in cabin-monitoring programmes across several R&D settings. Driver and occupant monitoring built to the Euro NCAP 2026 driver-engagement protocol, watching up to four people at once, each with their own state.', tag: 'AUTOMOTIVE' },
  { n: '04', t: 'Four people, four reads', d: 'Driver, front passenger and whoever is in the back. Up to four occupants tracked at once across camera and microphone, each with their own state and policy. Child-presence detection is built in for the rear seats.', tag: 'CABIN' },
  { n: '05', t: 'Everything the body shows', d: 'Far more than a single mood label. From the face we read emotion, stress, valence and arousal, plus gaze direction, head pose, eye-open state, drowsiness, yawns, and body and hand position. Heart rate and breathing come straight from the camera, with no wearable required, and our heart-rate-to-state model turns that pulse, or one from almost any wearable, into real-time HRV and stress.', tag: 'VISION + CARDIAC' },
  { n: '06', t: 'Built for the chips you ship', d: 'Optimised for NVIDIA and a range of other GPU and NPU accelerators, with an Intel NPU collaboration and cloud GPU when you need to scale. We tune and distil to the exact silicon you ship on. Ask us about a specific chip.', tag: 'SILICON' },
  { n: '07', t: 'State-of-the-art emotion and stress, from the voice', d: 'Speech emotion and stress recognition that holds up in a noisy, far-field cabin. The same audio also tells you who is speaking, adult or child, coughs, crying and raised voices, overlapping talkers, and whether anyone is speaking at all. Benchmarks and methodology on request.', tag: 'VOICE' },
  { n: '08', t: 'We will tune it to you', d: 'Bring your data, your vertical and your hardware target, and our team fine-tunes and distils the model with you, usually in days rather than quarters. It is a service we run alongside you, not a docs page we point you at.', tag: 'SERVICE' },
  { n: '09', t: 'Easy to build with', d: 'OpenAPI specs and code samples in Python, JavaScript, TypeScript, Swift, C++, Rust and Java. Streaming and request APIs, reference recipes for driver and occupant monitoring, and a live demo whenever you want one.', tag: 'DEVELOPERS' },
  { n: '10', t: 'Clean IP, privacy built in', d: 'New models ship under permissive Apache-2.0, MIT and BSD licences with documented provenance, so the IP holds up when an acquirer runs diligence. Per-occupant consent, a right-to-erasure that genuinely wipes the biometrics, and full audit logs are all there from day one.', tag: 'TRUST' },
];

const Capabilities = () => (
  <section className="section" id="platform">
    <div className="container">
      <SectionHeader idx={1} kicker="THE PLATFORM"
        title={<>One platform.<br /><span className="dim-2">Every signal that matters.</span></>}
        sub="Most of the field does one thing well: speech emotion, say, or driver monitoring. We fuse every signal end to end, and that fusion is the whole point." />
      <div className="caps-grid">
        {CAPS.map((c, i) => (
          <div key={c.n} className={`cap-card ${i === 0 ? 'cap-feature' : ''}`}>
            <div className="cap-head">
              <Mono className="cap-num">{c.n}</Mono>
              <Mono className="cap-tag">{c.tag}</Mono>
            </div>
            <h3 className="cap-title">{c.t}</h3>
            <p className="cap-desc">{c.d}</p>
            {i === 0 && (
              <div className="cap-preview">
                <div className="cap-pill"><span className="cap-dot" />vision</div>
                <div className="cap-pill"><span className="cap-dot" />voice</div>
                <div className="cap-pill"><span className="cap-dot" />heart rate</div>
                <div className="cap-pill"><span className="cap-dot" />HRV</div>
                <div className="cap-pill"><span className="cap-dot" />wearable</div>
                <div className="cap-pill"><span className="cap-dot" />EEG</div>
                <div className="cap-pill"><span className="cap-dot" />context</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Fusion architecture diagram
const Fusion = () => {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % 5), 1000);
    return () => clearInterval(id);
  }, []);
  const inputs = [
    { k: 'VISION', items: ['face_emotion + stress', 'gaze + eye_state', 'head_pose', 'drowsiness + yawns', 'body + hands'] },
    { k: 'VOICE', items: ['speech_emotion + stress', 'arousal / valence', 'speaker_id', 'adult / child', 'sound_events'] },
    { k: 'CARDIAC + WEARABLE', items: ['heart_rate in → HRV + stress out', 'PPG · rPPG (camera) · radar', 'respiration', 'Apple · Google · Polar', 'and all major COTS wearables'] },
    { k: 'EEG', items: ['band_power', 'frontal_asymmetry', 'cognitive_workload', 'research / on request'] },
    { k: 'CONTEXT', items: ['cabin_temp', 'road_class', 'time_of_day', 'user_baseline'] },
  ];
  return (
    <section className="section section-alt" id="fusion">
      <div className="container">
        <SectionHeader idx={2} kicker="MULTI-MODAL FUSION"
          title={<>One model. <span className="grad-text">Every signal.</span></>}
          sub="A custom fusion engine, trained on a large multimodal psychophysiology corpus. Continuous, calibrated and fast enough to run in real time on the hardware you already have." />

        <div className="fusion-stage">
          <div className="fusion-col fusion-inputs">
            {inputs.map((g, i) => (
              <div key={g.k} className={`fusion-input ${active === i ? 'on' : ''}`}>
                <div className="fusion-input-head">
                  <span className="signal-dot" />
                  <Mono>{g.k}</Mono>
                  <Mono className="dim">{i === 0 ? 'works with any FPS' : i === 1 ? 'works with almost any voice input' : i === 2 ? 'at highest resolution possible' : i === 3 ? 'at highest hardware-capable resolution' : 'continuous'}</Mono>
                </div>
                <div className="fusion-input-list">
                  {g.items.map(it => <span key={it} className="mono dim2">→ {it}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="fusion-col fusion-core">
            <svg className="fusion-lines" viewBox="0 0 200 500" preserveAspectRatio="none">
              {[0.1, 0.3, 0.5, 0.7, 0.9].map((y, i) => (
                <path key={i}
                  d={`M 0 ${y * 500} C 70 ${y * 500}, 130 250, 200 250`}
                  fill="none"
                  stroke={active === i ? 'var(--accent)' : 'rgba(255,255,255,0.08)'}
                  strokeWidth={active === i ? 1.5 : 1}
                  style={{ transition: 'all 200ms' }}
                />
              ))}
            </svg>
            <div className="fusion-core-box">
              <Mono className="dim">CUSTOM AND FLEXIBLE</Mono>
              <div className="core-title">SOTA<br />fusion engine</div>
              <div className="core-stats" style={{gridTemplateColumns:'1fr'}}>
                <div><Mono className="dim">profile</Mono><Mono>real-time optimised</Mono></div>
              </div>
              <div className="core-pulse" />
            </div>
          </div>

          <div className="fusion-col fusion-out">
            <div className="fusion-out-card">
              <Mono className="dim">CONTINUOUS STATE</Mono>
              <div className="out-row"><Mono>arousal</Mono><div className="mini-bar"><span style={{width:'62%'}}/></div><Mono>0.62</Mono></div>
              <div className="out-row"><Mono>valence</Mono><div className="mini-bar"><span style={{width:'74%'}}/></div><Mono>+0.41</Mono></div>
              <div className="out-row"><Mono>stress</Mono><div className="mini-bar"><span style={{width:'24%'}}/></div><Mono>0.24</Mono></div>
              <div className="out-row"><Mono>focus</Mono><div className="mini-bar"><span style={{width:'66%'}}/></div><Mono>0.66</Mono></div>
              <div className="out-row"><Mono>fatigue</Mono><div className="mini-bar"><span style={{width:'18%'}}/></div><Mono>0.18</Mono></div>
              <div className="out-row"><Mono>drowsy</Mono><div className="mini-bar"><span style={{width:'09%'}}/></div><Mono>0.09</Mono></div>
            </div>
            <div className="fusion-out-card small">
              <Mono className="dim">DOWNSTREAM</Mono>
              <div className="downstream">
                <span className="chip">adaptive UI</span>
                <span className="chip">driver monitoring</span>
                <span className="chip">recommend</span>
                <span className="chip">safety alert</span>
                <span className="chip">biofeedback</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DEPLOY_TARGETS = [
  { name: 'NVIDIA Jetson Orin (NX / AGX / Nano)', kind: 'edge GPU', notes: 'production automotive target · fully offline' },
  { name: 'NVIDIA · cloud / workstation', kind: 'GPU', notes: 'multi-tenant · CUDA-tuned' },
  { name: 'Intel', kind: 'NPU / CPU', notes: 'co-optimised with Intel · partnership' },
  { name: 'Apple Neural Engine', kind: 'NPU', notes: 'Apple Silicon · iOS / macOS' },
  { name: 'Automotive SOCs', kind: 'NPU / DSP', notes: 'Qualcomm · Renesas · on request' },
  { name: 'Phone (iOS / Android)', kind: 'NPU / GPU', notes: 'on-device · subset of features' },
  { name: 'Custom SOCs', kind: 'on request', notes: 'porting & optimisation engagement' },
];

const Deploy = () => (
  <section className="section" id="deploy">
    <div className="container">
      <SectionHeader idx={3} kicker="DEPLOY ANYWHERE"
        title={<>Cloud, edge,<br /><span className="grad-text">or somewhere in between.</span></>}
        sub="One model, one API, tuned for the silicon you actually ship on." />
      <div className="deploy-table deploy-table-3col">
        <div className="dtable-h">
          <Mono>TARGET</Mono><Mono>ACCELERATION</Mono><Mono>NOTES</Mono>
        </div>
        {DEPLOY_TARGETS.map(t => (
          <div key={t.name} className="dtable-r">
            <div className="dt-name">
              <span className="dt-dot" />{t.name}
            </div>
            <Mono className="dim">{t.kind}</Mono>
            <Mono className="dim">{t.notes}</Mono>
          </div>
        ))}
      </div>
      <div className="deploy-caveat">
        <Mono className="dim">Inference of ≤100 ms achievable on certain architectures with the production model. Cloud and on-prem inference speeds vary based on customer arrangement and integration setup.</Mono>
      </div>
      <div className="deploy-bottom">
        <div className="db-card">
          <Mono className="dim">ENTERPRISE SERVICE</Mono>
          <h4>Fine-tune in days,<br />distil in hours.</h4>
          <p>A managed service we run for enterprise customers. Bring your data, vertical or edge target, and our team adapts and distils the model with you, end to end.</p>
          <div className="db-pipe">
            <span><Mono>1</Mono><div>data ingest</div></span>
            <span className="arrow">→</span>
            <span><Mono>2</Mono><div>fine-tune</div></span>
            <span className="arrow">→</span>
            <span><Mono>3</Mono><div>distill</div></span>
            <span className="arrow">→</span>
            <span><Mono>4</Mono><div>deploy</div></span>
          </div>
        </div>
        <div className="db-card">
          <Mono className="dim">PRIVACY</Mono>
          <h4>Feature extraction<br />where you need it.</h4>
          <p>Feature extraction can run on-device, so raw audio and video never leave the user, or in the cloud when your deployment calls for it. Same model, same API, your call.</p>
          <div className="db-flow">
            <div className="db-node"><Mono>RAW</Mono></div>
            <div className="db-arr">extract</div>
            <div className="db-node on"><Mono>FEAT</Mono></div>
            <div className="db-arr">model</div>
            <div className="db-node on"><Mono>STATE</Mono></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Capabilities, Fusion, Deploy });
