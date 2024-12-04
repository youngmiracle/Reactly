"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ButtonNavigate = _interopRequireDefault(require("../../shared/Button/ButtonNavigate/ButtonNavigate"));
require("./footer.css");
var _LinkContext = require("../../../types/LinkContext");
var _ImageClick = _interopRequireDefault(require("../../shared/Button/ImageClick/ImageClick"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var Footer = function Footer() {
  var nameLinki = (0, _LinkContext.useLinkContext)(); //Получаем глобальное состояние, в котором хранится класс для кнопки
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("article", {
    className: "footer__navBlock"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "navBlock__hotLine"
  }, /*#__PURE__*/React.createElement("img", {
    src: require("../../assets/images/logo.png"),
    className: "hotLine__logo",
    alt: "\u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0440\u0435\u0430\u043A\u0442\u043B\u0438"
  }), /*#__PURE__*/React.createElement("section", {
    className: "hotLine__aside"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hotLine__title"
  }, "\u0413\u043E\u0440\u044F\u0447\u0430\u044F \u043B\u0438\u043D\u0438\u044F:"), /*#__PURE__*/React.createElement("p", null, "+7 (914) 521-48-63"), /*#__PURE__*/React.createElement("p", {
    className: "hotLine__description"
  }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A \u043F\u043E \u0420\u0424, 24/7"))), /*#__PURE__*/React.createElement("nav", {
    className: "navBlock__nav"
  }, /*#__PURE__*/React.createElement(_ButtonNavigate.default, {
    btnType: "Link",
    width: "50%",
    className: nameLinki.nameLink == "Home" ? "header__link header__linkActiveFooter" : "header__link",
    to: "/",
    nameLink: "Home"
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), /*#__PURE__*/React.createElement(_ButtonNavigate.default, {
    btnType: "Link",
    width: "50%",
    className: nameLinki.nameLink == "OilSearch" ? "header__link header__linkActiveFooter" : "header__link",
    to: "/OilSearch",
    nameLink: "OilSearch"
  }, "\u041F\u043E\u0434\u0431\u043E\u0440 \u043C\u0430\u0441\u043B\u0430"), /*#__PURE__*/React.createElement(_ButtonNavigate.default, {
    btnType: "Link",
    width: "50%",
    className: nameLinki.nameLink == "Products" ? "header__link header__linkActiveFooter" : "header__link",
    to: "/Products",
    nameLink: "Products"
  }, "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"), /*#__PURE__*/React.createElement(_ButtonNavigate.default, {
    btnType: "Link",
    width: "50%",
    className: nameLinki.nameLink == "Contacts" ? "header__link header__linkActiveFooter" : "header__link",
    to: "/Contacts",
    nameLink: "Contacts"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement(_ButtonNavigate.default, {
    btnType: "button",
    width: "50%",
    className: "header__link"
  }, "\u041F\u0440\u0438\u043D\u0446\u0438\u043F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430"), /*#__PURE__*/React.createElement(_ButtonNavigate.default, {
    btnType: "button",
    width: "50%",
    className: "header__link"
  }, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"), /*#__PURE__*/React.createElement(_ButtonNavigate.default, {
    btnType: "button",
    width: "50%",
    className: "header__link"
  }, "\u041A\u0430\u043A \u043D\u0430\u0441 \u043D\u0430\u0439\u0442\u0438"))), /*#__PURE__*/React.createElement("article", {
    className: "footer__asideInfo"
  }, /*#__PURE__*/React.createElement("p", null, "Leventas Innovations Corparation,", /*#__PURE__*/React.createElement("br", null), "2020-2024. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"), /*#__PURE__*/React.createElement("section", {
    className: "asideInfo__follow"
  }, /*#__PURE__*/React.createElement("p", null, "Follow us"), /*#__PURE__*/React.createElement("nav", {
    className: "asideInfo__nav"
  }, /*#__PURE__*/React.createElement(_ImageClick.default, {
    btnType: "Link",
    to: "mailto:leventase@mail.ru",
    src: require("../../assets/images/icons/mailLogo.png"),
    alt: "\u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043C\u044D\u0439\u043B \u043F\u043E\u0447\u0442\u0430"
  }), /*#__PURE__*/React.createElement(_ImageClick.default, {
    btnType: "Link",
    to: "https://t.me/Hopalliop",
    src: require("../../assets/images/icons/telegram.png"),
    alt: "\u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C"
  }), /*#__PURE__*/React.createElement(_ImageClick.default, {
    btnType: "Link",
    to: "https://vk.com/okkkdaa",
    src: require("../../assets/images/icons/vk.png"),
    alt: "\u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0432\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435"
  }), /*#__PURE__*/React.createElement(_ImageClick.default, {
    btnType: "Link",
    to: "#",
    src: require("../../assets/images/icons/inst.png"),
    alt: "\u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0438\u043D\u0441\u0442\u0430\u0433\u0440\u0430\u043C\u043C"
  })))));
};
var _default = exports.default = Footer;