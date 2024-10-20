"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./mainPage.css");
var _photo = _interopRequireDefault(require("../../../types/photo"));
var _reactRouterDom = require("react-router-dom");
var _LinkContext = require("../../../types/LinkContext");
var _ButtonDefault = _interopRequireDefault(require("../../shared/Button/ButtonDefault/ButtonDefault"));
var _PromotionSection = _interopRequireDefault(require("../../widgets/PromotionSection/PromotionSection"));
var _InfoSection = _interopRequireDefault(require("../../widgets/InfoSection/InfoSection"));
var _PromotionSectionSecond = _interopRequireDefault(require("../../widgets/PromotionSection/PromotionSectionSecond"));
var _InfoSectionSecond = _interopRequireDefault(require("../../widgets/InfoSection/InfoSectionSecond"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var MainPage = function MainPage() {
  //обращаясь к глобальному контексту, меняю стиль кнопке Products
  var _useLinkContext = (0, _LinkContext.useLinkContext)(),
    setNameLink = _useLinkContext.setNameLink;
  var onClickClassChangeLink = function onClickClassChangeLink(nameLink) {
    sessionStorage.setItem("linkActiveClass", nameLink);
    setNameLink(nameLink);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("article", {
    className: "homePage__mainContent"
  }, /*#__PURE__*/React.createElement("img", {
    src: _photo.default.homePhoneOne,
    alt: "Phone",
    className: "mainContentHome__imgPhon"
  }), /*#__PURE__*/React.createElement("section", {
    className: "mainContentHome__contentSection"
  }, /*#__PURE__*/React.createElement("article", {
    className: "contentSectionHome__info"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "infoHome__title"
  }, "\u041B\u0443\u0447\u0448\u0430\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F", /*#__PURE__*/React.createElement("br", null), "\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F "), /*#__PURE__*/React.createElement("p", {
    className: "infoHome__other"
  }, "\u0414\u043B\u044F \u0441\u0430\u043C\u044B\u0445 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0438", /*#__PURE__*/React.createElement("br", null), "\u0437\u0430\u043A\u0430\u043B\u0451\u043D\u043D\u044B\u0445 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439")), /*#__PURE__*/React.createElement("section", {
    className: "contentSectionHome__promotion"
  }, /*#__PURE__*/React.createElement("img", {
    src: _photo.default.imageShadowQuote,
    alt: "#",
    className: "promotionHome__img"
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "Products",
    onClick: function onClick() {
      return onClickClassChangeLink("Products");
    }
  }, /*#__PURE__*/React.createElement(_ButtonDefault.default, {
    position: "relative",
    top: "0%",
    height: "50%",
    width: "10 0%",
    left: "25%"
  }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440"))))), /*#__PURE__*/React.createElement("div", {
    className: "slideBlock"
  }), /*#__PURE__*/React.createElement(_PromotionSection.default, null), /*#__PURE__*/React.createElement(_InfoSection.default, null), /*#__PURE__*/React.createElement(_PromotionSectionSecond.default, null), /*#__PURE__*/React.createElement(_InfoSectionSecond.default, null));
};
var _default = exports.default = MainPage;