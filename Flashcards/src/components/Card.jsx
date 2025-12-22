import React, { useState } from 'react';
import "../App.css";

const Card = () => {
  const words = {
    Resilience: "The capacity to recover quickly from difficulties or setbacks.",
    Innovation: "The act of creating new ideas, methods, or products.",
    Integrity: "Adherence to strong moral and ethical principles.",
    Optimization: "The process of making something as effective or efficient as possible.",
    Iteration: "Repeating a process to improve a product or solution.",
    Synergy: "Increased effectiveness from collaboration.",
    Empathy: "The ability to understand and share feelings.",
    Scalability: "Ability to handle more workload.",
    Precision: "Being exact and detailed.",
    Architecture: "The structured design of a system.",
    Throughput: "Amount of work processed in a time frame.",
    Latency: "Delay before something begins.",
    Abstraction: "Simplifying complex systems.",
    Protocol: "Rules for communication.",
    Validation: "Ensuring correctness.",
    Synthesis: "Combining elements into a whole.",
    Heuristic: "Efficient, practical problem-solving.",
    Paradigm: "A model or framework.",
    Bandwidth: "Maximum data capacity.",
    Analytics: "Data analysis to gain insight."
  };

  const wordList = Object.keys(words);
  const [index, setIndex] = useState(0);  
  const [titleShow, setTitleShow] = useState(true);

  const title = wordList[index];

  function handleNext() {
    setIndex((prev) => (prev + 1) % wordList.length);
    setTitleShow(true); // reset to title when switching cards
  }

  function handlePrev() {
    setIndex((prev) => (prev - 1 + wordList.length) % wordList.length);
    setTitleShow(true); // reset to title when switching cards
  }

  function titleShowoff() {
    setTitleShow(prev => !prev);
  }

  return (
    <div className='card'>
      <div onClick={titleShowoff} style={{ cursor: "pointer" }}>
        {titleShow ? (
          <h1>{title}</h1>
        ) : (
          <p>{words[title]}</p>
        )}
      </div>

      <button onClick={handlePrev}>Prev Word</button>
      <button onClick={handleNext}>Next Word</button>
    </div>
  );
};

export default Card;
