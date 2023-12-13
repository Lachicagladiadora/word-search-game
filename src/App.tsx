import { useState } from "react";
import { WORD_LIST } from "./constants";

const initialWordList = (object: any): string[] => {
  const keys = Object.keys(object);
  const random = keys[Math.floor(Math.random() * keys.length)];
  const listRandom = object[`${random}`];
  return listRandom;
};
initialWordList(WORD_LIST);

function App() {
  const [wordList, setWordList] = useState(initialWordList(WORD_LIST));
  const [checkWord, setCheckWord] = useState<string[]>([]);

  return (
    <>
      <header
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <h1>Word Search game</h1>
      </header>
      <main>
        <section>
          <span>time</span>
          <button>clear</button>
          <button>reset</button>
        </section>
        <section>
          <h2>
            You have {checkWord.length} words of {wordList.length} left to win
          </h2>
          <ul>
            {wordList.map((cur, idx) => (
              <li key={idx} onClick={() => console.log("checked")}>
                {cur}
              </li>
            ))}
          </ul>
          <ul>
            {checkWord.map((cur, idx) => (
              <li key={idx} onClick={() => console.log("not checked")}>
                {cur}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>by Lachicagadiadora</footer>
    </>
  );
}

export default App;
