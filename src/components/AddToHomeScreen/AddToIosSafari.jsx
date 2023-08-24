import React from "react";

import { TbShare2 } from "react-icons/tb";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

export default function AddToIosSafari({ closePrompt, doNotShowAgain }) {
  return (
    <div>
      <div>
        <button onClick={closePrompt}>
          <FaTimes />
        </button>
        <p>
          For the best experience, we recommend installing the app to your home
          screen! Safari Ios.
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
