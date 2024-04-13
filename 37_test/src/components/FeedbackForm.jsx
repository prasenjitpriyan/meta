import React, { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good, Minimum length is 10"
    : "Optional feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }
    setComment("");
    setScore("10");
    onSubmit({ score, comment });
  };

  return (
    <div className="grid grid-cols-1 p-10 border-2">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div>
            <label htmlFor="score">Score: {score} ⭐</label>
            <input
              id="score"
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea
              placeholder={textAreaPlaceholder}
              name="comment"
              id="comment"
              cols="30"
              rows="5"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default FeedbackForm;
