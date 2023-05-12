import Image from "next/image";
import React from "react";

type Props = {
  optionId: "A" | "B" | "C" | "D";
  isSelected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<"A" | "B" | "C" | "D" | "">>;
  option: string;
};

function QuizOption({ option, isSelected, setSelected, optionId }: Props) {
  return (
    <div
      onClick={() => {
        setSelected(optionId);
      }}
      className="w-[30vw] min-w-[350px] rounded-xl shadow-xl py-3 px-5 flex space-x-4 cursor-pointer bg-white items-center"
    >
      <div className="flex space-x-2 items-center font-normal text-lg flex-grow">
        <div className="rounded-lg border-2 border-gray-700 w-8 text-gray-700 flex justify-center items-center">
          {optionId}
        </div>
        <div>{option}</div>
      </div>
      <div
        className={` ${
          isSelected ? "" : "hidden"
        } flex relative justify-center items-center rounded-full w-6 h-6 bg-white`}
      >
        <Image
          style={{ padding: "3px" }}
          src="/checkmark.webp"
          fill
          alt="checkmark"
        />
      </div>
    </div>
  );
}

export default QuizOption;
