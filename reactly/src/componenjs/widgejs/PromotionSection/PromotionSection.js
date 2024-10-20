"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _photo = _interopRequireDefault(require("../../../types/photo"));
var _ButtonDefault = _interopRequireDefault(require("../../shared/Button/ButtonDefault/ButtonDefault"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var PromotionSection = function PromotionSection() {
  return /*#__PURE__*/React.createElement("article", {
    className: "homePage__promotionSection"
  }, /*#__PURE__*/React.createElement("section", {
    className: "promotionSection__titleSection"
  }, /*#__PURE__*/React.createElement("h2", null, "\u0417\u0430\u0449\u0438\u0442\u0430 \u0432\u0430\u0448\u0435\u0433\u043E \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F"), /*#__PURE__*/React.createElement("p", {
    className: "promotionSection__titleText"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#9400D3",
      fontSize: "3vh"
    }
  }, "100%"), " \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E")), /*#__PURE__*/React.createElement("section", {
    className: "promotionSection__content"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "promotionSection__info"
  }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043C\u0430\u0441\u0435\u043B ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700,
      color: "#9400D3"
    }
  }, "REACTLY"), " \u043C\u043D\u043E\u0433\u043E\u0441\u0442\u0443\u043F\u0435\u043D\u0447\u0430\u0442\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441, \u0433\u0434\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u044D\u0442\u0430\u043F \u043E\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0443\u0440\u044B \u0434\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0443."), /*#__PURE__*/React.createElement("section", {
    className: "promotionSection__contentNav"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "promotionSection_nav"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "OilSearch"
  }, /*#__PURE__*/React.createElement(_ButtonDefault.default, {
    width: "150%",
    height: "70%"
  }, "\u041F\u043E\u0434\u0431\u043E\u0440 \u043C\u0430\u0441\u043B\u0430")), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "Products"
  }, /*#__PURE__*/React.createElement(_ButtonDefault.default, {
    classNameSecond: "True",
    width: "150%",
    height: "70%"
  }, "\u041A\u0443\u043F\u0438\u0442\u044C \u043C\u0430\u0441\u043B\u043E"))), /*#__PURE__*/React.createElement("img", {
    src: _photo.default.promotionBoard,
    alt: "promotionImage",
    className: "promotionSection_img"
  }))));
};
var _default = exports.default = PromotionSection;