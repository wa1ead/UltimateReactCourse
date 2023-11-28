import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Time />
    </div>
  );
}

function Time() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + counter);

  function handleNextCounter() {
    setCounter((c) => c + step);
  }
  function handlePreviousCounter() {
    setCounter((c) => c - step);
  }

  function handleNextStep() {
    setStep((s) => s + 1);
  }
  function handlePreviousStep() {
    setStep((s) => s - 1);
  }

  function handleReset() {
    setStep(1);
    setCounter(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <button onClick={handlePreviousStep}>-</button>
        Step: {step}
        <button onClick={handleNextStep}>+</button>
        <br />
        <button onClick={handlePreviousCounter}>-</button>
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        Counter: {counter}
        <button onClick={handleNextCounter}>+</button>
      </div>
      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter === 1
            ? `${counter} day from today is `
            : counter > 1
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {counter !== 0 || step !== 1 ? (
        <div>
          <button onClick={hendleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
