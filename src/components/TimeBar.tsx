import { useState, useEffect } from "react";
import formatTime from "@/hooks/formatTime";

type Props = { time: number; maxTime: number; maxWidth: number };

function TimeBar({ time, maxTime, maxWidth }: Props) {
  const [width, setWidth] = useState(0);
  const [color, setColor] = useState<"red" | "orange" | "green">("green");
  const [formattedTime, setFormattedTime] = useState("");
  useEffect(() => {
    const timeRatio = time / maxTime;
    if (timeRatio <= 1 && timeRatio >= 2 / 3) {
      setColor("green");
    } else if (timeRatio < 2 / 3 && timeRatio >= 1 / 3) {
      setColor("orange");
    } else if (timeRatio < 1 / 3) {
      setColor("red");
    }
    setWidth(timeRatio * maxWidth);

    setFormattedTime(formatTime(time));
  }, [maxWidth, time, maxTime]);

  return (
    <div
      style={{ maxWidth: `${maxWidth}px` }}
      className="flex-col justify-start"
    >
      <div
        style={{ height: "5px", width: `${width}px` }}
        className={`${color === "red" ? "bg-red-500" : ""} ${
          color === "green" ? "bg-green-500" : ""
        } ${color === "orange" ? "bg-orange-500" : ""} rounded-full`}
      ></div>
      <div className="w-screen max-w-full flex justify-center">
        <p className="text-2xl">{formattedTime}</p>
      </div>
    </div>
  );
}

export default TimeBar;
