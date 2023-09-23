import "./styles/game-board.css";
import { FormEvent, useState } from "react";

interface Props {
  initialFishes: { name: string; url: string }[];
  fishGuess: (guess: string) => void;
  fishIndex: number;
}

export function FunctionalGameBoard({
  initialFishes,
  fishGuess,
  fishIndex,
}: Props) {
  const [usersInput, setUsersInput] = useState("");

  const nextFishToName =
    initialFishes[fishIndex !== initialFishes.length ? fishIndex : 0];

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    fishGuess(usersInput);
    setUsersInput("");
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={submitForm}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={usersInput}
          onChange={(e) => {
            setUsersInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
