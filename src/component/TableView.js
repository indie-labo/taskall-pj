"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../assets/css/style.css");
var _react = require("react");
var _index = require("./index.ts");
var _icon_search = _interopRequireDefault(require("../assets/img/icon_search.png"));
var _icon_reload = _interopRequireDefault(require("../assets/img/icon_reload.png"));
var _icon_plus = _interopRequireDefault(require("../assets/img/icon_plus.png"));
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
var TableView = function TableView() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSideViewOpen = _useState2[0],
    setIsSideViewOpen = _useState2[1];

  // 一旦json形式でデータ定義。最終的にはDBからデータ取得してくるようにする。
  var _useState3 = (0, _react.useState)([{
      task: "test1",
      date: "2025/01/01",
      name: "AAA",
      status: "進行中",
      tag: "work",
      notes: "test test test"
    }, {
      task: "test2",
      date: "2025/02/01",
      name: "BBB",
      status: "完了",
      tag: "private",
      notes: "TEST TEST TEST"
    }, {
      task: "test3",
      date: "2025/03/01",
      name: "CCC",
      status: "未着手",
      tag: "other",
      notes: "**************"
    }, {
      task: "test4",
      date: "2025/04/01",
      name: "aaa",
      status: "アーカイブ",
      tag: "other",
      notes: "11111111111"
    }, {
      task: "test5",
      date: "2025/05/01",
      name: "bbb",
      status: "進行中",
      tag: "work",
      notes: "aaaaaaaaaaaaaa"
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];

  // サイドビューの開閉
  var toggleSideView = function toggleSideView() {
    setIsSideViewOpen(function (prev) {
      return !prev;
    });
  };

  // タスクを追加する
  var handleAddTask = function handleAddTask(newTask) {
    setData(function (prevData) {
      return [].concat(_toConsumableArray(prevData), [newTask]);
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "p_tableView"
  }, /*#__PURE__*/React.createElement(_index.TableSideView, {
    isOpen: isSideViewOpen,
    onClose: toggleSideView,
    onAddTask: handleAddTask
  }), /*#__PURE__*/React.createElement("div", {
    className: "p_tableView__heading"
  }, /*#__PURE__*/React.createElement("p", {
    className: "p_tableView__heading__title"
  }, "All List"), /*#__PURE__*/React.createElement("div", {
    className: "p_tableView__heading__iconWrap"
  }, /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("img", {
    className: "iconSearch",
    src: _icon_search.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("img", {
    className: "iconReload",
    src: _icon_reload.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("button", {
    onClick: toggleSideView
  }, /*#__PURE__*/React.createElement("img", {
    className: "iconPlus",
    src: _icon_plus.default,
    alt: ""
  })))), /*#__PURE__*/React.createElement("table", {
    className: "p_tableView__list"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "p_tableView__list__title"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "task"
  }, "\u30BF\u30B9\u30AF\u540D"), /*#__PURE__*/React.createElement("th", {
    className: "date"
  }, "\u65E5\u4ED8"), /*#__PURE__*/React.createElement("th", {
    className: "name"
  }, "\u62C5\u5F53\u8005"), /*#__PURE__*/React.createElement("th", {
    className: "status"
  }, "\u30B9\u30C6\u30FC\u30BF\u30B9"), /*#__PURE__*/React.createElement("th", {
    className: "tag"
  }, "\u30BF\u30B0"), /*#__PURE__*/React.createElement("th", {
    className: "notes"
  }, "Notes"))), /*#__PURE__*/React.createElement("tbody", {
    className: "p_tableView__list__contents"
  }, data.map(function (item, index) {
    return /*#__PURE__*/React.createElement("tr", {
      key: index.toString()
    }, /*#__PURE__*/React.createElement("td", null, item.task), /*#__PURE__*/React.createElement("td", null, item.date), /*#__PURE__*/React.createElement("td", null, item.name), /*#__PURE__*/React.createElement("td", null, item.status), /*#__PURE__*/React.createElement("td", null, item.tag), /*#__PURE__*/React.createElement("td", null, item.notes));
  }))));
};
var _default = exports.default = TableView;