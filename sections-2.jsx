// Capabilities, fusion architecture, deployment, automotive sections

// 10 capabilities
const CAPS = [
  { n: '01', t: 'Multi-modal psychophysiology, end-to-end', d: 'A single inference stack that fuses voice, vision, cardiac, wearable and contextual signals into a continuous, calibrated read of human state - arousal, valence, stress, focus, fatigue, drowsiness, engagement.', tag: 'PLATFORM' },
  { n: '02', t: 'Cloud or on-device', d: 'The same fusion model runs multi-tenant on cloud GPU or quantised down to fit a phone, automotive SOC, or air-gapped edge target. Identical APIs, your choice of deployment.', tag: 'DEPLOY' },
  { n: '03', t: 'Automotive-grade', d: 'Informed by Euro NCAP 2026 Driver Engagement protocols including impairment and unresponsive-driver scenarios. Per-occupant tracking up to 8 simultaneous occupants for cabin sensing.', tag: 'AUTOMOTIVE' },
  { n: '04', t: 'Multi-user mode', d: 'Disambiguate up to 8 occupants simultaneously across audio and video. Per-seat state, per-seat policy.', tag: 'CABIN' },
  { n: '05', t: 'Works with the wearables your users own', d: 'Drop-in connectors for Polar, Garmin, Apple, Samsung, Whoop, Oura, Fitbit, Empatica - plus generic BLE GATT, ANT+, iOS HealthKit and Google Health Connect. All streams normalised to a single modality-agnostic schema.', tag: 'WEARABLES' },
  { n: '06', t: 'Runs on every chip your product ships on', d: 'INT8 / INT4 quantised across the silicon spectrum: automotive SOCs from the major silicon families, consumer- and developer-class chips including an Intel partnership with engineering collaboration on Intel NPU, cloud GPU for multi-tenant inference, and CPU fallback for cost-sensitive deployments. Specific chip-level performance available on request.', tag: 'SILICON' },
  { n: '07', t: 'Highly competitive speech emotion recognition', d: 'Streaming SER and stress detection across 30+ languages. Multi-speaker with speaker ID, far-field, in-cabin and noisy-environment robust - paired with our own noise-filtering front-end. Competitive with published SOTA on standard benchmarks (e.g. ~92% weighted F1 on IEMOCAP). Benchmarks and methodology available on request.', tag: 'SER' },
  { n: '08', t: 'Fine-tune & distill - as a service', d: 'A managed engagement we run for enterprise customers. Bring your data, vertical, language or hardware target - our team adapts and distils the model with you in days, not quarters.', tag: 'SERVICE' },
  { n: '09', t: 'Developer experience we’d want to use ourselves', d: 'Python and TypeScript SDKs today; Swift, Kotlin, Java, Rust and C++ on the roadmap. Runnable examples, a webhook simulator, and reference recipes for DMS, OMS, biofeedback and wellness apps. Live demo available on demand - get in touch.', tag: 'DEVEX' },
  { n: '10', t: 'Standards & regulatory posture', d: 'Designed and documented with the relevant standards in mind - we are progressively moving towards alignment with ISO 27001, ISO 26262, ISO 21434, ASPICE L3 and UN R155 / R156, and we work with UK / EU GDPR, HIPAA-aligned and CCPA workflows. Mindful of the EU AI Act’s emotion-recognition provisions. Specific posture and supporting documentation shared with procurement on request.', tag: 'TRUST' },
];

const Capabilities = () => (
  <section className="section" id="platform">
    <div className="container">
      <SectionHeader idx={1} kicker="THE PLATFORM"
        title={<>One platform.<br /><span className="dim-2">Every signal that matters.</span></>}
        sub="Most competitors do single-modality SER or single-modality DMS. Maaind ships the cross-modal model end-to-end - the fusion layer is the differentiator." />
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
                <div className="cap-pill"><span className="cap-dot" />speech</div>
                <div className="cap-pill"><span className="cap-dot" />HRV</div>
                <div className="cap-pill"><span className="cap-dot" />PPG</div>
                <div className="cap-pill"><span className="cap-dot" />gaze</div>
                <div className="cap-pill"><span className="cap-dot" />IMU</div>
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
    { k: 'VISION', items: ['face_landmarks', 'gaze_vector', 'eyes_open', 'micro_expressions', 'head_pose'] },
    { k: 'AUDIO', items: ['speech_emotion', 'stress', 'arousal/valence', 'speaker_id', 'paralinguistics'] },
    { k: 'CARDIAC', items: ['heart_rate', 'HRV (RMSSD/SDNN)', 'PPG morphology', 'respiration', 'rPPG (camera)'] },
    { k: 'WEARABLE', items: ['Polar · Garmin', 'Apple · Samsung', 'Fitbit · Whoop · Oura', 'IMU · accelerometer'] },
    { k: 'CONTEXT', items: ['cabin_temp', 'weather', 'road_class', 'time_of_day', 'session_history', 'user_baseline'] },
  ];
  return (
    <section className="section section-alt" id="fusion">
      <div className="container">
        <SectionHeader idx={2} kicker="MULTI-MODAL FUSION"
          title={<>One model. <span className="grad-text">Every signal.</span></>}
          sub="A custom fusion engine trained on a substantial multi-modal psychophysiology corpus. Continuous, calibrated, real-time on supported architectures." />

        <div className="fusion-stage">
          <div className="fusion-col fusion-inputs">
            {inputs.map((g, i) => (
              <div key={g.k} className={`fusion-input ${active === i ? 'on' : ''}`}>
                <div className="fusion-input-head">
                  <span className="signal-dot" />
                  <Mono>{g.k}</Mono>
                  <Mono className="dim">{i === 0 ? '30 Hz' : i === 1 ? '16 kHz' : i === 2 ? '256 Hz' : i === 3 ? 'BLE' : 'meta'}</Mono>
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
  { name: 'NVIDIA · desktop / workstation', kind: 'GPU', notes: 'reference target · CUDA-tuned' },
  { name: 'NVIDIA · cloud', kind: 'GPU', notes: 'datacentre · multi-tenant' },
  { name: 'Apple Neural Engine', kind: 'NPU', notes: 'Apple Silicon · iOS / macOS' },
  { name: 'Intel', kind: 'NPU / CPU', notes: 'co-optimised with Intel · partnership' },
  { name: 'Automotive SOCs', kind: 'NPU / DSP', notes: 'Qualcomm · Renesas · others on request' },
  { name: 'Custom SOCs', kind: 'on request', notes: 'porting & optimisation engagement' },
  { name: 'Phone (iOS / Android)', kind: 'NPU / GPU', notes: 'on-device · subset of features' },
];

const Deploy = () => (
  <section className="section" id="deploy">
    <div className="container">
      <SectionHeader idx={3} kicker="DEPLOY ANYWHERE"
        title={<>Cloud, edge,<br /><span className="grad-text">or somewhere in between.</span></>}
        sub="Same model. Same API. Tuned for the silicon targets you’d actually ship on." />
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
          <p>A managed service we run for our enterprise customers. Bring your data, vertical or edge target - our team adapts and distils the model with you, end-to-end.</p>
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
          <p>Feature extraction can run on-device - so raw audio and video never leave the user - or in the cloud when your deployment calls for it. Same model, same API, your call.</p>
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
