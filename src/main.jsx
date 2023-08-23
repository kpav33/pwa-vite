// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { registerSW } from "virtual:pwa-register";
import { BrowserRouter } from "react-router-dom";

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

// https://reactrouter.com/en/main/start/tutorial => More advanced React Router tutorial

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
);
