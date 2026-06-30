// App bootstrap. Precompiled to app.js for production (no in-browser Babel).
const App = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(Hero, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(Stats, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(LogoStrip, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(WhyIntegrate, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(Capabilities, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(Fusion, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(Deploy, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(Automotive, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(VoiceAI, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(Health, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(Wearables, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(Security, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(Docs, null)), /*#__PURE__*/React.createElement("div", {
    className: "theme-zone"
  }, /*#__PURE__*/React.createElement(CTA, null))), /*#__PURE__*/React.createElement(Footer, null));
};
const rootEl = document.getElementById('root');
// Clear the static SEO fallback markup before React mounts.
rootEl.innerHTML = '';
ReactDOM.createRoot(rootEl).render(/*#__PURE__*/React.createElement(App, null));