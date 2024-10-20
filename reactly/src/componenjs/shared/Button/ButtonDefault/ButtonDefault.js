"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./buttonDefault.css");
var ButtonDefault = function ButtonDefault(_ref) {
  var classNameSecond = _ref.classNameSecond,
    children = _ref.children,
    width = _ref.width,
    height = _ref.height,
    position = _ref.position,
    left = _ref.left,
    top = _ref.top;
  return /*#__PURE__*/React.createElement("button", {
    className: "buttonDefault buttonDefault".concat(classNameSecond),
    style: {
      width: width,
      height: height,
      position: position,
      left: left,
      top: top
    }
  }, children);
};
var _default = exports.default = ButtonDefault;