import { useState } from "react";
import { ALPHABET, WORD_LIST } from "./constants";
import { Letter, Row } from "./types";
import { getRandomLetter, getRandomNumber } from "./utils";

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
  const [wordSearch, setWordSearch] = useState<Row[]>([
    [
      { indexColumn: 0, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 1, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 2, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 3, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 4, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 5, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 6, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 7, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 8, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 90, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 10, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 11, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 12, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 13, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 14, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 15, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 16, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 17, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 18, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 19, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 20, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 21, indexRow: 0, value: getRandomLetter(), select: false },
    ],
    [
      {
        indexColumn: 0,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 1,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 2,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 3,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 4,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 5,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 6,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 7,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 8,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 9,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 10,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 11,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 12,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 13,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 14,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 15,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 16,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 17,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 18,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 19,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 20,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 21,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
    ],
    [
      { indexColumn: 0, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 1, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 2, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 3, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 4, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 5, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 6, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 7, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 8, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 90, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 10, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 11, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 12, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 13, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 14, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 15, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 16, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 17, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 18, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 19, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 20, indexRow: 0, value: getRandomLetter(), select: false },
      { indexColumn: 21, indexRow: 0, value: getRandomLetter(), select: false },
    ],
    [
      {
        indexColumn: 0,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 1,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 2,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 3,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 4,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 5,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 6,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 7,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 8,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 9,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 10,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 11,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 12,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 13,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 14,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 15,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 16,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 17,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 18,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 19,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 20,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
      {
        indexColumn: 21,
        indexRow: 1,
        value: ALPHABET[getRandomNumber(ALPHABET.length)],
        select: false,
      },
    ],
  ]);
  const [startSelect, setStartSelect] = useState(false);
  const [currentLetter, setCurrentLetter] = useState<Letter | null>(null);

  console.log({ wordSearch });

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
      <main
        style={{
          width: "100%",
          // height: "100%",
          // flex: "1",
          // minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {/* <section
          style={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <span>time</span>
          <button>clear</button>
          <button>reset</button>
        </section> */}

        <section
          style={{
            // flex: "1",
            width: "100%",
            maxWidth: "800px",
            padding: "50px 0px",
            background: "purple",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            // gap: "14px",
          }}
        >
          {wordSearch.map((c, i) => (
            <div
              key={`${i}row`}
              style={{
                // width: "auto",
                display: "flex",
                color: "yellow",
                border: "solid 1px red",
                // color: "black",
                alignItems: "center",
                justifyContent: "center",
                // gap: "14px",
              }}
            >
              {c.map((cur, idx) => (
                <div
                  key={`${i}.${idx}`}
                  style={{
                    height: "30px",
                    width: "30px",
                    border: "solid 1px royalblue",
                    background: "olive",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  // onClick={(e) => console.log({ e })}
                  onMouseDown={() => setStartSelect(true)}
                  onMouseUp={() => setStartSelect(false)}
                  onMouseMove={() => {
                    if (!startSelect) return;
                    // setWordSearch((p) => {
                    //   return [...p, [...p[idx], { ...cur, select: true }]];
                    // });
                    // ({ ...cur, selecct: true });
                    // console.log(cur.value);
                    console.log(cur.select, {
                      ...cur,
                      select: true,
                      i: i,
                      idx: idx,
                    });
                  }}
                >
                  {cur.value}
                </div>
              ))}
            </div>
          ))}
        </section>

        <section
          style={{
            width: "100%",
            height: "10%",
            padding: "10px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <h2>
            You have {checkWord.length} words of {wordList.length} left to win
          </h2>
          <ul
            style={{
              padding: "20px 0px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "10px 60px",
              // flexDirection: "column",
              // alignItems: "center",
              // justifyItems: "center",
            }}
          >
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
      <footer style={{ width: "100%", textAlign: "center", padding: "40px" }}>
        by Lachicagadiadora
      </footer>
    </>
  );
}

export default App;
