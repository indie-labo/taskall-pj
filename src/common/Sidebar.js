"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
require("@/assets/css/style.css");
var Sidebar = function Sidebar() {
  var pathname = (0, _reactRouterDom.useLocation)().pathname;
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
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "l_side__main__list__item__text ".concat(pathname === "/" ? "active" : "")
  }, "Dash board")), /*#__PURE__*/React.createElement("li", {
    className: "l_side__main__list__item"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "table",
    className: "l_side__main__list__item__text ".concat(pathname === "/table" ? "active" : "")
  }, "Tables")), /*#__PURE__*/React.createElement("li", {
    className: "l_side__main__list__item"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "kanban",
    className: "l_side__main__list__item__text ".concat(pathname === "/kanban" ? "active" : "")
  }, "Kanban")), /*#__PURE__*/React.createElement("li", {
    className: "l_side__main__list__item"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "gantt",
    className: "l_side__main__list__item__text ".concat(pathname === "/gantt" ? "active" : "")
  }, "Gantt chart")), /*#__PURE__*/React.createElement("li", {
    className: "l_side__main__list__item"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "chat",
    className: "l_side__main__list__item__text ".concat(pathname === "/chat" ? "active" : "")
  }, "Chat")), /*#__PURE__*/React.createElement("li", {
    className: "l_side__main__list__item"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "file",
    className: "l_side__main__list__item__text ".concat(pathname === "/file" ? "active" : "")
  }, "File Manager")))));
};
var _default = exports.default = Sidebar;