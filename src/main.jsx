import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { registerSW } from "virtual:pwa-register";

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
});

// If you are using TypeScript you would have to add this to tsconfig.json file
// // tsconfig.json
// {
//   "compilerOptions": {
//     ...
//     "types": [
//       "vite-plugin-pwa/client"
//     ]
//   },
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
