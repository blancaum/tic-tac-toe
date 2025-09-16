import { defineConfig } from 'vite';

export default defineConfig({
  base: '/tic-tac-toe/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
