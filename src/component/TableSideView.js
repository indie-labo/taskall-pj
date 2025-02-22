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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var TableSideView = function TableSideView(props) {
  // タスク追加時のstate管理
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    task = _useState2[0],
    setTask = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    date = _useState4[0],
    setDate = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    name = _useState6[0],
    setName = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    status = _useState8[0],
    setStatus = _useState8[1];
  var _useState9 = (0, _react.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    tag = _useState10[0],
    setTag = _useState10[1];
  var _useState11 = (0, _react.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    notes = _useState12[0],
    setNotes = _useState12[1];
  var _useState13 = (0, _react.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    errorMessage = _useState14[0],
    setErrorMessage = _useState14[1];

  // タスク追加時、jsonに値を送る処理
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    // 空白の場合、値を送信しない
    if (!task) {
      setErrorMessage('※タスク名を入力してください');
      return;
    }
    setErrorMessage('');

    // 新しいタスクを作成し、親コンポーネントに渡す
    props.onAddTask({
      task: task,
      date: date,
      name: name,
      status: status,
      tag: tag,
      notes: notes
    });

    // 入力フィールドをリセット
    setTask("");
    setDate("");
    setName("");
    setStatus("");
    setTag("");
    setNotes("");
  };

  // サイドビューを閉じる
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
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "title"
  }, "\u65B0\u898F\u30BF\u30B9\u30AF\u306E\u8FFD\u52A0"), /*#__PURE__*/_react.default.createElement("form", {
    className: "inputArea",
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "blockWrap"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "item"
  }, "*\u30BF\u30B9\u30AF\u540D"), /*#__PURE__*/_react.default.createElement("input", {
    className: "field",
    type: "text",
    value: task,
    onChange: function onChange(e) {
      return setTask(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("li", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "item"
  }, "*\u65E5\u4ED8"), /*#__PURE__*/_react.default.createElement("input", {
    className: "field",
    type: "date",
    value: date,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("li", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "item"
  }, "*\u62C5\u5F53\u8005"), /*#__PURE__*/_react.default.createElement("input", {
    className: "field",
    type: "text",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("li", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "item"
  }, "*\u30B9\u30C6\u30FC\u30BF\u30B9"), /*#__PURE__*/_react.default.createElement("select", {
    className: "field",
    value: status,
    onChange: function onChange(e) {
      return setStatus(e.target.value);
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "\u672A\u7740\u624B"
  }, "\u672A\u7740\u624B"), /*#__PURE__*/_react.default.createElement("option", {
    value: "\u9032\u884C\u4E2D"
  }, "\u9032\u884C\u4E2D"), /*#__PURE__*/_react.default.createElement("option", {
    value: "\u5B8C\u4E86"
  }, "\u5B8C\u4E86"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "item"
  }, "*\u30BF\u30B0"), /*#__PURE__*/_react.default.createElement("select", {
    className: "field",
    value: tag,
    onChange: function onChange(e) {
      return setTag(e.target.value);
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "work"
  }, "work"), /*#__PURE__*/_react.default.createElement("option", {
    value: "private"
  }, "private"), /*#__PURE__*/_react.default.createElement("option", {
    value: "other"
  }, "other"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "item"
  }, "*Notes"), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "field textArea",
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    }
  }))), errorMessage && /*#__PURE__*/_react.default.createElement("p", {
    style: {
      marginBottom: '15px',
      fontSize: '14px',
      color: 'red'
    }
  }, errorMessage), /*#__PURE__*/_react.default.createElement("button", {
    className: "btnSubmit",
    type: "submit"
  }, "\u8FFD\u52A0"))));
};
var _default = exports.default = TableSideView;