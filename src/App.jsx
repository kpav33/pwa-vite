/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import styles from "../styles/Home.module.scss"

// https://adueck.github.io/blog/caching-everything-for-totally-offline-pwa-vite-react/
// yarn create vite my-pwa --template react
// yarn add vite-plugin-pwa -D

// https://vite-pwa-org.netlify.app/deployment/netlify.html
// You don't need to follow this deployment guide, everything seems to work ok if you just deploy directly with Netlify without any adjustments

// https://github.com/vite-pwa/vite-plugin-pwa/tree/main/examples/react-router Official Vite PWA with React Router example

// https://vite-pwa-org.netlify.app/guide/, https://css-tricks.com/vitepwa-plugin-offline-service-worker/ => Useful PWA explanations

// Use @vite-pwa/assets-generator to generate the necessary image assets check the https://vite-pwa-org.netlify.app/assets-generator/ to see how it works

// Sass and CSS modules work out of the box, just install sass yarn add -D sass and use them as you would otherwise

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h1 className={styles.testStyle}>Hello PWA app!</h1>
      </div>
    </>
  )
}

export default App
