"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
require("./propertySorting.css");
var _photo = _interopRequireDefault(require("../../../types/photo"));
var _ButtonCatalog = _interopRequireDefault(require("../../shared/Button/ButtonCatalog/ButtonCatalog"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PropertySorting = function PropertySorting(_ref) {
  var generalProps = _ref.generalProps;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    arrayChecked = _useState2[0],
    setArrayChecked = _useState2[1];
  var checkedInputSort = function checkedInputSort(props) {
    try {
      if (!arrayChecked.includes(props)) {
        setArrayChecked([].concat(_toConsumableArray(arrayChecked), [props]));
      } else {
        var a = arrayChecked.filter(function (type) {
          return type !== props;
        });
        setArrayChecked(a);
      }
    } catch (_unused) {
      alert("Ошибка");
    }
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "propertySortingForm"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "propertySortingForm__title"
  }, "\u041F\u043E\u0434\u0431\u043E\u0440 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432"), /*#__PURE__*/React.createElement("section", {
    className: "propertySortingForm__sortBlock"
  }, /*#__PURE__*/React.createElement("section", {
    className: "sortBlock__titleBlock"
  }, /*#__PURE__*/React.createElement("p", null, "\u0426\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("img", {
    src: _photo.default.arrowBtn,
    alt: "#",
    className: "sortBlock__img"
  }), /*#__PURE__*/React.createElement("button", null)), /*#__PURE__*/React.createElement("section", {
    className: "sortBlock__valueBlock"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "valueBlock__input"
  }), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "valueBlock__input"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "propertySortingForm__sortBlock"
  }, /*#__PURE__*/React.createElement("section", {
    className: "sortBlock__titleBlock"
  }, /*#__PURE__*/React.createElement("p", null, "\u0422\u0438\u043F"), /*#__PURE__*/React.createElement("img", {
    src: _photo.default.arrowBtn,
    alt: "#",
    className: "sortBlock__img"
  }), /*#__PURE__*/React.createElement("button", null)), generalProps.typeAll.map(function (props) {
    return /*#__PURE__*/React.createElement("p", {
      key: props.id
    }, props.type, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      onClick: function onClick() {
        return checkedInputSort(props.type);
      }
    }));
  })), /*#__PURE__*/React.createElement("section", {
    className: "propertySortingForm__sortBlock"
  }, /*#__PURE__*/React.createElement("section", {
    className: "sortBlock__titleBlock"
  }, /*#__PURE__*/React.createElement("p", null, "\u0412\u044F\u0437\u043A\u043E\u0441\u0442\u044C \u043F\u043E SAE"), /*#__PURE__*/React.createElement("img", {
    src: _photo.default.arrowBtn,
    alt: "#",
    className: "sortBlock__img"
  }), /*#__PURE__*/React.createElement("button", null)), generalProps.SAEAll.map(function (props) {
    return /*#__PURE__*/React.createElement("p", {
      key: props.id
    }, props.SAE, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      onClick: function onClick() {
        return checkedInputSort(props.SAE);
      }
    }));
  })), /*#__PURE__*/React.createElement("section", {
    className: "propertySortingForm__sortBlock"
  }, /*#__PURE__*/React.createElement("section", {
    className: "sortBlock__titleBlock"
  }, /*#__PURE__*/React.createElement("p", null, "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F"), /*#__PURE__*/React.createElement("img", {
    src: _photo.default.arrowBtn,
    alt: "#",
    className: "sortBlock__img"
  }), /*#__PURE__*/React.createElement("button", null)), generalProps.SpecificalAll.map(function (props) {
    return /*#__PURE__*/React.createElement("p", {
      key: props.id
    }, props.specifical, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      onClick: function onClick() {
        return checkedInputSort(props.specifical);
      }
    }));
  })), /*#__PURE__*/React.createElement(_ButtonCatalog.default, {
    type: "button",
    onClick: function onClick() {
      return console.log(arrayChecked);
    },
    Children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C"
  }), /*#__PURE__*/React.createElement(_ButtonCatalog.default, {
    type: "reset",
    onClick: function onClick() {
      return setArrayChecked([]);
    },
    Children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"
  }));
};
var _default = exports.default = PropertySorting;