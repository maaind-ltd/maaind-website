// App bootstrap. Precompiled to app.js for production (no in-browser Babel).
const App = () => {
  const progressRef = React.useRef(null);
  React.useEffect(() => {
    const root = document.documentElement;
    // enable reveal hidden-state only when JS is live (so no-JS never hides content)
    root.setAttribute('data-reveal', 'on');
    document.body.classList.add('page-ready');

    // scroll-reveal: reveal each section as it enters the viewport
    const zones = Array.from(document.querySelectorAll('.reveal'));
    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.08
      });
      zones.forEach(z => io.observe(z));
      // anything already on-screen at load reveals immediately
      requestAnimationFrame(() => zones.forEach(z => {
        if (z.getBoundingClientRect().top < window.innerHeight * 0.92) z.classList.add('in');
      }));
    } else {
      zones.forEach(z => z.classList.add('in'));
    }

    // scroll progress bar
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = progressRef.current;
        if (el) {
          const h = document.documentElement.scrollHeight - window.innerHeight;
          el.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => {
      if (io) io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scroll-progress",
    ref: progressRef
  }), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(Hero, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(Stats, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(LogoStrip, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(WhyIntegrate, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(Capabilities, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(Fusion, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(Deploy, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(Automotive, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(VoiceAI, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(Health, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(Wearables, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(Security, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(Docs, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone reveal"
  }, /*#__PURE__*/React.createElement(CTA, null))), /*#__PURE__*/React.createElement(Footer, null));
};
const rootEl = document.getElementById('root');
// Clear the static SEO fallback markup before React mounts.
rootEl.innerHTML = '';
ReactDOM.createRoot(rootEl).render(/*#__PURE__*/React.createElement(App, null));