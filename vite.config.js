import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for custom domain (root). Use '/would_you/' if using username.github.io/would_you/
  base: '/',
})
