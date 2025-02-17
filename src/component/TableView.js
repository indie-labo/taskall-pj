"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../assets/css/style.css");
var _icon_search = _interopRequireDefault(require("../assets/img/icon_search.png"));
var _icon_reload = _interopRequireDefault(require("../assets/img/icon_reload.png"));
var _icon_plus = _interopRequireDefault(require("../assets/img/icon_plus.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var TableView = function TableView() {
  //一旦json形式でデータ定義。最終的にはDBからデータ取得してくるようにする。
  var data = [{
    taskName: "test1",
    date: "2025/01/01",
    tag: "work",
    status: "進行中",
    notes: "test1test1test1"
  }, {
    taskName: "test2",
    date: "2025/02/01",
    tag: "Private",
    status: "完了",
    notes: "test2test2test2"
  }, {
    taskName: "test3",
    date: "2025/03/01",
    tag: "work",
    status: "完了",
    notes: "test3test3test3"
  }, {
    taskName: "test4",
    date: "2025/04/01",
    tag: "Private",
    status: "保留",
    notes: "test4test4test4"
  }, {
    taskName: "test5",
    date: "2025/05/01",
    tag: "work",
    status: "進行中",
    notes: "test5test5test5"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "p_tableView"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p_tableView__heading"
  }, /*#__PURE__*/React.createElement("p", {
    className: "p_tableView__heading__title"
  }, "All List"), /*#__PURE__*/React.createElement("div", {
    className: "p_tableView__heading__iconWrap"
  }, /*#__PURE__*/React.createElement("img", {
    className: "iconSearch",
    src: _icon_search.default,
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "iconReload",
    src: _icon_reload.default,
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "iconPlus",
    src: _icon_plus.default,
    alt: ""
  }))), /*#__PURE__*/React.createElement("table", {
    className: "p_tableView__list"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "p_tableView__list__title"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "task"
  }, "\u30BF\u30B9\u30AF\u540D"), /*#__PURE__*/React.createElement("th", {
    className: "date"
  }, "\u65E5\u4ED8"), /*#__PURE__*/React.createElement("th", {
    className: "tag"
  }, "\u30BF\u30B0"), /*#__PURE__*/React.createElement("th", {
    className: "status"
  }, "\u30B9\u30C6\u30FC\u30BF\u30B9"), /*#__PURE__*/React.createElement("th", {
    className: "notes"
  }, "Notes"))), /*#__PURE__*/React.createElement("tbody", {
    className: "p_tableView__list__contents"
  }, data.map(function (item, index) {
    return /*#__PURE__*/React.createElement("tr", {
      key: index.toString()
    }, /*#__PURE__*/React.createElement("td", null, item.taskName), /*#__PURE__*/React.createElement("td", null, item.date), /*#__PURE__*/React.createElement("td", null, item.tag), /*#__PURE__*/React.createElement("td", null, item.status), /*#__PURE__*/React.createElement("td", null, item.notes));
  }))));
};
var _default = exports.default = TableView;