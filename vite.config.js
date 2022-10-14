import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const { PORT = 3035 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: PORT
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src/')},
      { find: '@components', replacement: path.resolve(__dirname, 'src/components')},
    ]
  }
});