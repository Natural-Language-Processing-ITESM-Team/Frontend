import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Chat } from "./chat";

export const RecordMenu = () => {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
      theme === '' ? setTheme('light-theme') : setTheme('');
  }

  useEffect(() => {
      document.body.className = theme
  }, [theme])

  return (
    <>
      <Header type="chat" theme={theme} toggleTheme={toggleTheme} />
      <Chat />
      <Footer />
    </>
  );
};

