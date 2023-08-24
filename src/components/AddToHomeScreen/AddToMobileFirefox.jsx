import React from "react";

import { FaTimes } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import ffIcon from "../../../public/firefox-install.png";

export default function AddToMobileFirefox({ closePrompt, doNotShowAgain }) {
  return (
    <div>
      <div>
        <button onClick={closePrompt}>
          <FaTimes />
        </button>
        <p>
          For the best experience, we recommend installing the app to your home
          screen! Mobile Firefox.
        </p>
        <div>
          <p>Click the</p>
          <HiDotsVertical />
          <p>icon</p>
        </div>
        <div>
          <p>Scroll down and then click:</p>
          <div>
            <img
              src={ffIcon}
              alt="Firefox install icon"
              style={{ width: "32px", height: "32px" }}
            />
            <p>Install</p>
          </div>
        </div>
        <button onClick={doNotShowAgain}>Don&apos;t show again</button>
      </div>
    </div>
  );
}
