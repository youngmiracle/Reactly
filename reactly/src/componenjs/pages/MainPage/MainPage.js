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
var _react = require("react");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MainPage = function MainPage() {
  //обращаясь к глобальному контексту, меняю стиль кнопке Products
  var _useLinkContext = (0, _LinkContext.useLinkContext)(),
    setNameLink = _useLinkContext.setNameLink;
  var onClickClassChangeLink = function onClickClassChangeLink(nameLink) {
    sessionStorage.setItem("linkActiveClass", nameLink);
    setNameLink(nameLink);
  };
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    appState = _useState2[0],
    setAppState = _useState2[1];
  (0, _react.useEffect)(function () {
    var apiUrl = 'http://localhost:3500/api/type';
    _axios.default.get(apiUrl).then(function (resp) {
      var allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);
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