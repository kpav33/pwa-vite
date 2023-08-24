import React from "react";

import { FaTimes } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { MdAddToHomeScreen } from "react-icons/md";

export default function AddToMobileChrome({ closePrompt, doNotShowAgain }) {
  return (
    <div>
      <div>
        <button onClick={closePrompt}>
          <FaTimes />
        </button>
        <p>
          For the best experience, we recommend installing the app to your home
          screen! Chrome mobile.
        </p>
        <div>
          <p>Click the</p>
          <HiDotsVertical />
          <p>icon</p>
        </div>
        <div>
          <p>Scroll down and then click:</p>
          <div>
            <p>Add to Home Screen</p>
            <MdAddToHomeScreen />
          </div>
        </div>
        <button onClick={doNotShowAgain}>Don&apos;t show again</button>
      </div>
    </div>
  );
}
