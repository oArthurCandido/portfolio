"use client";
import { Progress } from "@/components/ui/progress";
import React, { useEffect } from "react";

const ProgressScroll = () => {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    window.addEventListener("scroll", () => {
      const progressPercent = Math.round((window.scrollY / totalHeight) * 100);
      if (progressPercent !== progress) setProgress(progressPercent);
    });
  }, [progress]);

  const um = "2/12";
  return (
    <div id="progresso" className="w-full fixed bottom-0 z-[1000] ">
      <Progress value={progress} />
    </div>
  );
};

export default ProgressScroll;
