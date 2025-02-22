"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../assets/css/style.css");
var Sidebar = function Sidebar(props) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "l_side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l_side__heading"
  }, "ADMIN APP"), /*#__PURE__*/React.createElement("div", {
    className: "l_side__main"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "l_side__main__list"
  }, /*#__PURE__*/React.createElement("li", {
    className: "l_side__main__list__item"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return props.setView("dashBoard");
    },
    className: "l_side__main__list__item__text ".concat(props.activeView === "dashBoard" ? "active" : "")
  }, "Dash board")), /*#__PURE__*/React.createElement("li", {
    className: "l_side__main__list__item"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return props.setView("table");
    },
    className: "l_side__main__list__item__text ".concat(props.activeView === "table" ? "active" : "")
  }, "Tables")), /*#__PURE__*/React.createElement("li", {
    className: "l_side__main__list__item"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return props.setView("kanban");
    },
    className: "l_side__main__list__item__text ".concat(props.activeView === "kanban" ? "active" : "")
  }, "Kanban")), /*#__PURE__*/React.createElement("li", {
    className: "l_side__main__list__item"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return props.setView("gantt");
    },
    className: "l_side__main__list__item__text ".concat(props.activeView === "gantt" ? "active" : "")
  }, "Gantt chart")), /*#__PURE__*/React.createElement("li", {
    className: "l_side__main__list__item"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return props.setView("chats");
    },
    className: "l_side__main__list__item__text ".concat(props.activeView === "chats" ? "active" : "")
  }, "Chats")), /*#__PURE__*/React.createElement("li", {
    className: "l_side__main__list__item"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return props.setView("fileMg");
    },
    className: "l_side__main__list__item__text ".concat(props.activeView === "fileMg" ? "active" : "")
  }, "File Manager")))));
};
var _default = exports.default = Sidebar;