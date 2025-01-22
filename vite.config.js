import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    terserOptions: {
      compress: {
        drop_console: true, // Remove all console logs
        drop_debugger: true, // Remove debugger statements
      },
    },
  },
})
