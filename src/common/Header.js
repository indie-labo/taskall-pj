"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../assets/css/style.css");
var _icon_tetoria = _interopRequireDefault(require("../assets/img/icon_tetoria.png"));
var _icon_notification = _interopRequireDefault(require("../assets/img/icon_notification.png"));
var _icon_setting = _interopRequireDefault(require("../assets/img/icon_setting.png"));
var _icon_profile = _interopRequireDefault(require("../assets/img/icon_profile.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var Header = function Header() {
  return /*#__PURE__*/React.createElement("header", {
    className: "l_header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l_header__logo"
  }, /*#__PURE__*/React.createElement("img", {
    className: "l_header__logo__img",
    src: _icon_tetoria.default,
    alt: ""
  }), /*#__PURE__*/React.createElement("p", null, "Taskall")), /*#__PURE__*/React.createElement("div", {
    className: "l_header__menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l_header__notification"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btnNotification"
  }, /*#__PURE__*/React.createElement("img", {
    src: _icon_notification.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("p", {
    className: "notificationNum"
  }, "5")), /*#__PURE__*/React.createElement("div", {
    className: "l_header__setting"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btnSetting"
  }, /*#__PURE__*/React.createElement("img", {
    src: _icon_setting.default,
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "l_header__profile"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btnProfile"
  }, /*#__PURE__*/React.createElement("img", {
    src: _icon_profile.default,
    alt: ""
  })))));
};
var _default = exports.default = Header;