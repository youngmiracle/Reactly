"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./imageClick.css");
var _reactRouterDom = require("react-router-dom");
var ImageClick = function ImageClick(_ref) {
  var src = _ref.src,
    btnType = _ref.btnType,
    to = _ref.to,
    alt = _ref.alt,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("section", {
    className: "imageClick__section"
  }, btnType == "Link" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: "imageClick__link",
    to: to
  }), /*#__PURE__*/React.createElement("img", {
    className: "imageClick__img",
    src: src,
    alt: alt
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: "imageClick__link"
  }), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    className: "imageClick__img"
  })));
};
var _default = exports.default = ImageClick;