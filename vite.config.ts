import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://robotex7.github.io/final-diploma/",
  plugins: [react()],
})