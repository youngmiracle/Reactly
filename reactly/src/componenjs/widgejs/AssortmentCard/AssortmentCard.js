"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./assortmentCard.css");
var _reactRouterDom = require("react-router-dom");
var AssortmentCard = function AssortmentCard(_ref) {
  var id = _ref.id,
    srcLogo = _ref.srcLogo,
    altLogo = _ref.altLogo,
    srcItem = _ref.srcItem,
    altItem = _ref.altItem,
    titleEng = _ref.titleEng,
    titleRus = _ref.titleRus,
    linkName = _ref.linkName;
  return /*#__PURE__*/React.createElement("article", {
    className: "assortmentCard",
    key: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "assortmentCard__info"
  }, /*#__PURE__*/React.createElement("img", {
    src: srcLogo,
    alt: "".concat(altLogo, " logo"),
    className: "assortmentCard__imgLogo"
  }), /*#__PURE__*/React.createElement("img", {
    src: srcItem,
    alt: "".concat(altItem, " item"),
    className: "assortmentCard__imgItem"
  }), /*#__PURE__*/React.createElement("p", {
    className: "assortmentCard__titleEng"
  }, titleEng)), /*#__PURE__*/React.createElement("div", {
    className: "assortmentCard__tabTitle"
  }, /*#__PURE__*/React.createElement("p", {
    className: "assortmentCard__titleRus"
  }, titleRus)), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: linkName,
    className: "assortmentCard__link"
  }));
};
var _default = exports.default = AssortmentCard;