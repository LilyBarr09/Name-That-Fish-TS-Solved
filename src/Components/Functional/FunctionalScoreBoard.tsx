import "./styles/score-board.css";
//  Where the score is presented

// const incorrectCount = 0;
// const correctCount = 0;
// const answersLeft = ["trout", "salmon", "tuna", "shark"];

interface Props {
  correctTally: number;
  incorrectTally: number;
  answers: string[];
}

export function FunctionalScoreBoard(props: Props) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {props.incorrectTally}</div>
      <div id="choices-left">
        {props.answers.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {props.correctTally}</div>
    </div>
  );
}
