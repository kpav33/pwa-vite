import React from "react";

import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

export default function AddToMobileFirefoxIos({ closePrompt, doNotShowAgain }) {
  return (
    <div>
      <div>
        <button onClick={closePrompt}>
          <FaTimes />
        </button>
        <p>
          For the best experience, we recommend installing the app to your home
          screen! Mobile Firefox Ios
        </p>
        <div>
          <p>Click the</p>
          <FaBars />
          <p>icon</p>
        </div>
        <div>
          <p>Scroll down and then click:</p>
          <div>
            <p>Share</p>
            <FiShare />
          </div>
        </div>
        <div>
          <p>Then click:</p>
          <div>
            <p>Add to Home Screen</p>
            <AiOutlinePlusSquare />
          </div>
        </div>
        <button onClick={doNotShowAgain}>Don&apos;t show again</button>
      </div>
    </div>
  );
}
