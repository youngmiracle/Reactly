"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLinkContext = exports.LinkContext = void 0;
var _react = require("react");
//Объединение (Unions) - для глобального контекста "Link", в файлах Header.tsx, MainPage.tsx и т.д.

//interface - для глобального контекста "Link" и его useState

var LinkContext = exports.LinkContext = /*#__PURE__*/(0, _react.createContext)({
  nameLink: "Home"
});
//Экспортируем переменную, которая создаёт глобальный контекст с дженериком LinkContextInterface и используется в файле App.tsx
var useLinkContext = exports.useLinkContext = function useLinkContext() {
  return (0, _react.useContext)(LinkContext);
};
//Экспортируем переменную, которая с помощью react хука создаёт связь с глобальным контекстом