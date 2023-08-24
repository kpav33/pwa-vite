import React from "react";

import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { TbShare2 } from "react-icons/tb";

export default function AddToMobileChromeIos({ closePrompt, doNotShowAgain }) {
  return (
    <div>
      <div>
        <button onClick={closePrompt}>
          <FaTimes />
        </button>
        <p>
          For the best experience, we recommend installing the app to your home
          screen! Chrome mobile Ios.
        </p>
        <div>
          <p>Click the</p>
          <TbShare2 />
          <p>icon</p>
        </div>
        <div>
          <p>Scroll down and then click:</p>
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
