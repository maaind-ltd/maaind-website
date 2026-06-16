// New sections: top-of-page expandable Benefits, customer logo strip, VoiceAI, Health & Wellbeing.

// ---------- WHY INTEGRATE (expandable cards near top of page) ----------

const BENEFITS_X = [
  {
    n: '01',
    t: 'Affective AI, out of the box',
    d: 'A single API for emotion, stress, focus, fatigue, drowsiness and engagement. Calibrated, continuous and ready to ship.',
    eyebrow: 'PLATFORM',
    long: 'Drop one REST and SDK surface into your stack and you have a continuous, calibrated read of human state: emotion, arousal, valence, stress, focus, fatigue, drowsiness and engagement. It is multimodal under the hood, picks its own models, and answers in 100 ms or less on supported hardware. No labelled-data project before you can start.',
    points: [
      ['8 calibrated outputs', 'arousal, valence, stress, focus, fatigue, drowsiness, engagement, emotion'],
      ['One model, one API', 'identical surface across cloud, on-prem and on-device'],
      ['Integrate in a day', 'drop-in REST + SDKs, no extra hardware, runnable recipes'],
    ],
  },
  {
    n: '02',
    t: 'Smarter voice AI & agents',
    d: 'Give your assistant, IVR, copilot or LLM agent a sense of how the user actually feels, and let it respond accordingly.',
    eyebrow: 'AGENTS · VOICE AI',
    long: 'Most LLMs and voice stacks are deaf to how the person actually feels. Maaind layers a real-time read of arousal, valence, stress and frustration over any agent, whether that is a voice copilot, an IVR, an in-cabin assistant or a customer-care bot. Agents that hear tone, not just transcripts, and answer accordingly.',
    points: [
      ['Tone-aware turn-taking', 'stop interrupting the frustrated caller, slow down for the overloaded one'],
      ['Sentiment-routed IVR', 'escalate angry or distressed users to a human, automatically'],
      ['LLM context-on-tap', 'feed state into your prompt loop as plain JSON or function-tool calls'],
    ],
  },
  {
    n: '03',
    t: 'Smarter, personalised environments',
    d: 'Adapt vehicles, devices, operator stations and ambient systems to the human in the loop, in real time.',
    eyebrow: 'AMBIENT · AUTOMOTIVE',
    long: 'Cars, devices, operator stations, lighting and audio can all adapt once the system knows whether the user is calm or overwhelmed, focused or distracted. Ambient temperature, music tempo, suggestion timing, content density, HUD complexity. The same model runs in the cloud or quantised down to an automotive SOC.',
    points: [
      ['Per-occupant adaptation', 'up to four occupants at once, each with their own state and policy'],
      ['HVAC · audio · lighting · HUD', 'a control signal for any ambient system in the cabin or room'],
      ['Cloud or on-SOC', 'INT8 / INT4 quantised across automotive, mobile and edge silicon'],
    ],
  },
  {
    n: '04',
    t: 'Health, wellbeing & performance',
    d: 'Support people through stress, recovery, focus and resilience. Clinically-grounded signals, with a consumer-grade experience on top.',
    eyebrow: 'HEALTH · DTx',
    long: 'Clinically-grounded signals, including HRV, respiration, voice biomarkers, sleep architecture and daily stress load, wrapped in outputs an everyday user can actually understand. It powers mental-wellbeing apps, recovery coaches, occupational-health programmes and digital therapeutics with regulated workflows.',
    points: [
      ['Stress, recovery, readiness', 'continuous daily indices that work alongside the wearables your users already own'],
      ['Clinical signals, consumer UX', 'HRV / RMSSD / SDNN / EDA / respiration normalised to one schema'],
      ['DTx-ready', 'designed for regulated workflows and clinical-research deployments'],
    ],
  },
  {
    n: '05',
    t: 'Understand your users, deeply',
    d: 'A continuous read of emotion, psychology and state, for product analytics, research, safety and personalisation.',
    eyebrow: 'INSIGHTS · RESEARCH',
    long: 'A continuous, multimodal read of what your users actually feel as they use your product. Not post-hoc surveys, not sentiment-guessing on text, but a calibrated, time-aligned signal. Built for product analytics teams, user-research labs, safety teams and personalisation engines.',
    points: [
      ['Time-aligned with telemetry', 'fuse psychological state with your existing product events'],
      ['Cohorts & segments', 'per-user baselines so deltas are meaningful, not noise'],
      ['Safety & personalisation', 'flag distress, surface the right content, adapt difficulty'],
    ],
  },
];

const WhyIntegrate = () => {
  const [open, setOpen] = React.useState(0);
  const cards = BENEFITS_X.map((b, i) => (
    <button
      key={b.n}
      type="button"
      className={'benefit-card-x' + (open === i ? ' on' : '')}
      aria-expanded={open === i}
      onClick={() => setOpen(o => (o === i ? -1 : i))}
    >
      <Mono className="dim">{b.n}</Mono>
      <div className="benefit-t">{b.t}</div>
      <div className="benefit-d">{b.d}</div>
      <span className="benefit-toggle" aria-hidden="true">+</span>
    </button>
  ));
  const active = open >= 0 ? BENEFITS_X[open] : null;
  return (
    <section className="why-section" id="why-integrate">
      <div className="container">
        <div className="why-head">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <Mono className="dim">⏵ WHY INTEGRATE MAAIND</Mono>
          </div>
          <h2 className="why-title">
            One integration.<br />
            <span className="grad-text">Five compounding benefits.</span>
          </h2>
          <p className="why-sub">
            Tap any card to open it up. The same fusion model sits behind every one of these, so once you adopt one, the rest come almost for free.
          </p>
        </div>
        <div className="benefit-grid-x">
          {cards}
          <div className={'benefit-detail' + (active ? ' open' : '')} aria-hidden={!active}>
            {active && (
              <div className="benefit-detail-inner">
                <div className="benefit-detail-body">
                  <div className="benefit-detail-eyebrow">
                    <Mono>{active.n} · {active.eyebrow}</Mono>
                  </div>
                  <h3>{active.t}</h3>
                  <p>{active.long}</p>
                </div>
                <div className="benefit-detail-points">
                  {active.points.map(([k, v], i) => (
                    <div key={i} className="benefit-point">
                      <span className="bp-dot" />
                      <div><strong>{k}</strong> &middot; <span style={{ color: 'var(--fg-3)' }}>{v}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- CUSTOMER / PARTNER LOGO STRIP ----------

const LOGOS = [
  { name: 'Microsoft',     kind: 'customer' },
  { name: 'Porsche',       kind: 'customer' },
  { name: 'NVIDIA',        kind: 'partner'  },
  { name: 'Intel',         kind: 'partner'  },
  { name: 'Achmea',        kind: 'customer' },
  { name: 'DSTL',          kind: 'customer' },
  { name: 'Qualcomm',      kind: 'partner'  },
  { name: 'EF',            kind: 'customer' },
  { name: 'Plug and Play', kind: 'customer' },
  { name: 'Catapult',      kind: 'customer' },
  { name: 'UCL',           kind: 'research' },
  { name: 'TU/e',          kind: 'research' },
];

const LogoStrip = () => {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <section className="logo-strip" aria-label="Customers, partners and research links">
      <div className="logo-strip-head">
        <Mono className="dim">⏵ TRUSTED BY TEAMS AT</Mono>
        <span className="hr-line" />
        <Mono className="dim">customers · partners · research</Mono>
      </div>
      <div className="logo-marquee">
        <div className="logo-marquee-track">
          {doubled.map((l, i) => (
            <span key={i} className={'brand-pill kind-' + l.kind}>
              <span className="brand-dot" />
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- VOICE AI & AGENTS section ----------

const VoiceAI = () => {
  return (
    <section className="section section-alt" id="voice-ai">
      <div className="container">
        <SectionHeader idx={5} kicker="USE CASE · AGENTS"
          title={<>Agents that <span className="grad-text">hear how you feel</span>, not just what you said.</>}
          sub={<>Most voice AIs and LLM agents only get the words. Maaind hands them the rest: tone of voice and facial signals, real-time emotion, stress and engagement, and where attention actually is. The agent can tell how someone feels and what they really mean. Built for <strong>IVR and contact centres</strong>, <strong>voice copilots</strong> and <strong>LLM agents</strong>, in the cloud or on-device, on one API.</>} />
        <div className="voice-grid">
          <div className="voice-panel">
            <div className="voice-grid-bg" />
            <div className="voice-bg-glow" />

            <div className="vp-hud">
              <div className="vp-hud-item"><Mono className="dim">SESSION</Mono><Mono>call_38a · live</Mono></div>
              <div className="vp-hud-item"><Mono className="dim">LATENCY</Mono><Mono>42 ms</Mono></div>
              <div className="vp-hud-item"><Mono className="dim">SIGNAL</Mono><Mono className="accent-text">voice + state</Mono></div>
              <div className="vp-hud-item" style={{marginLeft:'auto'}}><Mono className="dim">ACTION</Mono><Mono className="accent-text">→ slow cadence · empathise</Mono></div>
            </div>

            <div className="vp-call">
              {/* Caller side */}
              <div className="vp-side">
                <div className="vp-side-head">
                  <div className="vp-avatar">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=180&h=180&fit=crop&crop=faces" alt="" loading="lazy" referrerPolicy="no-referrer" />
                  </div>
                  <div className="vp-side-meta">
                    <span className="vp-name">Caller · E. Vasquez</span>
                    <Mono className="dim">en-GB · live</Mono>
                  </div>
                </div>
                <div className="vp-msgs">
                  <div className="vp-msg">
                    "I've tried resetting it three times and it's still not working…"
                    <div className="vp-msg-meta">
                      <span className="chip">stress · 0.71</span>
                      <span className="chip">valence · −0.42</span>
                    </div>
                    <div className="vp-wave">
                      {Array.from({length: 28}).map((_, i) => (
                        <span key={i} style={{ height: `${20 + Math.abs(Math.sin(i*0.7))*70}%`, animationDelay: `${i*0.06}s` }} />
                      ))}
                    </div>
                  </div>
                  <div className="vp-state">
                    <Mono className="dim">CALLER STATE</Mono>
                    <div className="vp-state-row"><Mono>arousal</Mono><div className="mini-bar"><span style={{width:'74%'}}/></div><Mono>0.74</Mono></div>
                    <div className="vp-state-row"><Mono>stress</Mono><div className="mini-bar"><span style={{width:'71%'}}/></div><Mono>0.71</Mono></div>
                    <div className="vp-state-row"><Mono>frustration</Mono><div className="mini-bar"><span style={{width:'64%'}}/></div><Mono>0.64</Mono></div>
                  </div>
                </div>
              </div>

              {/* Agent side */}
              <div className="vp-side">
                <div className="vp-side-head">
                  <div className="vp-avatar agent">M</div>
                  <div className="vp-side-meta">
                    <span className="vp-name">Agent · maaind-aware</span>
                    <Mono className="dim">adapting to caller state</Mono>
                  </div>
                </div>
                <div className="vp-msgs">
                  <div className="vp-msg agent">
                    "I can hear this has been really frustrating. Let me take it off your plate, stay on the line while I check directly."
                    <div className="vp-msg-meta">
                      <span className="chip accent">empathy mode</span>
                      <span className="chip">cadence −20%</span>
                      <span className="chip">tone · warm</span>
                    </div>
                  </div>
                  <div className="vp-msg agent">
                    "While I look into it, would it be easier if I called you back in five minutes?"
                    <div className="vp-msg-meta">
                      <span className="chip">offer · async</span>
                      <span className="chip">route · escalate(L2)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="usecase-side">
            <div className="usecase-feature">
              <Mono className="dim">IVR &amp; CONTACT CENTRE</Mono>
              <h4>Sentiment-routed support</h4>
              <p>Detect frustration, distress or churn-risk in the first 10 seconds, then route to the right agent, script and tier. It cuts average handle time and lifts CSAT.</p>
            </div>
            <div className="usecase-feature">
              <Mono className="dim">VOICE COPILOTS</Mono>
              <h4>Tone-aware assistants</h4>
              <p>In-cabin, in-app, in-home. The assistant slows down for the overloaded, gets out of the way of the focused, and asks before interrupting the calm.</p>
            </div>
            <div className="usecase-feature">
              <Mono className="dim">LLM AGENTS</Mono>
              <h4>Emotion as a context channel</h4>
              <p>Feed continuous emotional state into your prompt loop or function-tool surface. Agents that respond to <em>how</em> the user is asking, not just what they said.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- HEALTH, WELLBEING & PERFORMANCE section ----------

const HRVPath = ({ width = 380, height = 110 }) => {
  // gentle, irregular HRV-like trace
  const pts = [];
  const n = 80;
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * width;
    const y = height / 2 + Math.sin(i * 0.5) * 12 + Math.sin(i * 1.3 + 1) * 8 + (Math.random() - 0.5) * 4;
    pts.push([x, y]);
  }
  const d = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ');
  const area = d + ` L ${width} ${height} L 0 ${height} Z`;
  return (
    <svg className="health-chart-svg" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="hrvg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.32" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#hrvg)" />
      <path d={d} fill="none" stroke="var(--accent)" strokeWidth="1.5" />
    </svg>
  );
};

const Health = () => {
  const stressDay = [0.18, 0.22, 0.28, 0.34, 0.52, 0.61, 0.48, 0.38, 0.42, 0.55, 0.66, 0.58, 0.46, 0.34, 0.28, 0.22, 0.18, 0.14];
  return (
    <section className="section section-dark" id="health">
      <div className="container">
        <SectionHeader idx={6} kicker="USE CASE · HEALTH &amp; WELLBEING"
          title={<>Clinical signals.<br /><span className="grad-text">Consumer-grade UX.</span></>}
          sub={<>The platform supports <strong>mental wellbeing</strong>, <strong>recovery &amp; performance</strong>, <strong>occupational health</strong> and <strong>digital therapeutics</strong>, built on the wearables your users already own and the clinical signals our research stack already extracts.</>} />

        <div className="health-grid">
          <div className="health-panel">
            <div className="health-grid-bg" />
            <div className="health-bg-glow" />
            <div className="health-inner">
              <div className="health-portrait">
                <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=480&h=640&fit=crop&crop=faces" alt="" loading="lazy" referrerPolicy="no-referrer" />
                <div className="health-portrait-name">
                  <span className="status-dot" />
                  <Mono className="accent-text">L. Hartmann · day 14</Mono>
                </div>
                <div className="health-portrait-tag">
                  <span className="chip accent">recovery · 78</span>
                  <span className="chip">strain · 12.4</span>
                </div>
              </div>
              <div className="health-vitals">
                <div className="health-vitals-row">
                  <div className="health-tile">
                    <Mono className="dim">HRV · RMSSD</Mono>
                    <div className="health-tile-v">52<span style={{fontSize:13,color:'var(--fg-3)',marginLeft:4}}>ms</span></div>
                    <Mono className="health-tile-trend up">▲ +6 vs baseline</Mono>
                  </div>
                  <div className="health-tile">
                    <Mono className="dim">RESTING HR</Mono>
                    <div className="health-tile-v">58<span style={{fontSize:13,color:'var(--fg-3)',marginLeft:4}}>bpm</span></div>
                    <Mono className="health-tile-trend up">▼ −3 vs baseline</Mono>
                  </div>
                  <div className="health-tile">
                    <Mono className="dim">SLEEP</Mono>
                    <div className="health-tile-v">7h 42m</div>
                    <Mono className="health-tile-trend up">▲ deep 1h 18m</Mono>
                  </div>
                </div>
                <div className="health-chart">
                  <div className="health-chart-h">
                    <Mono>HRV · 24h trace</Mono>
                    <Mono className="dim">restorative window 23:00–06:00</Mono>
                  </div>
                  <HRVPath />
                </div>
                <div className="health-stress">
                  <div className="health-chart-h">
                    <Mono>DAILY STRESS LOAD</Mono>
                    <Mono className="dim">moderate · burnout-risk 0.18</Mono>
                  </div>
                  <div className="health-stress-bar">
                    {stressDay.map((v, i) => {
                      const c = v < 0.3 ? 'var(--accent)' : v < 0.55 ? 'var(--accent-2)' : 'oklch(72% 0.16 35)';
                      return <div key={i} className="health-stress-seg" style={{ background: `linear-gradient(to top, ${c} ${v*100}%, rgba(127,127,127,0.08) ${v*100}%)` }} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="usecase-side">
            <div className="usecase-feature">
              <Mono className="dim">MENTAL WELLBEING</Mono>
              <h4>Stress &amp; burnout, before the crash</h4>
              <p>Continuous daily stress load and recovery balance. Surface concerning trends days before users notice them themselves, for wellness apps, EAPs and occupational-health programmes.</p>
            </div>
            <div className="usecase-feature">
              <Mono className="dim">RECOVERY &amp; PERFORMANCE</Mono>
              <h4>Readiness with real signals</h4>
              <p>HRV-based readiness, sleep architecture, training-load balance. Works with Polar, Garmin, Apple, Whoop, Oura and Empatica out of the box.</p>
            </div>
            <div className="usecase-feature">
              <Mono className="dim">DIGITAL THERAPEUTICS</Mono>
              <h4>DTx-grade signals, regulated workflows</h4>
              <p>Clinically-grounded streams, including HRV, EDA, respiration and voice biomarkers, with auditability, signed inference and data-residency controls for regulated deployments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { WhyIntegrate, LogoStrip, VoiceAI, Health });
