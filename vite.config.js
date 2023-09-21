import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// import { build } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_DEV_API_KEY':JSON.stringify(env.REACT_APP_DEV_API_KEY),
      'process.env.REACT_APP_DEV_AUTH_DOMAIN': JSON.stringify(env.REACT_APP_DEV_AUTH_DOMAIN),
      'process.env.REACT_APP_DEV_PROJECT_ID': JSON.stringify(env.REACT_APP_DEV_PROJECT_ID),
      'process.env.REACT_APP_DEV_STORAGE_BUCKET': JSON.stringify(env.REACT_APP_DEV_STORAGE_BUCKET),
      'process.env.REACT_APP_DEV_MESSAGING_SENDER_ID': JSON.stringify(env.REACT_APP_DEV_MESSAGING_SENDER_ID),
      'process.env.REACT_APP_DEV_APP_ID': JSON.stringify(env.REACT_APP_DEV_APP_ID),
      'process.env.REACT_APP_DEV_MEASUREMENT_ID': JSON.stringify(env.REACT_APP_DEV_MEASUREMENT_ID),
      'process.env.BASE_URL': JSON.stringify(env.BASE_URL)
    },
    plugins: [
      react()
    ],
    root: './',  
    publicDir: 'assets',    
    build: {
      outDir: 'dist',
    }
  }
  // ${process.env.BASE_URL}
})
