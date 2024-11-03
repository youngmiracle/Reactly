"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
require("./buttonCatalog.css");
var ButtonCatalog = function ButtonCatalog(_ref) {
  var onClick = _ref.onClick,
    Children = _ref.Children,
    type = _ref.type,
    width = _ref.width,
    height = _ref.height;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    type: type,
    className: "buttonCatalog",
    style: {
      width: "".concat(width),
      height: "".concat(height)
    }
  }, Children);
};
var _default = exports.default = ButtonCatalog;