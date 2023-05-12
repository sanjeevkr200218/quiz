import { useState } from "react";

import Modal from "@/components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-gradient1 w-screen h-screen flex justify-center items-center max-w-full">
      <div className="flex-col items-center justify-center ">
        <p className="text-center font-semibold text-white font-poppins text-6xl -translate-y-20">
          Test Your General Knowledge
        </p>
        <div className="justify-center flex w-screen max-w-full ">
          <ul className="list-disc text-white font-semibold">
            <li>5 QUESTIONS</li>
            <li>60 SECONDS</li>
            <li>50% PASSING RATE</li>
          </ul>
        </div>
        <div className="w-screen max-w-full flex justify-center translate-y-28">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient2 button text-black"
          >
            TAKE THE ASSESMENT
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </main>
  );
}
