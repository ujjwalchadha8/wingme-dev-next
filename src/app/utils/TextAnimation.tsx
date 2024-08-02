"use client";

import { useEffect, useState } from "react";

export const TextAnimation = ({texts}: {texts: string[]}) => {

  const [isAnimating, setIsAnimating] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIsAnimating(isAnimating => !isAnimating);
    }, 1000);
  }, []);

  return (
    <p className={"text-2xl text-gray-700 mt-5 text-center " + (isAnimating ? "animate-flip" : "")}>
      Only 3 out of 100 resumes result in an interview.
    </p>
  )
}