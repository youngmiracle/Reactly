"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./contactsInformationSection.css");
var ContactsInformationSection = function ContactsInformationSection(_ref) {
  var img = _ref.img,
    title = _ref.title,
    data = _ref.data,
    colorData = _ref.colorData;
  return /*#__PURE__*/React.createElement("section", {
    className: "contactsInformationSection"
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "\u0438\u043A\u043E\u043D\u043A\u0430",
    className: "contactsInformationSection__img"
  }), /*#__PURE__*/React.createElement("section", {
    className: "contactsInformationSection__info"
  }, /*#__PURE__*/React.createElement("p", null, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "".concat(colorData),
      fontWeight: 700
    }
  }, data)));
};
var _default = exports.default = ContactsInformationSection;