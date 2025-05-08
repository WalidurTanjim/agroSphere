// Quiz.js (User's side to fetch quizzes)
import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizCard from "./QuizCard";
import AddQuizForm from "./AddQuizForm"; // For admin to add quiz
import DashboardRoutes from "../DashboardRoutes";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const fetchQuizzes = () => {
    axios
      .get("https://agro-sphere-server-ten.vercel.app/api/quizzes")
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <DashboardRoutes />
      <h1 className="text-3xl font-bold text-center mb-6">🌾 Farming Quiz</h1>

      {/* Add Quiz Form (optional: admin only) */}
      <AddQuizForm onAdd={fetchQuizzes} />


    </div>
  );
};

export default Quiz;
