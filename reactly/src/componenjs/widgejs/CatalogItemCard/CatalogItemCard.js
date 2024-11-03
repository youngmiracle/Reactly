"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _ButtonCatalog = _interopRequireDefault(require("../../shared/Button/ButtonCatalog/ButtonCatalog"));
require("./catalogItemCard.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var CatalogItemCard = function CatalogItemCard(_ref) {
  var productImage = _ref.productImage,
    productName = _ref.productName,
    productInfo = _ref.productInfo,
    productSize = _ref.productSize,
    productPrice = _ref.productPrice;
  var buttonClickDetails = function buttonClickDetails() {
    try {
      var storageLinkValue = sessionStorage.getItem("linkActiveClass");
      sessionStorage.setItem("linkActiveClass", "".concat(storageLinkValue, "/").concat(productName));
    } catch (err) {
      alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043E\u043C ".concat(err));
    }
  };
  var convertDollar = function convertDollar() {
    var rub = Math.min.apply(Math, _toConsumableArray(productPrice.map(function (e) {
      return e.price;
    })));
    var result = rub / 97.52;
    return Number(result.toFixed(2));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "catalogItemCard"
  }, /*#__PURE__*/React.createElement("img", {
    src: productImage,
    alt: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430",
    className: "catalogItemCard__img",
    style: {
      width: "100px",
      height: "100px"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "catalogItemCard__title"
  }, "\u041C\u043E\u0442\u043E\u0440\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E Reactly ", productName), /*#__PURE__*/React.createElement("ul", {
    className: "catalogItemCard__List"
  }, /*#__PURE__*/React.createElement("li", null, "\u0412\u0438\u0434\u044B \u0444\u0430\u0441\u043E\u0432\u043E\u043A: ", productSize.map(function (size) {
    return /*#__PURE__*/React.createElement("span", {
      className: "list__size",
      key: size.id_product_size
    }, size.size, "\u043B");
  })), " ", /*#__PURE__*/React.createElement("li", null, "\u0426\u0435\u043D\u0430: \u043E\u0442 ", /*#__PURE__*/React.createElement("strong", {
    className: "textStrong"
  }, Math.min.apply(Math, _toConsumableArray(productPrice.map(function (e) {
    return e.price;
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.3vh"
    }
  }, "\u20BD"), " / ", convertDollar(), "$")), " ", /*#__PURE__*/React.createElement("li", null, "\u0422\u0438\u043F: ", /*#__PURE__*/React.createElement("strong", {
    className: "textStrong"
  }, productInfo.map(function (info) {
    return info.title == "type" ? info.description : "";
  }))), /*#__PURE__*/React.createElement("li", null, "\u0412\u044F\u0437\u043A\u043E\u0441\u0442\u044C \u043F\u043E SAE: ", /*#__PURE__*/React.createElement("strong", {
    className: "textStrong"
  }, productInfo.map(function (info) {
    return info.title == "SAE" ? info.description : "";
  }))), /*#__PURE__*/React.createElement("li", null, "API: ", /*#__PURE__*/React.createElement("strong", {
    className: "textStrong"
  }, productInfo.map(function (info) {
    return info.title == "API" ? info.description : "";
  }), ",\xA0", productInfo.map(function (info) {
    return info.title == "ILSAC" ? " ILSAC ".concat(info.description) : "";
  }), productInfo.map(function (info) {
    return info.title == "ACEA" ? "ACEA ".concat(info.description) : "";
  })))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_ButtonCatalog.default, {
    width: "70%",
    Children: "\u041A\u0443\u043F\u0438\u0442\u044C",
    onClick: function onClick() {
      return buttonClickDetails();
    }
  }));
};
var _default = exports.default = CatalogItemCard;