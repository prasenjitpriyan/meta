import React, { useState } from "react";

const FeedbackForm = () => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }
    console.log("Form Submitted!");
    setComment("");
    setScore("10");
  };

  return (
    <div>
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
