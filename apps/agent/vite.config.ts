import path from 'path';

import rsc from '@fe-free/vite-plugin-remove-svg-color';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import pages from 'vite-plugin-react-router-pages';
import svgr from 'vite-plugin-svgr';
import { defineConfig, loadEnv } from 'vite-plus';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());
  console.log('vite env', env);

  return defineConfig({
    base: mode === 'production' ? '/agent-static/' : '/',
    plugins: [
      react(),
      tailwindcss(),
      pages(),
      rsc(),
      svgr(),
      codeInspectorPlugin({
        bundler: 'vite',
      }),
      {
        name: 'preserve-data-name',
        transformIndexHtml(html) {
          return html.replace(
            /<script type="module" crossorigin src="([^"]*?)"><\/script>/g,
            '<script data-name="mainScript" type="module" crossorigin src="$1"></script>',
          );
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      open: true,
      host: true,
      proxy: {
        '/api/ai-service/': {
          target: 'http://pivot-agent-web.agent.gz.pivotinteract.cn:23456/',
          changeOrigin: true,
        },
      },
    },
  });
};
