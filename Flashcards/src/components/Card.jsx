import React, { useState, useEffect } from 'react';
import "../App.css"
const Card = () => {
  const [title, setTitle] = useState('');

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
function handleClick() {
  const randomWord = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];
  setTitle(randomWord);
}


  return (
    <div className='card'>
      <h1>{title}</h1>
      <p>{words[title]}</p>
      <button onClick={handleClick}>New Word</button>

    </div>
  );
};

export default Card;
