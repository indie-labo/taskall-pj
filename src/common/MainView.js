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
      case "initialState":
        return /*#__PURE__*/React.createElement("p", null, "Hello World");
      case "table":
        return /*#__PURE__*/React.createElement(_index.TableView, null);
      default:
        return /*#__PURE__*/React.createElement("p", null, "Coming soon...");
    }
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "l_mainView"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l_mainView__contents"
  }, renderView()));
};
var _default = exports.default = MainView;