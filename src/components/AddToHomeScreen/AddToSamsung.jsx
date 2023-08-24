import React from "react";

import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im";
import { FiShare } from "react-icons/fi";
import { TfiPlus } from "react-icons/tfi";

export default function AddToSamsung({ closePrompt, doNotShowAgain }) {
  return (
    <div>
      <div>
        <button onClick={closePrompt}>x</button>
        <p>
          For the best experience, we recommend installing the app to your home
          screen! Samsung.
        </p>
        <div>
          <p>Click the</p>
          <FaTimes />
          <p>icon</p>
        </div>
        <div>
          <p>Scroll down and then click:</p>
          <div>
            <TfiPlus />
            <p>Add page to</p>
          </div>
        </div>
        <div>
          <p>Then select:</p>
          <div>
            <p>Home screen</p>
          </div>
        </div>
        <button onClick={doNotShowAgain}>Don&apos;t show again</button>
      </div>
    </div>
  );
}
