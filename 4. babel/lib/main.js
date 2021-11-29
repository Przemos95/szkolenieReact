"use strict";

var _reactDom = _interopRequireDefault(require("https://cdn.skypack.dev/react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Element 1"), /*#__PURE__*/React.createElement("span", null, "Element 2"));
};

var Body = function Body() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, "Div 1"), /*#__PURE__*/React.createElement("div", null, "Div 2"));
};

var Page = function Page() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Body, null));
};

_reactDom["default"].render( /*#__PURE__*/React.createElement(Page, null), document.getElementById('root'));