"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./buttonNavigate.css");
var _reactRouterDom = require("react-router-dom");
var _LinkContext = require("../../../../types/LinkContext");
var ButtonNavigate = function ButtonNavigate(_ref) {
  var to = _ref.to,
    className = _ref.className,
    nameLink = _ref.nameLink,
    children = _ref.children,
    btnType = _ref.btnType,
    width = _ref.width;
  var nameLinki = (0, _LinkContext.useLinkContext)(); //Получаем глобальное состояние, в котором хранится класс для кнопки
  var _useLinkContext = (0, _LinkContext.useLinkContext)(),
    setNameLink = _useLinkContext.setNameLink;

  //Функция, которая принимает название страницы, обновляет ключ в ssesionStorage и меняет глобальное состояние
  var onClickClassChangeLink = function onClickClassChangeLink(nameLink) {
    sessionStorage.setItem("linkActiveClass", nameLink);
    setNameLink(nameLink);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, btnType == "Link" ? /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "".concat(to),
    style: {
      width: "".concat(width)
    },
    className: className,
    onClick: function onClick() {
      return onClickClassChangeLink(nameLink);
    }
  }, children) : /*#__PURE__*/React.createElement("button", {
    style: {
      width: "".concat(width)
    },
    className: className
  }, children));
};
var _default = exports.default = ButtonNavigate;