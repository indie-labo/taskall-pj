"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../component/index.ts");
require("../assets/css/style.css");
var MainView = function MainView(props) {
  var renderView = function renderView() {
    switch (props.view) {
      case "table":
        return /*#__PURE__*/React.createElement(_index.TableView, null);
      case "kanban":
        return /*#__PURE__*/React.createElement(_index.KanbanView, null);
      default:
        return /*#__PURE__*/React.createElement("p", null, "test");
    }
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "lMainView"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lMainView__contents"
  }, renderView()));
};
var _default = exports.default = MainView;