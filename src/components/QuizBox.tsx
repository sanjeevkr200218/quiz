import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setAnswer, setAttended } from "../store/slices/quizSlice";
import QuizOption from "./QuizOption";

type Props = { question: string; id: number; options: object };

function QuizBox({ question, id, options }: Props) {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<"A" | "B" | "C" | "D" | "">("");
  useEffect(() => {
    if (selected !== "") {
      dispatch(setAttended({ id: id }));
    }
    dispatch(setAnswer({ id: id, answer: selected }));
  }, [selected, dispatch, id]);
  const answers = useAppSelector((state) => state.quizSlice.answers);
  const answer = answers[id];
  return (
    <div className="flex justify-center flex-shrink-0 relative">
      <div className="w-full text-2xl font-medium">
        <div className="min-w-[300px] w-[30vw] flex justify-center">
          <p>
            {id}
            {". "}
            {question}
          </p>
        </div>
        <div className="flex-col space-y-4 mt-[30vh]">
          {Object.keys(options).map((key) => {
            return (
              <QuizOption
                key={key}
                isSelected={answer === key}
                option={options[key as keyof typeof options]}
                optionId={key as "A" | "B" | "C" | "D"}
                setSelected={setSelected}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuizBox;
