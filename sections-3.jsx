// Automotive, wearables, security, docs, footer

const Automotive = () => (
  <section className="section section-dark" id="automotive">
    <div className="container">
      <SectionHeader idx={4} kicker="USE CASES"
        title={<>Wherever human state<br /><span className="grad-text">changes the outcome.</span></>}
        sub={<>The platform is built for any setting that benefits from psychophysiology, personalisation and affective AI - <strong>automotive</strong> (DMS + OMS), <strong>defence</strong> and safety-critical operator monitoring, <strong>health and digital therapeutics</strong>, <strong>voice AIs and agents</strong>, <strong>insurance</strong>, and <strong>consumer wellbeing</strong>. Below is one worked example: <span className="accent-text">automotive cabin sensing</span>.</>} />
      <div className="auto-grid">
        <div className="auto-main">
          <div className="cabin-frame">
            <div className="cabin-bg" />
            <div className="cabin-grid" />
            <div className="cabin-occupants">
              {[
                { x: 22, y: 38, label: 'driver',    state: 'attentive', stress: 0.18, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&crop=faces', name: 'M. Andersen' },
                { x: 64, y: 38, label: 'passenger', state: 'relaxed',   stress: 0.12, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&crop=faces', name: 'A. Petrova' },
                { x: 22, y: 70, label: 'rear_L',    state: 'drowsy',    stress: 0.42, img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&h=240&fit=crop&crop=faces', name: 'D. Okafor' },
                { x: 64, y: 70, label: 'rear_R',    state: 'engaged',   stress: 0.22, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=240&h=240&fit=crop&crop=faces', name: 'S. Tanaka' },
              ].map((o, i) => (
                <div key={i} className="occupant" style={{ left: `${o.x}%`, top: `${o.y}%` }}>
                  <div className="occ-bbox">
                    <div className="occ-face">
                      <img src={o.img} alt="" loading="lazy" referrerPolicy="no-referrer" />
                    </div>
                    <span className="occ-landmark" style={{ top: '40%', left: '38%' }} />
                    <span className="occ-landmark" style={{ top: '40%', left: '62%' }} />
                    <span className="occ-landmark" style={{ top: '55%', left: '50%' }} />
                    <span className="occ-landmark" style={{ top: '70%', left: '42%' }} />
                    <span className="occ-landmark" style={{ top: '70%', left: '58%' }} />
                  </div>
                  <div className="occ-label">
                    <Mono>{o.label} · {o.name}</Mono>
                    <Mono className="dim">{o.state}</Mono>
                    <div className="mini-bar slim"><span style={{width: `${o.stress*100}%`}}/></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cabin-hud">
              <div className="hud-item"><Mono className="dim">CABIN STATE</Mono><Mono>3 attentive · 1 drowsy</Mono></div>
              <div className="hud-item"><Mono className="dim">ACTION</Mono><Mono className="accent-text">→ rear ventilation +</Mono></div>
              <div className="hud-item"><Mono className="dim">CHIP</Mono><Mono>SA8295P · 38ms</Mono></div>
            </div>
          </div>
        </div>
        <div className="auto-side">
          <div className="auto-feature">
            <Mono className="dim">SAFETY</Mono>
            <h4>Driver monitoring (DMS)</h4>
            <p>Drowsiness, distraction, gaze-off-road, hands-on-wheel, impairment, unresponsive driver - designed against Euro NCAP 2026 Driver Engagement protocols.</p>
          </div>
          <div className="auto-feature">
            <Mono className="dim">COMFORT</Mono>
            <h4>Occupant wellbeing (OMS)</h4>
            <p>Per-seat stress, mood, engagement. Drives HVAC, audio, ambient lighting.</p>
            <p style={{marginTop:8,fontSize:12,color:'var(--fg-3)'}}>Per-seat OMS requires cabin camera + seat-PPG / capacitive-sensor inputs at integration.</p>
          </div>
          <div className="auto-feature">
            <Mono className="dim">STANDARDS POSTURE</Mono>
            <h4>Aligned with automotive safety &amp; cyber standards</h4>
            <p>The platform is built and documented with the major automotive standards in mind &mdash; functional safety, cyber-security and software-update processes for cars. We share our internal documentation with OEM and Tier&nbsp;1 procurement teams on request.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Wearables = () => {
  const devices = [
    { n: 'Polar H10', s: 'ECG · 1000 Hz' },
    { n: 'Garmin Fenix', s: 'PPG · IMU' },
    { n: 'Apple Watch', s: 'PPG · ECG · SpO2' },
    { n: 'Samsung Galaxy', s: 'PPG · BIA' },
    { n: 'Whoop 4.0', s: 'PPG · skin temp' },
    { n: 'Oura Ring', s: 'PPG · temp · IMU' },
    { n: 'Fitbit Sense', s: 'PPG · EDA · skin' },
    { n: 'Empatica E4', s: 'EDA · BVP · IMU' },
  ];
  return (
    <section className="section" id="wearables">
      <div className="container">
        <SectionHeader idx={7} kicker="INTEGRATIONS"
          title={<>Every wearable<br /><span className="grad-text">your users own.</span></>}
          sub="Drop-in connectors for major COTS devices. Streams normalised to a single, modality-agnostic schema." />
        <div className="wearables-grid">
          {devices.map(d => (
            <div key={d.n} className="wearable-card">
              <div className="wearable-vis">
                <div className="wearable-pulse" />
              </div>
              <div className="wearable-meta">
                <Mono className="dim">{d.s}</Mono>
                <div className="wearable-name">{d.n}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="wearables-foot">
          <Mono className="dim">+ 20 more · BLE GATT · ANT+ · raw stream API · iOS HealthKit · Google Health Connect</Mono>
        </div>
      </div>
    </section>
  );
};

const Security = () => {
  const buckets = [
    { label: 'DESIGNED WITH IN MIND', sub: 'documented against these standards', items: ['ISO 27001', 'ISO 26262', 'ISO 21434', 'ASPICE L3', 'UN R155', 'UN R156'] },
    { label: 'WORKING WITH', sub: 'regulations we operate under', items: ['UK GDPR', 'EU GDPR', 'CCPA', 'HIPAA-aligned workflows', 'EU AI Act · emotion-recognition aware'] },
    { label: 'MOVING TOWARDS', sub: 'progressing alignment / audits', items: ['SOC 2 Type II', 'ISO 27001 certification', 'ASPICE L3 formal assessment', 'Cyber Essentials Plus'] },
    { label: 'ON REQUEST', sub: 'shared with procurement / security teams', items: [], note: 'Detailed posture and internal documentation shared under NDA.' },
  ];
  return (
    <section className="section section-alt" id="security">
      <div className="container">
        <SectionHeader idx={8} kicker="TRUST & SECURITY"
          title={<>Privacy by design.<br /><span className="grad-text">Compliance by default.</span></>}
          sub="Audit logs, key rotation, on-device feature extraction, zero raw-data egress, full data residency control." />
        <div className="sec-grid">
          <div className="sec-main">
            <div className="sec-pillars">
              {[
                { t: 'Feature extraction, your call', d: 'Feature extraction can run on-device - so raw audio and video never leave the user - or in the cloud when your deployment requires it. Same model, same outputs.' },
                { t: 'Zero-trust pipeline', d: 'mTLS, short-lived tokens, per-tenant KMS, secure deployment processes.' },
                { t: 'Data residency', d: 'Cloud regions in EU and UK today; US and APAC on request. BYO cloud for regulated deployments. Air-gap supported for edge deployments.' },
                { t: 'Auditability', d: 'Model versioning, change logs and reproducible builds. Signed-inference available for regulated deployments.' },
              ].map(p => (
                <div key={p.t} className="sec-pillar">
                  <div className="sec-check">✓</div>
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="sec-side">
            {buckets.map(b => (
              <div key={b.label} className="sec-bucket">
                <div className="sec-bucket-h">
                  <Mono>{b.label}</Mono>
                  <Mono className="dim">{b.sub}</Mono>
                </div>
                <div className="sec-badges">
                  {b.items.length === 0
                    ? <div className="sec-badge empty"><Mono className="dim">{b.note || '-'}</Mono></div>
                    : b.items.map(s => <div key={s} className="sec-badge"><span className="sec-tick" />{s}</div>)}
                </div>
              </div>
            ))}
            <a href="https://ea1wg59mqn4.typeform.com/to/iVv585ne" target="_blank" rel="noopener" className="btn btn-ghost btn-block">Request our security overview →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const CODE_SNIPPETS = {
  python: [
    ['c-com', '# Stream multi-modal state in real-time'],
    ['nl'],
    ['c-key', 'from'], ['t', ' maaind '], ['c-key', 'import'], ['t', ' Stream, Modality'], ['nl'],
    ['nl'],
    ['t', 'stream = Stream.connect(api_key=os.environ['], ['c-str', '"MAAIND_KEY"'], ['t', '])'], ['nl'],
    ['t', 'stream.attach(Modality.'], ['c-fn', 'VISION'], ['t', ', source='], ['c-str', '"camera://0"'], ['t', ')'], ['nl'],
    ['t', 'stream.attach(Modality.'], ['c-fn', 'AUDIO'], ['t', ', source='], ['c-str', '"mic://default"'], ['t', ')'], ['nl'],
    ['t', 'stream.attach(Modality.'], ['c-fn', 'PPG'], ['t', ', source='], ['c-str', '"polar://h10"'], ['t', ')'], ['nl'],
    ['nl'],
    ['c-key', 'async for'], ['t', ' state '], ['c-key', 'in'], ['t', ' stream.fuse(rate='], ['c-num', '30'], ['t', '):'], ['nl'],
    ['t', '    '], ['c-key', 'if'], ['t', ' state.stress > '], ['c-num', '0.7'], ['t', ':'], ['nl'],
    ['t', '        ui.'], ['c-fn', 'soften'], ['t', '()'], ['nl'],
    ['t', '    '], ['c-key', 'if'], ['t', ' state.drowsy > '], ['c-num', '0.5'], ['t', ':'], ['nl'],
    ['t', '        cabin.'], ['c-fn', 'cool'], ['t', '(target='], ['c-num', '19'], ['t', ')'], ['nl'],
  ],
  typescript: [
    ['c-com', '// Stream multi-modal state in real-time'], ['nl'],
    ['c-key', 'import'], ['t', ' { Stream, Modality } '], ['c-key', 'from'], ['t', ' '], ['c-str', '"@maaind/sdk"'], ['t', ';'], ['nl'],
    ['nl'],
    ['c-key', 'const'], ['t', ' stream = '], ['c-key', 'await'], ['t', ' Stream.'], ['c-fn', 'connect'], ['t', '({ apiKey: process.env.MAAIND_KEY });'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.VISION, '], ['c-str', '"camera://0"'], ['t', ');'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.AUDIO,  '], ['c-str', '"mic://default"'], ['t', ');'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.PPG,    '], ['c-str', '"polar://h10"'], ['t', ');'], ['nl'],
    ['nl'],
    ['c-key', 'for await'], ['t', ' ('], ['c-key', 'const'], ['t', ' state '], ['c-key', 'of'], ['t', ' stream.'], ['c-fn', 'fuse'], ['t', '({ rate: '], ['c-num', '30'], ['t', ' })) {'], ['nl'],
    ['t', '  '], ['c-key', 'if'], ['t', ' (state.stress > '], ['c-num', '0.7'], ['t', ') ui.'], ['c-fn', 'soften'], ['t', '();'], ['nl'],
    ['t', '  '], ['c-key', 'if'], ['t', ' (state.drowsy > '], ['c-num', '0.5'], ['t', ') cabin.'], ['c-fn', 'cool'], ['t', '({ target: '], ['c-num', '19'], ['t', ' });'], ['nl'],
    ['t', '}'], ['nl'],
  ],
  swift: [
    ['c-com', '// Stream multi-modal state in real-time'], ['nl'],
    ['c-key', 'import'], ['t', ' Maaind'], ['nl'],
    ['nl'],
    ['c-key', 'let'], ['t', ' stream = '], ['c-key', 'try await'], ['t', ' Stream.'], ['c-fn', 'connect'], ['t', '(apiKey: ProcessInfo.processInfo.environment['], ['c-str', '"MAAIND_KEY"'], ['t', ']!)'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(.vision, source: '], ['c-str', '"camera://front"'], ['t', ')'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(.audio,  source: '], ['c-str', '"mic://default"'], ['t', ')'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(.ppg,    source: '], ['c-str', '"healthkit"'], ['t', ')'], ['nl'],
    ['nl'],
    ['c-key', 'for try await'], ['t', ' state '], ['c-key', 'in'], ['t', ' stream.'], ['c-fn', 'fuse'], ['t', '(rate: '], ['c-num', '30'], ['t', ') {'], ['nl'],
    ['t', '  '], ['c-key', 'if'], ['t', ' state.stress > '], ['c-num', '0.7'], ['t', ' { ui.'], ['c-fn', 'soften'], ['t', '() }'], ['nl'],
    ['t', '  '], ['c-key', 'if'], ['t', ' state.drowsy > '], ['c-num', '0.5'], ['t', ' { cabin.'], ['c-fn', 'cool'], ['t', '(target: '], ['c-num', '19'], ['t', ') }'], ['nl'],
    ['t', '}'], ['nl'],
  ],
  kotlin: [
    ['c-com', '// Stream multi-modal state in real-time'], ['nl'],
    ['c-key', 'import'], ['t', ' ai.maaind.*'], ['nl'],
    ['nl'],
    ['c-key', 'val'], ['t', ' stream = Stream.'], ['c-fn', 'connect'], ['t', '(apiKey = System.getenv('], ['c-str', '"MAAIND_KEY"'], ['t', '))'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.VISION, '], ['c-str', '"camera://0"'], ['t', ')'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.AUDIO,  '], ['c-str', '"mic://default"'], ['t', ')'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.PPG,    '], ['c-str', '"healthconnect"'], ['t', ')'], ['nl'],
    ['nl'],
    ['t', 'stream.'], ['c-fn', 'fuse'], ['t', '(rate = '], ['c-num', '30'], ['t', ').'], ['c-fn', 'collect'], ['t', ' { state ->'], ['nl'],
    ['t', '  '], ['c-key', 'if'], ['t', ' (state.stress > '], ['c-num', '0.7'], ['t', ') ui.'], ['c-fn', 'soften'], ['t', '()'], ['nl'],
    ['t', '  '], ['c-key', 'if'], ['t', ' (state.drowsy > '], ['c-num', '0.5'], ['t', ') cabin.'], ['c-fn', 'cool'], ['t', '(target = '], ['c-num', '19'], ['t', ')'], ['nl'],
    ['t', '}'], ['nl'],
  ],
  rust: [
    ['c-com', '// Stream multi-modal state in real-time'], ['nl'],
    ['c-key', 'use'], ['t', ' maaind::{Stream, Modality};'], ['nl'],
    ['nl'],
    ['c-key', 'let mut'], ['t', ' stream = Stream::'], ['c-fn', 'connect'], ['t', '(&env::var('], ['c-str', '"MAAIND_KEY"'], ['t', ')?).await?;'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Vision, '], ['c-str', '"camera://0"'], ['t', ');'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Audio,  '], ['c-str', '"mic://default"'], ['t', ');'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Ppg,    '], ['c-str', '"polar://h10"'], ['t', ');'], ['nl'],
    ['nl'],
    ['c-key', 'while let'], ['t', ' Some(state) = stream.'], ['c-fn', 'fuse'], ['t', '('], ['c-num', '30'], ['t', ').next().await {'], ['nl'],
    ['t', '    '], ['c-key', 'if'], ['t', ' state.stress > '], ['c-num', '0.7'], ['t', ' { ui::'], ['c-fn', 'soften'], ['t', '(); }'], ['nl'],
    ['t', '    '], ['c-key', 'if'], ['t', ' state.drowsy > '], ['c-num', '0.5'], ['t', ' { cabin::'], ['c-fn', 'cool'], ['t', '('], ['c-num', '19'], ['t', '); }'], ['nl'],
    ['t', '}'], ['nl'],
  ],
  'C++': [
    ['c-com', '// Stream multi-modal state in real-time'], ['nl'],
    ['c-key', '#include'], ['t', ' '], ['c-str', '<maaind/stream.hpp>'], ['nl'],
    ['nl'],
    ['t', 'auto stream = maaind::Stream::'], ['c-fn', 'connect'], ['t', '(std::getenv('], ['c-str', '"MAAIND_KEY"'], ['t', '));'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Vision, '], ['c-str', '"camera://0"'], ['t', ');'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Audio,  '], ['c-str', '"mic://default"'], ['t', ');'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality::Ppg,    '], ['c-str', '"polar://h10"'], ['t', ');'], ['nl'],
    ['nl'],
    ['t', 'stream.'], ['c-fn', 'fuse'], ['t', '('], ['c-num', '30'], ['t', ', [&](auto& state) {'], ['nl'],
    ['t', '    '], ['c-key', 'if'], ['t', ' (state.stress > '], ['c-num', '0.7'], ['t', ')  ui::'], ['c-fn', 'soften'], ['t', '();'], ['nl'],
    ['t', '    '], ['c-key', 'if'], ['t', ' (state.drowsy > '], ['c-num', '0.5'], ['t', ') cabin::'], ['c-fn', 'cool'], ['t', '('], ['c-num', '19'], ['t', ');'], ['nl'],
    ['t', '});'], ['nl'],
  ],
  java: [
    ['c-com', '// Stream multi-modal state in real-time'], ['nl'],
    ['c-key', 'import'], ['t', ' ai.maaind.Stream;'], ['nl'],
    ['c-key', 'import'], ['t', ' ai.maaind.Modality;'], ['nl'],
    ['nl'],
    ['t', 'Stream stream = Stream.'], ['c-fn', 'connect'], ['t', '(System.getenv('], ['c-str', '"MAAIND_KEY"'], ['t', '));'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.VISION, '], ['c-str', '"camera://0"'], ['t', ');'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.AUDIO,  '], ['c-str', '"mic://default"'], ['t', ');'], ['nl'],
    ['t', 'stream.'], ['c-fn', 'attach'], ['t', '(Modality.PPG,    '], ['c-str', '"polar://h10"'], ['t', ');'], ['nl'],
    ['nl'],
    ['t', 'stream.'], ['c-fn', 'fuse'], ['t', '('], ['c-num', '30'], ['t', ').'], ['c-fn', 'forEach'], ['t', '(state -> {'], ['nl'],
    ['t', '    '], ['c-key', 'if'], ['t', ' (state.stress > '], ['c-num', '0.7'], ['t', ')  ui.'], ['c-fn', 'soften'], ['t', '();'], ['nl'],
    ['t', '    '], ['c-key', 'if'], ['t', ' (state.drowsy > '], ['c-num', '0.5'], ['t', ') cabin.'], ['c-fn', 'cool'], ['t', '('], ['c-num', '19'], ['t', ');'], ['nl'],
    ['t', '});'], ['nl'],
  ],
};

const LANG_LABELS = ['python', 'typescript', 'swift', 'kotlin', 'java', 'rust', 'C++'];

const DocsTabs = () => {
  const [lang, setLang] = React.useState('python');
  const tokens = CODE_SNIPPETS[lang];
  return (
    <div className="docs-grid">
      <div className="docs-code">
        <div className="code-tabs" role="tablist">
          {LANG_LABELS.map(l => (
            <button key={l} type="button" role="tab" aria-selected={l === lang}
              className={'code-tab' + (l === lang ? ' on' : '')}
              onClick={() => setLang(l)}>{l}</button>
          ))}
        </div>
        <pre className="code-block" key={lang}>
          {tokens.map((tok, i) => {
            if (tok[0] === 'nl') return '\n';
            if (tok[0] === 't') return tok[1];
            return <span key={i} className={tok[0]}>{tok[1]}</span>;
          })}
        </pre>
        <div className="code-foot">
          <Mono className="dim">ⓘ INDICATIVE EXAMPLE</Mono>
          <Mono className="dim">Full reference docs available on request · not the complete API surface</Mono>
        </div>
      </div>
      <div className="docs-side">
        <a href="https://ea1wg59mqn4.typeform.com/to/iVv585ne" target="_blank" rel="noopener" className="docs-link">
          <Mono className="dim">FULL DOCS</Mono>
          <div className="dl-title">Detailed quickstart · access on request</div>
          <span className="arr">→</span>
        </a>
        <a href="https://ea1wg59mqn4.typeform.com/to/iVv585ne" target="_blank" rel="noopener" className="docs-link">
          <Mono className="dim">API REFERENCE</Mono>
          <div className="dl-title">Complete schema · every endpoint</div>
          <span className="arr">→</span>
        </a>
        <a href="https://ea1wg59mqn4.typeform.com/to/iVv585ne" target="_blank" rel="noopener" className="docs-link">
          <Mono className="dim">RECIPES</Mono>
          <div className="dl-title">DMS · OMS · biofeedback · more</div>
          <span className="arr">→</span>
        </a>
        <a href="https://ea1wg59mqn4.typeform.com/to/iVv585ne" target="_blank" rel="noopener" className="docs-link accent">
          <Mono className="dim">LIVE DEMO</Mono>
          <div className="dl-title">Available on demand · get in touch</div>
          <span className="arr">→</span>
        </a>
      </div>
    </div>
  );
};

const Docs = () => (
  <section className="section" id="docs">
    <div className="container">
      <SectionHeader idx={9} kicker="DEVELOPER EXPERIENCE"
        title={<>Developer experience<br /><span className="grad-text">we’d want to use ourselves.</span></>}
        sub={<>Python and TypeScript SDKs today; Swift, Kotlin, Java, Rust and C++ on the roadmap. We&rsquo;re building out comprehensive product documentation - quickstarts, API reference and recipes. The snippets below are <strong>indicative</strong> only, to give you a feel for the API. <a href="https://ea1wg59mqn4.typeform.com/to/iVv585ne" target="_blank" rel="noopener" className="link-accent">Get in touch</a> for current docs and a live demo.</>} />

      <DocsTabs />
    </div>
  </section>
);

const BENEFITS = [
  { n: '01', t: 'Affective AI, out of the box', d: 'A single API for emotion, stress, focus, fatigue, drowsiness and engagement - calibrated, continuous, deployment-ready.' },
  { n: '02', t: 'Smarter voice AI & agents', d: 'Give your assistant, IVR, copilot or LLM agent a sense of how the user actually feels - and let it respond accordingly.' },
  { n: '03', t: 'Smarter, personalised environments', d: 'Adapt vehicles, devices, operator stations and ambient systems to the human in the loop, in real time.' },
  { n: '04', t: 'Health, wellbeing & performance', d: 'Support individuals across stress, recovery, focus and resilience - clinically-grounded signals, consumer-grade UX.' },
  { n: '05', t: 'Understand your users, deeply', d: 'A continuous read of emotion, psychology and state - for product analytics, research, safety and personalisation.' },
];

const CTA = () => (
  <section className="section section-cta">
    <div className="container">
      <div className="cta-card">
        <div className="cta-grid-bg" />
        <Mono className="dim">⏵ READY WHEN YOU ARE</Mono>
        <h2 className="cta-title">
          Bring emotional intelligence<br />
          <span className="grad-text">to every product you ship.</span>
        </h2>
        <p className="cta-sub">Integration is fast - most teams are running in a day with our REST API and SDKs, no extra hardware. Get an API key, talk to an engineer about your integration, or request our security &amp; automotive evidence packages. We&rsquo;ll help you go live.</p>
        <div className="cta-actions">
          <a href="https://ea1wg59mqn4.typeform.com/to/O1IhNavD" target="_blank" rel="noopener" className="btn btn-primary btn-lg">Get API access <span className="arr">→</span></a>
          <a href="https://ea1wg59mqn4.typeform.com/to/iVv585ne" target="_blank" rel="noopener" className="btn btn-ghost btn-lg">Get in touch</a>
        </div>
        <div className="cta-fineprint">
          <Mono className="dim">⏱ ~1 day to first integration</Mono>
          <span className="hr-sep" />
          <Mono className="dim">📞 engineer on the call · not a sales funnel</Mono>
          <span className="hr-sep" />
          <Mono className="dim">🛡 evidence packs ready for procurement</Mono>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="logo logo-img-link" aria-label="Maaind">
            <img src="maaind_logo.png" alt="Maaind" className="logo-img logo-img-footer" />
          </a>
          <p>Multi-modal psychophysiology - fused, calibrated, deployable anywhere your product runs.</p>
          <div className="footer-locations">
            <div><Mono className="dim">EINDHOVEN · NL</Mono><div>High Tech Campus 6A</div></div>
            <div><Mono className="dim">LONDON · UK</Mono><div>70 White Lion St, N1 9PP</div></div>
          </div>
        </div>
        <div className="footer-cols">
          <div><Mono className="dim">PLATFORM</Mono>
            <a href="#">Fusion engine</a><a href="#">Speech</a><a href="#">Vision</a><a href="#">Cardiac</a></div>
          <div><Mono className="dim">DEPLOY</Mono>
            <a href="#">Cloud</a><a href="#">Edge</a><a href="#">Automotive</a><a href="#">On-prem</a></div>
          <div><Mono className="dim">DEVELOPERS</Mono>
            <a href="#">Quickstart</a><a href="#">API</a><a href="#">SDKs</a><a href="#">Recipes</a></div>
          <div><Mono className="dim">COMPANY</Mono>
            <a href="#">About</a><a href="#">Research</a><a href="#">Blog</a><a href="#">Careers</a></div>
        </div>
      </div>
      <div className="footer-bot">
        <Mono className="dim">© 2026 Maaind Technologies B.V. · Eindhoven · London</Mono>
        <Mono className="dim">R&amp;D across NL · UK · AT · US</Mono>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Automotive, Wearables, Security, Docs, CTA, Footer });
