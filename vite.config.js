"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vite = require("vite");
var _pluginReactSwc = _interopRequireDefault(require("@vitejs/plugin-react-swc"));
var _viteTsconfigPaths = _interopRequireDefault(require("vite-tsconfig-paths"));
var _vitePluginEnvCompatible = _interopRequireDefault(require("vite-plugin-env-compatible"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// https://vite.dev/config/
var _default = exports.default = (0, _vite.defineConfig)({
  plugins: [(0, _pluginReactSwc.default)(), (0, _viteTsconfigPaths.default)(), (0, _vitePluginEnvCompatible.default)({
    prefix: "VITE",
    mountedPath: "process.env"
  })],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
});