import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    headers: {
      // Security headers
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      // Performance headers
      'Cache-Control': 'public, max-age=31536000, immutable',
      'ETag': 'strong',
      // Compression hints
      'Vary': 'Accept-Encoding',
      'Accept-Encoding': 'gzip, deflate, br'
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Performance optimizations
    target: "es2020",
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-tooltip"],
          utils: ["@tanstack/react-query", "class-variance-authority", "clsx"],
          charts: ["recharts"]
        },
        // Optimize chunk naming for caching
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return "assets/css/[name]-[hash][extname]";
          }
          if (assetInfo.name && assetInfo.name.match(/\.(png|jpe?g|gif|svg|webp|ico)$/)) {
            return "assets/images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        }
      },
    },
    // Compress assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    // Enable code splitting for better caching
    chunkSizeWarningLimit: 1000,
  },
  // Optimize deps
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  // Enable experimental features for better performance
  experimental: {
    renderBuiltUrl: (filename, { hostType }) => {
      if (hostType === 'js') {
        return { js: `/${filename}` };
      } else {
        return { relative: true };
      }
    },
  },
}));
