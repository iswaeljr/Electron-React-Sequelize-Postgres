import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { platform } from 'os'
import { copyFileSync } from 'fs'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    define:{
      'process.platform': JSON.stringify(process.platform)
    },
    css:{
      postcss:{
        plugins:[
          tailwindcss({
            config: './src/renderer/tailwind.config.js'
          })
        ]
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react(),
      {
        name: 'copy-static-files',
        buildStart() {
          const sourcePath = resolve('src/renderer/config.html');
          const destinationPath = resolve('out/renderer/config.html');
          copyFileSync(sourcePath, destinationPath);
        }
      }
    ]
  }
})
