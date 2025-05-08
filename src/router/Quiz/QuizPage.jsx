import { useState, useEffect } from "react";
import axios from "axios";
import QuizCard from "./QuizCard";
import Swal from "sweetalert2";
import DashboardRoutes from "../DashboardRoutes";

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false); // Track if the answers have been submitted

  // Fetch quizzes from the backend
  useEffect(() => {
    axios
      .get("https://agro-sphere-server-ten.vercel.app/api/quizzes")
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.error("Error fetching quizzes: ", err));
  }, []);

  const handleAnswerSubmission = async () => {
    try {
      const userId = "some_user_id"; // Replace with actual userId logic
      await axios.post("https://agro-sphere-server-ten.vercel.app/api/answers", {
        userId,
        answers: userAnswers,
      });

      // Show SweetAlert with the result
      const correctAnswers = userAnswers.filter((answer) => {
        const quiz = quizzes.find((q) => q._id === answer.questionId);
        return quiz.correctAnswer === answer.answer;
      }).length;

      const incorrectAnswers = userAnswers.length - correctAnswers;

      Swal.fire({
        title: "Quiz Results",
        text: `Correct Answers: ${correctAnswers}\nIncorrect Answers: ${incorrectAnswers}`,
        icon: "success",
        confirmButtonText: "OK",
      });

      setSubmitted(true); // Mark as submitted
    } catch (err) {
      console.error("Error submitting answers: ", err);
      Swal.fire({
        title: "Error",
        text: "Failed to submit answers",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <DashboardRoutes></DashboardRoutes>
      <h1 className="text-3xl font-bold text-center mb-6">🌾 Farming Quiz</h1>

      {/* Quiz Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {quizzes.map((quiz, index) => (
          <QuizCard
            key={quiz._id}
            quiz={quiz}
            index={index + 1}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            submitted={submitted} // Pass the submitted state to QuizCard
          />
        ))}
      </div>

      {/* Submit Button */}
      {!submitted && (
        <div className="text-center mt-6">
          <button
            onClick={handleAnswerSubmission}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Submit Answers
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
