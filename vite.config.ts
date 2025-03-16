import { defineConfig } from 'vite'
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';


export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'], exclude: ['**/*.stories.tsx', '**/*.test.tsx', 'src/test/*'] }), 
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'COWIUILib',
      fileName: "cowi-ui-lib",
    },
    minify: false,
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      }
    }
  },
})