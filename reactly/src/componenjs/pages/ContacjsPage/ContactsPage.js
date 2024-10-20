"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ButtonDefault = _interopRequireDefault(require("../../shared/Button/ButtonDefault/ButtonDefault"));
require("./contactsPage.css");
var _ContactsInformationSection = _interopRequireDefault(require("../../widgets/ContactsInformationSection/ContactsInformationSection"));
var _photo = _interopRequireDefault(require("../../../types/photo"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var ContactsPage = function ContactsPage() {
  return /*#__PURE__*/React.createElement("main", {
    className: "contactsMain"
  }, /*#__PURE__*/React.createElement("article", {
    className: "contactsMain__asideArticle"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "asideArticle__title"
  }, "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B"), /*#__PURE__*/React.createElement(_ContactsInformationSection.default, {
    img: _photo.default.phoneLogo,
    title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:",
    data: "8 (914) 522-18-63 (\u041A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E, \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445)"
  }), /*#__PURE__*/React.createElement(_ContactsInformationSection.default, {
    img: _photo.default.mailLogo,
    colorData: "#9400D3",
    title: "Email:",
    data: "leventasE@reactly.com"
  }), /*#__PURE__*/React.createElement("aside", {
    className: "asideArticle__aside"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "aside_title"
  }, "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:"), /*#__PURE__*/React.createElement("p", null, "\u0420\u043E\u0441\u0441\u0438\u044F, 654776, \u0433.\u0427\u0438\u0442\u0430, \u043C\u043A-\u0440 \u042E\u0436\u043D\u044B\u0439, \u0434\u043E\u043C 13, \u043E\u0444\u0438\u0441 40.")), /*#__PURE__*/React.createElement("aside", {
    className: "asideArticle__aside"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "aside_title"
  }, "\u0427\u0430\u0441\u044B \u0440\u0430\u0431\u043E\u0442\u044B:"), /*#__PURE__*/React.createElement("p", null, "\u041F\u041D-\u041F\u0422: 9:00-20:00", /*#__PURE__*/React.createElement("br", null), "\u0421\u0411-\u0412\u0421: \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439"))), /*#__PURE__*/React.createElement("article", {
    className: "contactsMain__menuArticle"
  }, /*#__PURE__*/React.createElement("form", {
    className: "menuArticle__form"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "menuArticle__input",
    placeholder: "\u0424\u0418\u041E*"
  }), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    className: "menuArticle__input",
    placeholder: "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D*"
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    className: "menuArticle__input",
    placeholder: "\u0412\u0430\u0448 e-mail*"
  }), /*#__PURE__*/React.createElement("section", {
    className: "radioInputSection"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "radioInputSection__input"
  }), /*#__PURE__*/React.createElement("p", null, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443, \u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "purple"
    }
  }, "*")))), /*#__PURE__*/React.createElement("button", {
    className: "menuArticle__btn"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")));
};
var _default = exports.default = ContactsPage;