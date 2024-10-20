"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _photo = _interopRequireDefault(require("../../../types/photo"));
var _ButtonDefault = _interopRequireDefault(require("../../shared/Button/ButtonDefault/ButtonDefault"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var PromotionSectionSecond = function PromotionSectionSecond() {
  return /*#__PURE__*/React.createElement("article", {
    className: "homePage__promotionSectionSecond"
  }, /*#__PURE__*/React.createElement("section", {
    className: "promotionSectionSecond__cardList"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardList__cardExample"
  }, /*#__PURE__*/React.createElement("img", {
    src: _photo.default.promotionOne,
    alt: "image",
    className: "cardExample__img"
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/Products/MotorOil/sae_0w_16_",
    className: "cardExample__Link"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cardList__cardExample cardList__cardExampleCenter"
  }, /*#__PURE__*/React.createElement("img", {
    src: _photo.default.promotionOne,
    alt: "image",
    className: "cardExample__img"
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/Products/MotorOil/sae_0w_16_",
    className: "cardExample__Link"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cardList__cardExample"
  }, /*#__PURE__*/React.createElement("img", {
    src: _photo.default.promotionOne,
    alt: "image",
    className: "cardExample__img"
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/Products/MotorOil/sae_0w_16_",
    className: "cardExample__Link"
  }))), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    className: "promotionSectionSecond__Link",
    to: "Products"
  }, "\u041A\u0443\u043F\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("h2", {
    className: "promotionSectionSecond__title"
  }, "\u041D\u0430\u043C \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0432\u0435\u0440\u044F\u0442\u044C"));
};
var _default = exports.default = PromotionSectionSecond;