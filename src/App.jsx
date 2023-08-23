/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import styles from "../styles/Home.module.scss";

import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hi from "./pages/hi/[name]";
import ErrorPage from "./components/Error/ErrorPage";

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

  // Add to Home screen message code
  const [showAddToHomeScreen, setShowAddToHomeScreen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // console.log(deferredPrompt);

  // https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent#browser_compatibility
  // Safari, Firefox don't support this event so the only solution seem to be to check whether user is using safari or firefox and show them a message that they should add it to their home screen, but the adding must be done manually
  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      // Check if the app is already installed
      if (!window.matchMedia("(display-mode: standalone)").matches) {
        setShowAddToHomeScreen(true);
        setDeferredPrompt(event);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleAddToHomeScreen = () => {
    setShowAddToHomeScreen(false);
    if (deferredPrompt) {
      // Trigger the installation prompt
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
      });
      setDeferredPrompt(null);
      setShowAddToHomeScreen(false);
    }
  };

  // Alternative for Firefox and Safari, since they don't support beforeinstallprompt event
  const [showAddToHomeMessage, setShowAddToHomeMessage] = useState(false);

  useEffect(() => {
    const isSafari =
      /iPhone|iPad|iPod/.test(navigator.userAgent) &&
      !navigator.userAgent.includes("Chrome");
    const isFirefox =
      navigator.userAgent.includes("Firefox") &&
      /Android|iPhone|iPad|iPod/.test(navigator.userAgent);

    // console.log(navigator.userAgent);
    // console.log(isSafari, isFirefox);

    // console.log(window.matchMedia("(display-mode: standalone)"));

    if (
      (!window.matchMedia("(display-mode: standalone)").matches && isSafari) ||
      isFirefox
    ) {
      setShowAddToHomeMessage(true);
    }

    // if (isSafari || isFirefox) {
    //   setShowAddToHomeMessage(true);
    // }
  }, []);

  // Check if user is visiting the website from a mobile browser
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
        userAgent
      ) &&
      !/Tablet|Tablet|Pad|PlayBook|RIM/i.test(userAgent)
    ) {
      setIsMobile(true);
    }
  }, []);

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
      {/* If using React Router there should only really be the router Routes code in the App.js file, for testing and simplicity sake the above code is kept in this file, but this shouldn't be repeated unless for a good reason in real projects  */}
      <div className={styles.nav}>
        <h3>React Router</h3>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/hi/user">Hi user</Link>
          </ul>
        </nav>

        {/* Defining routes path and rendering components as element */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hi">
            <Route path=":name" element={<Hi />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      {/* Add to home screen message */}
      {showAddToHomeScreen && (
        <div className={styles.popup}>
          <p>Add this app to your home screen for a better experience!</p>
          <button onClick={handleAddToHomeScreen}>Add to Home Screen</button>
          <button
            style={{ marginLeft: "15px" }}
            onClick={() => setShowAddToHomeScreen(false)}
          >
            Close
          </button>
        </div>
      )}
      {showAddToHomeMessage && (
        <div className={styles.popup}>
          <p>To use this app offline, add it to your home screen:</p>
          <ol>
            <li>
              For Safari: Tap the Share button at the bottom of the Safari
              window, scroll down, and tap &quot;Add to Home Screen&quot;.
            </li>
            <li>
              For Firefox: Tap the three dots menu at the bottom of the Firefox
              window, then tap &quot;Page&quot; and &quot;Add to Home
              Screen&quot;.
            </li>
          </ol>
          <button onClick={() => setShowAddToHomeMessage(false)}>Close</button>
        </div>
      )}
      {!isMobile && (
        <div
          style={{
            background: "salmon",
            padding: "10px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Please visit this website on your phone to install the app.
        </div>
      )}
    </>
  );
}

export default App;
