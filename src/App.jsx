/* eslint-disable react/jsx-no-target-blank */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// https://adueck.github.io/blog/caching-everything-for-totally-offline-pwa-vite-react/
// yarn create vite my-pwa --template react
// yarn add vite-plugin-pwa -D

function App() {

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
      <div>
        <h1>Hello PWA app!</h1>
      </div>
    </>
  )
}

export default App
