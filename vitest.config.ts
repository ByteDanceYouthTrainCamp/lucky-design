import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import { alias } from './alias'

export default defineConfig({
  plugins: [Vue() as any],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
  resolve: {
    alias,
  },
})
