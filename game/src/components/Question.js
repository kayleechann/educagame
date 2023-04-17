import React from "react";

const Question = ({ onPress }) => {
  let inta = Math.floor(Math.random() * 100);
  let intb = Math.floor(Math.random() * 100);
  return (
    <div className="Question">
      <p>
        What is {inta} + {intb} ?
      </p>
      <input></input>
      <button type="button" onClick={onPress}>
        Submit
      </button>
    </div>
  );
};

export default Question;
