import QuestionNumberBox from "./QuestionNumberBox";

type Props = {
  currentNumber: number;
  maxNumber: number;
  attended: number[];
  width: number;
};

export default function QuestionNumber({
  currentNumber,
  maxNumber,
  attended,
  width,
}: Props) {
  const elementsArray = Array.from({ length: maxNumber }, (_, index) => {
    return (
      <div key={index + 1}>
        <QuestionNumberBox
          option={index + 1}
          isActive={currentNumber === index + 1}
          isAttended={attended.includes(index + 1)}
        />
      </div>
    );
  });
  return (
    <div
      style={{ width: `${width}px` }}
      className="flex items-center justify-center relative"
    >
      <div
        style={{ width: `${width}px` }}
        className="absolute bg-gray-500 h-[2px] rounded-full"
      />
      <div
        style={{ width: `${width}px` }}
        className="flex justify-between absolute z-10"
      >
        {elementsArray}
      </div>
    </div>
  );
}
