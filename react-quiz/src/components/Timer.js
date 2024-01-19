import { useEffect } from "react";

function Timer({ dispatch, timeRemain }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "time" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  const mins = Math.floor(timeRemain / 60);
  const secs = timeRemain % 60;

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} : {secs < 10 && "0"}
      {secs}
    </div>
  );
}
export default Timer;
