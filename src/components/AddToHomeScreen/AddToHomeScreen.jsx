import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import AddToIosSafari from "./AddToIosSafari";
import AddToMobileChrome from "./AddToMobileChrome";
import AddToMobileChromeIos from "./AddToMobileChromeIos";
import AddToMobileFirefox from "./AddToMobileFirefox";
import AddToMobileFirefoxIos from "./AddToMobileFirefoxIos";
import AddToSamsung from "./AddToSamsung";
import AddToOtherBrowser from "./AddToOtherBrowser";

import useUserAgent from "src/hooks/useUserAgent";

const COOKIE_NAME = "addToHomeScreenPrompt";

export default function AddToHomeScreen() {
  const [displayPrompt, setDisplayPrompt] = useState("");
  const { userAgent, isMobile, isStandalone, isIOS } = useUserAgent();

  const closePrompt = () => {
    setDisplayPrompt("");
  };

  const doNotShowAgain = () => {
    // Create date 1 year from now
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    Cookies.set(COOKIE_NAME, "dontShow", { expires: date });
    setDisplayPrompt("");
  };

  useEffect(() => {
    const addToHomeScreenPromptCookie = Cookies.get(COOKIE_NAME);
    // const addToHomeScreenPromptCookie = "";

    if (addToHomeScreenPromptCookie !== "dontShow") {
      // Only show prompt if user is on mobile and app is not installed
      if (isMobile && !isStandalone) {
        if (userAgent === "Safari") {
          setDisplayPrompt("safari");
        } else if (userAgent === "Chrome") {
          setDisplayPrompt("chrome");
        } else if (userAgent === "Firefox") {
          setDisplayPrompt("firefox");
        } else if (userAgent === "FirefoxiOS") {
          setDisplayPrompt("firefoxIos");
        } else if (userAgent === "ChromeiOS") {
          setDisplayPrompt("chromeIos");
        } else if (userAgent === "SamsungBrowser") {
          setDisplayPrompt("samsung");
        } else {
          setDisplayPrompt("other");
        }
      }
    } else {
      console.log("No.");
    }
  }, [userAgent, isMobile, isStandalone, isIOS]);

  const Prompt = () => (
    <>
      {
        {
          safari: (
            <AddToIosSafari
              closePrompt={closePrompt}
              doNotShowAgain={doNotShowAgain}
            />
          ),
          chrome: (
            <AddToMobileChrome
              closePrompt={closePrompt}
              doNotShowAgain={doNotShowAgain}
            />
          ),
          firefox: (
            <AddToMobileFirefox
              closePrompt={closePrompt}
              doNotShowAgain={doNotShowAgain}
            />
          ),
          firefoxIos: (
            <AddToMobileFirefoxIos
              closePrompt={closePrompt}
              doNotShowAgain={doNotShowAgain}
            />
          ),
          chromeIos: (
            <AddToMobileChromeIos
              closePrompt={closePrompt}
              doNotShowAgain={doNotShowAgain}
            />
          ),
          samsung: (
            <AddToSamsung
              closePrompt={closePrompt}
              doNotShowAgain={doNotShowAgain}
            />
          ),
          other: (
            <AddToOtherBrowser
              closePrompt={closePrompt}
              doNotShowAgain={doNotShowAgain}
            />
          ),
          "": <></>,
        }[displayPrompt]
      }
    </>
  );

  return (
    <>
      {displayPrompt !== "" ? (
        <>
          <div onClick={closePrompt}>
            <Prompt />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
