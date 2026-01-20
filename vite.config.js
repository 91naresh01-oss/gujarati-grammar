import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    '__COMMIT_MESSAGE__': JSON.stringify(process.env.VERCEL_GIT_COMMIT_MESSAGE || process.env.npm_package_version || "Local Dev")
  }
})
