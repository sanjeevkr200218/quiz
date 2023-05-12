type Props = { option: number; isActive: boolean; isAttended: boolean };

function QuestionNumberBox({ isActive, isAttended, option }: Props) {
  return (
    <div
      className={`flex justify-center rounded-full items-center border-2 h-5 w-5 md:h-10 md:w-10 transition duration-150 bg-white ${
        isAttended ? "border-green-500" : "border-gray-500"
      } ${isActive ? "scale-x-150 scale-y-150" : ""}`}
    >
      {option}
    </div>
  );
}

export default QuestionNumberBox;
