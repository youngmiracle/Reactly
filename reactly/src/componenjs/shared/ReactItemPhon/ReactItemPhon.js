"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./reactItemPhon.css");
var _photo = _interopRequireDefault(require("../../../types/photo"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var ReactItemPhon = function ReactItemPhon() {
  return /*#__PURE__*/React.createElement("img", {
    src: _photo.default.reactPhonItem,
    alt: "asd",
    className: "reactPhonItem"
  });
};
var _default = exports.default = ReactItemPhon;