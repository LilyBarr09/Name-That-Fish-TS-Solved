import "./styles/game-board.css";
import { useState } from "react";

interface Props {
  initialFishes: [{ name: string; url: string }];
  fishGuess();
  fishIndex: number;
}

export function FunctionalGameBoard(props: Props) {
  const [usersInput, setUsersInput] = useState("");

  const nextFishToName =
    props.initialFishes[
      props.fishIndex !== props.initialFishes.length ? props.fishIndex : 0
    ];

  const submitForm = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    props.fishGuess();
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
