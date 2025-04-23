import { useState } from "react";
import axios from "axios";

const AddQuizForm = ({ onAdd }) => {
  const [quiz, setQuiz] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    explanation: ""
  });

  const handleChange = (e, idx = null) => {
    if (idx !== null) {
      const newOptions = [...quiz.options];
      newOptions[idx] = e.target.value;
      setQuiz({ ...quiz, options: newOptions });

      // reset correctAnswer if it's no longer in options
      if (!newOptions.includes(quiz.correctAnswer)) {
        setQuiz(q => ({ ...q, correctAnswer: "" }));
      }
    } else {
      setQuiz({ ...quiz, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { question, options, correctAnswer, explanation } = quiz;

    if (!question || options.some(opt => !opt) || !correctAnswer || !explanation) {
      return alert("❗ সব ফিল্ড পূরণ করুন!");
    }

    if (!options.includes(correctAnswer)) {
      return alert("❗ সঠিক উত্তর অবশ্যই অপশনগুলোর মধ্যে হতে হবে!");
    }

    try {
      const res = await axios.post("http://localhost:5000/api/quizzes", quiz);
      if (res.data.insertedId) {
        alert("✅ কুইজ অ্যাড হয়েছে!");
        onAdd?.();
        setQuiz({
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
          explanation: ""
        });
      }
    } catch (err) {
      console.error(err);
      alert("❌ কুইজ অ্যাড করতে সমস্যা হয়েছে");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md mb-8 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">➕ নতুন কুইজ যুক্ত করুন</h2>

      <label className="block mb-2 font-medium">প্রশ্ন:</label>
      <input
        name="question"
        value={quiz.question}
        onChange={handleChange}
        className="border px-3 py-2 rounded w-full mb-4"
        placeholder="প্রশ্ন লিখুন..."
      />

      {quiz.options.map((opt, idx) => (
        <div key={idx}>
          <label className="block font-medium">অপশন {idx + 1}:</label>
          <input
            value={opt}
            onChange={(e) => handleChange(e, idx)}
            className="border px-3 py-2 rounded w-full mb-2"
            placeholder={`অপশন ${idx + 1}`}
          />
        </div>
      ))}

      <label className="block mt-3 font-medium">✅ সঠিক উত্তর:</label>
      <select
        name="correctAnswer"
        value={quiz.correctAnswer}
        onChange={handleChange}
        className="border px-3 py-2 rounded w-full mb-4 bg-white"
      >
        <option value="">-- অপশন নির্বাচন করুন --</option>
        {quiz.options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt || `অপশন ${idx + 1}`}
          </option>
        ))}
      </select>

      <label className="block font-medium">ℹ️ ব্যাখ্যা (সঠিক উত্তরের জন্য):</label>
      <textarea
        name="explanation"
        value={quiz.explanation}
        onChange={handleChange}
        className="border px-3 py-2 rounded w-full mb-4"
        rows="4"
        placeholder="ব্যাখ্যা লিখুন..."
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        কুইজ যুক্ত করুন
      </button>
    </form>
  );
};

export default AddQuizForm;
