import { useState } from "react";

const QuizCard = ({ quiz, index }) => {
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    if (!showResult) {
      setSelected(option);
      setShowResult(true);
    }
  };

  const isCorrect = selected === quiz.correctAnswer;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="font-semibold text-lg mb-4">
        {index}. {quiz.question}
      </h2>
      <div className="space-y-2">
        {quiz.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(option)}
            className={`w-full py-2 px-4 rounded border 
              ${showResult
                ? option === quiz.correctAnswer
                  ? "bg-green-200 border-green-500"
                  : option === selected
                  ? "bg-red-200 border-red-500"
                  : "bg-gray-100"
                : "hover:bg-blue-100 border-gray-300"
              }`}
            disabled={showResult}
          >
            {option}
          </button>
        ))}
      </div>
      {showResult && (
        <div className="mt-3 text-sm">
          <p className={isCorrect ? "text-green-600" : "text-red-600"}>
            {isCorrect ? "সঠিক উত্তর!" : "ভুল উত্তর!"}
          </p>
          <p className="text-gray-600">👉 ব্যাখ্যা: {quiz.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
