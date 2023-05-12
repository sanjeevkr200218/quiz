import { useEffect, useState, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { clear } from "../store/slices/quizSlice";
import { quizObject } from "../../public/quizData";
import ResultModal from "../components/ResultModal";
import ConfettiComponent from "@/hooks/Confetti";

type Props = {};

function Result({}: Props) {
  type answer = {
    [key: number]: string;
  };
  type correctAnswer = answer;
  const quizData = useMemo(() => quizObject(), []);
  const [correctAnswers, setCorrectAnswers] = useState<correctAnswer>({});
  let answers: answer;
  let attended: number[];
  const [numCorrect, setNumCorrect] = useState(0);
  const dispatch = useAppDispatch();
  answers = useAppSelector((store) => store.quizSlice.answers);
  attended = useAppSelector((store) => store.quizSlice.attended);
  const attendedLength = attended?.length;

  useEffect(() => {
    quizData.map((item, index) => {
      const { answer } = item;
      setCorrectAnswers((prev) => ({ ...prev, [index]: answer }));
    });
  }, [quizData]);

  useEffect(() => {
    for (const [questionNumber, answer] of Object.entries(answers)) {
      if (answer === correctAnswers[+questionNumber - 1]) {
        setNumCorrect((prev) => prev + 1);
      }
    }
  }, [answers, correctAnswers]);
  console.log(correctAnswers, answers);

  dispatch(clear());
  return (
    <div className="bg-gradient1 w-screen h-screen flex justify-center items-center max-w-full">
      <ConfettiComponent />
      <ResultModal
        attended={`${attendedLength}/5`}
        correct={`${numCorrect}/5`}
        percentage={`${(numCorrect / 5) * 100}%`}
      />
    </div>
  );
}

export default Result;
