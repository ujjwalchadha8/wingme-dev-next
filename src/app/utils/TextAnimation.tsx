"use client";

import { useEffect, useState } from "react";

export const TextAnimation = ({text}: {text: string}) => {

  const [textDisplayed, setTextDisplayed] = useState('');

  useEffect(() => {
    // setInterval(() => {
    //   console.log(`setting ${textDisplayed.length}`);
    //   setTextDisplayed(textDisplayed => textDisplayed.length == text.length ? "" : textDisplayed + text.at(textDisplayed.length));
    // }, 70);
  }, []);

  return (
    <span>{text}</span>
  )
}