import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.scss";

import AddToHomeScreen from "src/components/AddToHomeScreen/AddToHomeScreen";

import useUserAgent from "src/hooks/useUserAgent";

function Prompt() {
  const [welcomeMessage, setWelcomeMessage] = useState("Checking device...");
  const { isMobile, userAgentString, userAgent } = useUserAgent();

  useEffect(() => {
    const welcomeMessage = isMobile
      ? "You are on a mobile device."
      : "You are on a desktop device. Please use a mobile device to view this app.";
    setWelcomeMessage(welcomeMessage);
  }, [isMobile]);

  return (
    <main className={styles.border}>
      <p>Welcome to the App!</p>
      <p>{welcomeMessage}</p>
      {userAgentString && <p>{userAgentString}</p>}
      <AddToHomeScreen />
    </main>
  );
}

export default Prompt;
