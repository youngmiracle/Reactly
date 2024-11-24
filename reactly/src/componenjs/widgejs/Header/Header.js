"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./header.css");
var _reactRouterDom = require("react-router-dom");
var _photo = _interopRequireDefault(require("../../../types/photo"));
var _react = require("react");
var _LinkContext = require("../../../types/LinkContext");
var _ButtonNavigate = _interopRequireDefault(require("../../shared/Button/ButtonNavigate/ButtonNavigate"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Header = function Header() {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    scrollClass = _useState2[0],
    setScrollClass = _useState2[1]; //state на скролл

  //скрипт для скролла, когда скроллится до определённых px появляется background.
  window.addEventListener('scroll', function () {
    var scroll = window.scrollY;
    if (scroll >= 100) {
      setScrollClass("headerScroll");
    } else {
      setScrollClass("headerScrollBack");
    }
  });
  var nameLinki = (0, _LinkContext.useLinkContext)(); //Получаем глобальное состояние, в котором хранится класс для кнопки

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: scrollClass
  }, /*#__PURE__*/React.createElement("nav", {
    className: "header__nav"
  }, /*#__PURE__*/React.createElement(_ButtonNavigate.default, {
    btnType: "Link",
    className: nameLinki.nameLink == "Home" ? "header__link header__linkActive" : "header__link",
    to: "/",
    nameLink: "Home"
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), /*#__PURE__*/React.createElement(_ButtonNavigate.default, {
    btnType: "Link",
    className: nameLinki.nameLink == 'OilSearch' ? "header__link header__linkActive" : "header__link",
    to: "/OilSearch",
    nameLink: "OilSearch"
  }, "\u041F\u043E\u0434\u0431\u043E\u0440 \u043C\u0430\u0441\u043B\u0430"), /*#__PURE__*/React.createElement("img", {
    src: _photo.default.logoImg,
    alt: "Logo",
    className: "header__logo"
  }), /*#__PURE__*/React.createElement(_ButtonNavigate.default, {
    btnType: "Link",
    className: nameLinki.nameLink == 'Products' ? "header__link header__linkActive" : "header__link",
    nameLink: "Products",
    to: "/Products"
  }, "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"), /*#__PURE__*/React.createElement(_ButtonNavigate.default, {
    btnType: "Link",
    className: nameLinki.nameLink == "Contacts" ? "header__link header__linkActive" : "header__link",
    nameLink: "Contacts",
    to: "/Contacts"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))), /*#__PURE__*/React.createElement(_reactRouterDom.Outlet, null));
};
var _default = exports.default = Header;