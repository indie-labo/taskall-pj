"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../assets/css/style.css");
var _icon_close = _interopRequireDefault(require("../assets/img/icon_close.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var TableSideView = function TableSideView(props) {
  // ボタンがクリックされたときにサイドビューを閉じる処理
  (0, _react.useEffect)(function () {
    var closeButton = document.getElementById("closeButton");
    var targetElement = document.getElementById("sideView");
    var handleClick = function handleClick() {
      targetElement.classList.remove("open");
      props.onClose();
    };
    closeButton === null || closeButton === void 0 || closeButton.addEventListener("click", handleClick);
    return function () {
      closeButton === null || closeButton === void 0 || closeButton.removeEventListener("click", handleClick);
    };
  }, [props.onClose]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "sideView",
    className: "p_tableView__sideView ".concat(props.isOpen ? "open" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "p_tableView__sideView__smoke"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "p_tableView__sideView__contents"
  }, /*#__PURE__*/_react.default.createElement("button", {
    id: "closeButton"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "iconClose",
    src: _icon_close.default,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("p", null, "\u30B5\u30A4\u30C9\u30D3\u30E5\u30FC")));
};
var _default = exports.default = TableSideView;