import React from "react";

import { FaTimes } from "react-icons/fa";

export default function AddToOtherBrowser({ closePrompt, doNotShowAgain }) {
  const searchUrl = `https://www.google.com/search?q=add+to+home+screen+for+common-mobile-browsers`;

  return (
    <div>
      <div>
        <button onClick={closePrompt}>
          <FaTimes />
        </button>
        <p>
          For the best experience, we recommend installing the app to your home
          screen!
        </p>
        <div>
          <p>
            Unfortunately, we were unable to determine which browser you are
            using. Please search for how to install a web app for your browser.
          </p>
          <a href={searchUrl} target="_blank" rel="noreferrer">
            Try This Search
          </a>
        </div>
        <button onClick={doNotShowAgain}>Don&apos;t show again</button>
      </div>
    </div>
  );
}
