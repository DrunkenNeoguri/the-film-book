import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';
import svgr from 'vite-plugin-svgr';

//*MEMO: 차후에 배포 관련으로 좀 더 최적화할 수 있는지 확인 필요.
export default defineConfig({
  plugins: [viteReact(), tailwindcss(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
