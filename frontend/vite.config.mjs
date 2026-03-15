import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',
  server: {
    fs: {
      allow: ['..'] // Tell Vite it is allowed to read the root folder
    }
  }
})