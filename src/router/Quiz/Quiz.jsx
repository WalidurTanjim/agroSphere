import axios from "axios";
import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import AddQuizForm from "./AddQuizForm";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);

  const fetchQuizzes = () => {
    axios
      .get("http://localhost:5000/api/quizzes")
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">🌾 Farming Quiz</h1>

      {/* Add Quiz Form (optional: admin only) */}
      <AddQuizForm onAdd={fetchQuizzes} />

      {/* Quiz Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {quizzes.map((quiz, index) => (
          <QuizCard key={quiz._id} quiz={quiz} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
