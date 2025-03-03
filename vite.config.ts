import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import env from 'vite-plugin-env-compatible'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    env({ prefix: "VITE",  mountedPath: "process.env" })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
})
