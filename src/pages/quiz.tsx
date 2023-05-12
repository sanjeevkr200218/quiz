import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TimeBar from "@/components/TimeBar";
import QuestionNumber from "@/components/QuestionNumber";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import QuizBox from "@/components/QuizBox";
import { quizObject } from "../../public/quizData";
import { incrementQuestion, decrementQuestion } from "@/store/slices/uiSlice";

type Props = {};

function Quiz({}: Props) {
  const attendedFromStore = useAppSelector((state) => state.quizSlice.attended);
  const router = useRouter();
  const [start] = useState(Date.now());
  const [now, setNow] = useState(start);
  const counter = now - start;
  const time = Math.floor(60000 - counter);
  const [pageWidth, setPageWidth] = useState(0);
  const [translateX, setTranslateX] = useState("0vw");
  const quizData = quizObject();
  const dispatch = useAppDispatch();
  const currentQuestion = useAppSelector(
    (state) => state.uiSlice.currentQuestion
  );

  useEffect(() => {
    if (time <= 100) {
      router.push("/result");
    }
    const intervalID = setInterval(() => {
      if (counter <= 60000) {
        setNow(Date.now());
      }
    }, 100);
    return () => clearInterval(intervalID);
  }, [counter, time, router]);

  useEffect(() => {
    if (currentQuestion === 1) {
      setTranslateX("0vw");
    }
    if (currentQuestion === 2) {
      setTranslateX("-100vw");
    }
    if (currentQuestion === 3) {
      setTranslateX("-200vw");
    }
    if (currentQuestion === 4) {
      setTranslateX("-300vw");
    }
    if (currentQuestion === 5) {
      setTranslateX("-400vw");
    }
  }, [currentQuestion]);

  useEffect(() => {
    setPageWidth(window.innerWidth);
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen max-h-full max-w-screen max-w-full bg-gray-200">
      <div>
        <div className="pt-5">
          <TimeBar time={time} maxTime={60000} maxWidth={pageWidth} />
        </div>
        <div className="flex justify-center w-screen max-w-full mt-6">
          <QuestionNumber
            currentNumber={currentQuestion}
            maxNumber={5}
            attended={attendedFromStore}
            width={pageWidth - 100}
          />
        </div>
      </div>
      <div className="mt-[8vh]">
        <div className="flex relative overflow-x-hidden w-screen max-w-full m-0 p-0">
          <div
            className="flex transform transition duration-100"
            style={{ transform: `translateX(${translateX})` }}
          >
            {quizData.map((item, index) => {
              const { question, options } = item;
              return (
                <div
                  key={index}
                  className="flex justify-center flex-shrink-0 min-w-screen w-screen max-w-full"
                >
                  <QuizBox
                    question={question}
                    id={index + 1}
                    options={options}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex max-w-full w-screen justify-center space-x-5 mt-[7vh]">
        <button
          onClick={() => {
            dispatch(decrementQuestion());
          }}
          disabled={currentQuestion === 1}
          className="button disabled:opacity-50 disabled:text-gray-500 flex text-white bg-blue-500 w-36 lg:w-60 justify-center items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <div className="flex-grow text-sm md:text-xl">Previous</div>
        </button>
        {currentQuestion !== 5 ? (
          <button
            onClick={() => {
              dispatch(incrementQuestion());
            }}
            className="button flex text-white bg-blue-500 w-36 lg:w-60 justify-center items-center "
          >
            <div className="flex-grow text-sm md:text-xl">Next</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={() => {
              router.push("/result");
            }}
            className="button flex text-white bg-green-500 w-36 lg:w-60 justify-center items-center"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
