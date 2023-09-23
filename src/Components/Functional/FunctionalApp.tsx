import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [correctTally, setCorrectTally] = useState(0);
  const [incorrectTally, setIncorrectTally] = useState(0);

  const fishIndex: number = correctTally + incorrectTally;

  const fishGuess = (guess: string) => {
    if (guess === initialFishes[fishIndex].name) {
      setCorrectTally(correctTally + 1);
    } else {
      setIncorrectTally(incorrectTally + 1);
    }
  };

  const answersLeft = initialFishes
    .slice(fishIndex, initialFishes.length)
    .map((fish) => fish.name);

  return (
    <>
      {fishIndex < initialFishes.length && (
        <>
          <FunctionalScoreBoard
            correctTally={correctTally}
            incorrectTally={incorrectTally}
            answers={answersLeft}
          />
          <FunctionalGameBoard
            initialFishes={initialFishes}
            fishGuess={fishGuess} //*why is there an error here
            fishIndex={fishIndex}
          />
        </>
      )}
      {fishIndex === initialFishes.length && (
        <FunctionalFinalScore
          correctTally={correctTally}
          totalTally={initialFishes.length}
        />
      )}
    </>
  );
}
