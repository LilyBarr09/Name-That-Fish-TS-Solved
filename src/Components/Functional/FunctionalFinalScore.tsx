import "./styles/final-score.css";
// const correctCount = 0;
// const totalCount = 0;

interface Props {
  correctTally: number;
  totalTally: number;
}

export const FunctionalFinalScore = (props: Props) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{props.correctTally}</p>
      <hr />
      <p>{props.totalTally}</p>
    </div>
  </div>
);
