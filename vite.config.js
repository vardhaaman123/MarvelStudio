import { defineConfig } from 'vite'

export default defineConfig({
  // Treat .mp4 files as assets so Vite copies them to dist
  assetsInclude: ['**/*.mp4'],
  build: {
    // Increase the asset size limit so videos aren't inlined
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Keep video filenames readable (no hash)
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.mp4')) {
            return 'assets/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})