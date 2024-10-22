"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./catalogItemPage.css");
var _LinkContext = require("../../../types/LinkContext");
var _ProductAssortments = require("../../../types/ProductAssortments");
var _PropertySorting = _interopRequireDefault(require("../../widgets/PropertySorting/PropertySorting"));
var _NotFoundPage = _interopRequireDefault(require("../FoundPage/NotFoundPage"));
var _MotorOilData = require("../../../types/MotorOilData");
var _axios = _interopRequireDefault(require("axios"));
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CatalogItemPage = function CatalogItemPage() {
  var nameLinkSession = sessionStorage.getItem("linkActiveClass");
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    typeState = _useState2[0],
    setTypeState = _useState2[1];

  // useEffect(() => {
  //   const apiUrl = 'http://localhost:3500/api/product?id_type=1';
  //   axios.get(apiUrl).then((resp) => {
  //     const type = resp.data;
  //     setTypeState(type);
  //     console.log(typeState)
  //   }).catch((err) => {
  //     console.log(typeState)
  //   });
  // }, [setTypeState]);

  return /*#__PURE__*/React.createElement("main", null, "MotorOil" == nameLinkSession ? /*#__PURE__*/React.createElement(_PropertySorting.default, {
    generalProps: _MotorOilData.MotorOilData
  }) : /*#__PURE__*/React.createElement(React.Fragment, null), "TransmissionOil" == nameLinkSession ? /*#__PURE__*/React.createElement(_PropertySorting.default, {
    generalProps: _MotorOilData.MotorOilData
  }) : /*#__PURE__*/React.createElement(React.Fragment, null), "CommercialOil" == nameLinkSession ? /*#__PURE__*/React.createElement(_PropertySorting.default, {
    generalProps: _MotorOilData.MotorOilData
  }) : /*#__PURE__*/React.createElement(React.Fragment, null), "Antifreeze" == nameLinkSession ? /*#__PURE__*/React.createElement(_PropertySorting.default, {
    generalProps: _MotorOilData.MotorOilData
  }) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("h2", null, "MotorOil" == nameLinkSession ? "Моторные масла" : ""), /*#__PURE__*/React.createElement("h2", null, "TransmissionOil" == nameLinkSession ? "Трансимссионые масла" : ""), /*#__PURE__*/React.createElement("h2", null, "CommercialOil" == nameLinkSession ? "Коммерческие масла" : ""), /*#__PURE__*/React.createElement("h2", null, "Antifreeze" == nameLinkSession ? "Антифризы" : "")));
};
var _default = exports.default = CatalogItemPage;