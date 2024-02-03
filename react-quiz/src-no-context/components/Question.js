import Options from "./Options";
function Question({ question, answer, dispatch }) {
  return (
    <div>
      <h2>{question.question}</h2>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
export default Question;
