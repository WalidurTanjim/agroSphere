import { useState } from "react";

const QuizCard = ({ quiz, index, userAnswers, setUserAnswers, submitted }) => {
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Update the answer when a user selects an option
  const handleOptionClick = (option) => {
    if (!submitted) {
      setSelected(option);

      // Save the selected answer in userAnswers state
      setUserAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[index - 1] = { questionId: quiz._id, answer: option };
        return updatedAnswers;
      });
    }
  };

  const isCorrect = selected === quiz.correctAnswer;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="font-semibold text-lg mb-4">
        {index}. {quiz.question}
      </h2>
      <div className="space-y-2">
        {/* Check if quiz.options exists and is an array */}
        {Array.isArray(quiz.options) && quiz.options.length > 0 ? (
          quiz.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(option)}
              className={`w-full py-2 px-4 rounded border 
                ${submitted
                  ? option === quiz.correctAnswer
                    ? "bg-green-200 border-green-500"
                    : option === selected
                    ? "bg-red-200 border-red-500"
                    : "bg-gray-100"
                  : selected === option
                  ? "bg-blue-200 border-blue-500"
                  : "hover:bg-blue-100 border-gray-300"
                }`}
              disabled={submitted}
            >
              {option}
            </button>
          ))
        ) : (
          <p>No options available</p> // Show a message if options are not available
        )}
      </div>

      {submitted && (
        <div className="mt-3 text-sm">
          <p className={isCorrect ? "text-green-600" : "text-red-600"}>
            {isCorrect ? "Correct Answer!" : "Incorrect Answer!"}
          </p>
          <p className="text-gray-600">👉 Explanation: {quiz.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
