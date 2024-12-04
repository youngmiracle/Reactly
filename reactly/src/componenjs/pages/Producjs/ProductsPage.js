"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./productsPage.css");
var _ProductAssortments = require("../../../types/ProductAssortments");
var _AssortmentCard = _interopRequireDefault(require("../../widgets/AssortmentCard/AssortmentCard"));
var _LinkContext = require("../../../types/LinkContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var ProductsPage = function ProductsPage() {
  //обращаясь к глобальному контексту, меняю стиль кнопке Products
  var _useLinkContext = (0, _LinkContext.useLinkContext)(),
    setNameLink = _useLinkContext.setNameLink;
  var onClickClassChangeLink = function onClickClassChangeLink(nameLink) {
    sessionStorage.setItem("linkActiveClass", nameLink);
    setNameLink(nameLink);
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "productsMain"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "productsPage__title"
  }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#9400D3"
    }
  }, "Reactly")), /*#__PURE__*/React.createElement("section", {
    className: "productsPage__assortments"
  }, _ProductAssortments.ProductAssortments.map(function (product) {
    return /*#__PURE__*/React.createElement(_AssortmentCard.default, {
      key: product.id,
      id: product.id,
      srcLogo: product.logoImg,
      altLogo: product.titleEng,
      srcItem: product.imageItem,
      altItem: product.titleEng,
      titleEng: product.titleEng,
      titleRus: product.titleRus,
      linkName: product.linkName,
      to: product.linkName,
      onClick: function onClick() {
        return onClickClassChangeLink(product.linkName);
      }
    });
  })));
};
var _default = exports.default = ProductsPage;