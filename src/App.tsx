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

const listInitial = [
  [
    { id: "00", value: "carrot", select: false },
    { id: "01", value: "pineapple", select: false },
  ],
  [
    { id: "10", value: "orange", select: false },
    { id: "11", value: "lettuce", select: false },
  ],
];

const INITIAL_BOARD = [
  [
    { id: "00", value: getRandomLetter(), select: false },
    { id: "01", value: getRandomLetter(), select: false },
    { id: "02", value: getRandomLetter(), select: false },
    { id: "03", value: getRandomLetter(), select: false },
    { id: "04", value: getRandomLetter(), select: false },
    { id: "05", value: getRandomLetter(), select: false },
    { id: "06", value: getRandomLetter(), select: false },
    { id: "07", value: getRandomLetter(), select: false },
    // { id: 91, value: getRandomLetter(), select: false },
    // { indexColumn: 9, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 10, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 11, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 12, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 13, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 14, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 15, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 16, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 17, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 18, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 19, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 20, indexRow: 0, value: getRandomLetter(), select: false },
    // { indexColumn: 21, indexRow: 0, value: getRandomLetter(), select: false },
  ],
  [
    { id: "10", value: getRandomLetter(), select: false },
    { id: "11", value: getRandomLetter(), select: false },
    { id: "12", value: getRandomLetter(), select: false },
    { id: "13", value: getRandomLetter(), select: false },
    { id: "14", value: getRandomLetter(), select: false },
    { id: "15", value: getRandomLetter(), select: false },
    { id: "16", value: getRandomLetter(), select: false },
    { id: "17", value: getRandomLetter(), select: false },
    // { id: 92, value: getRandomLetter(), select: false },
    // { indexColumn: 9, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 10, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 11, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 12, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 13, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 14, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 15, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 16, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 17, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 18, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 19, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 20, indexRow: 1, value: getRandomLetter(), select: false },
    // { indexColumn: 21, indexRow: 1, value: getRandomLetter(), select: false },
  ],
  [
    { id: "20", value: getRandomLetter(), select: false },
    { id: "21", value: getRandomLetter(), select: false },
    { id: "22", value: getRandomLetter(), select: false },
    { id: "23", value: getRandomLetter(), select: false },
    { id: "24", value: getRandomLetter(), select: false },
    { id: "25", value: getRandomLetter(), select: false },
    { id: "26", value: getRandomLetter(), select: false },
    { id: "27", value: getRandomLetter(), select: false },
    // { id: 93, value: getRandomLetter(), select: false },
    // { indexColumn: 9, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 10, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 11, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 12, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 13, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 14, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 15, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 16, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 17, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 18, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 19, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 20, indexRow: 2, value: getRandomLetter(), select: false },
    // { indexColumn: 21, indexRow: 2, value: getRandomLetter(), select: false },
  ],
  [
    { id: "30", value: getRandomLetter(), select: false },
    { id: "31", value: getRandomLetter(), select: false },
    { id: "32", value: getRandomLetter(), select: false },
    { id: "33", value: getRandomLetter(), select: false },
    { id: "34", value: getRandomLetter(), select: false },
    { id: "35", value: getRandomLetter(), select: false },
    { id: "36", value: getRandomLetter(), select: false },
    { id: "37", value: getRandomLetter(), select: false },
    // { id: 94, value: getRandomLetter(), select: false },
    // { indexColumn: 9, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 10, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 11, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 12, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 13, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 14, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 15, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 16, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 17, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 18, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 19, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 20, indexRow: 3, value: getRandomLetter(), select: false },
    // { indexColumn: 21, indexRow: 3, value: getRandomLetter(), select: false },
  ],
  [
    { id: "40", value: getRandomLetter(), select: false },
    { id: "41", value: getRandomLetter(), select: false },
    { id: "42", value: getRandomLetter(), select: false },
    { id: "43", value: getRandomLetter(), select: false },
    { id: "44", value: getRandomLetter(), select: false },
    { id: "45", value: getRandomLetter(), select: false },
    { id: "46", value: getRandomLetter(), select: false },
    { id: "47", value: getRandomLetter(), select: false },
    // { id: 95, value: getRandomLetter(), select: false },
    // { indexColumn: 9, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 10, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 11, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 12, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 13, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 14, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 15, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 16, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 17, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 18, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 19, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 20, indexRow: 4, value: getRandomLetter(), select: false },
    // { indexColumn: 21, indexRow: 4, value: getRandomLetter(), select: false },
  ],
  [
    { id: "50", value: getRandomLetter(), select: false },
    { id: "51", value: getRandomLetter(), select: false },
    { id: "52", value: getRandomLetter(), select: false },
    { id: "53", value: getRandomLetter(), select: false },
    { id: "54", value: getRandomLetter(), select: false },
    { id: "55", value: getRandomLetter(), select: false },
    { id: "56", value: getRandomLetter(), select: false },
    { id: "57", value: getRandomLetter(), select: false },
    // { id: 96, value: getRandomLetter(), select: false },
    // { indexColumn: 9, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 10, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 11, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 12, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 13, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 14, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 15, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 16, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 17, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 18, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 19, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 20, indexRow: 5, value: getRandomLetter(), select: false },
    // { indexColumn: 21, indexRow: 5, value: getRandomLetter(), select: false },
  ],
  [
    { id: "60", value: getRandomLetter(), select: false },
    { id: "61", value: getRandomLetter(), select: false },
    { id: "62", value: getRandomLetter(), select: false },
    { id: "63", value: getRandomLetter(), select: false },
    { id: "64", value: getRandomLetter(), select: false },
    { id: "65", value: getRandomLetter(), select: false },
    { id: "66", value: getRandomLetter(), select: false },
    { id: "67", value: getRandomLetter(), select: false },
    // { id: 97, value: getRandomLetter(), select: false },
    // { indexColumn: 9, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 10, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 11, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 12, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 13, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 14, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 15, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 16, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 17, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 18, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 19, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 20, indexRow: 6, value: getRandomLetter(), select: false },
    // { indexColumn: 21, indexRow: 6, value: getRandomLetter(), select: false },
  ],
  [
    { id: "70", value: getRandomLetter(), select: false },
    { id: "71", value: getRandomLetter(), select: false },
    { id: "72", value: getRandomLetter(), select: false },
    { id: "73", value: getRandomLetter(), select: false },
    { id: "74", value: getRandomLetter(), select: false },
    { id: "75", value: getRandomLetter(), select: false },
    { id: "76", value: getRandomLetter(), select: false },
    { id: "77", value: getRandomLetter(), select: false },
    // { id: 98, value: getRandomLetter(), select: false },
    // { indexColumn: 9, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 10, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 11, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 12, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 13, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 14, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 15, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 16, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 17, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 18, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 19, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 20, indexRow: 7, value: getRandomLetter(), select: false },
    // { indexColumn: 21, indexRow: 7, value: getRandomLetter(), select: false },
  ],
];

function App() {
  const [wordList, setWordList] = useState(initialWordList(WORD_LIST));
  const [checkWord, setCheckWord] = useState<string[]>([]);
  const [board, setBoard] = useState<Row[]>(INITIAL_BOARD);
  const [startSelect, setStartSelect] = useState(false);
  // const [currentLetter, setCurrentLetter] = useState<Letter | null>(null);
  // const [current, setCurrent] = useState<{
  //   id: number;
  //   value: string;
  //   select: boolean;
  // } | null>(null);
  const [list, setList] = useState(listInitial);

  console.log({ value: list[0][1], list });
  console.log({ board });

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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "800px",
            padding: "50px 0px",
            background: "ghostwhite",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {list.map((c, i) => (
            <div
              key={i}
              style={{
                color: "black",
                display: "flex",
                gap: "20px",
                border: "solid 1px black",
              }}
            >
              {c.map((cur, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (cur.id === `${i}${idx}`) {
                      setList((p) => {
                        const newList = p.map((cp) =>
                          cp.map((curp) => {
                            return curp.id !== cur.id
                              ? curp
                              : { ...curp, select: true };
                          })
                        );
                        return newList;
                      });
                      console.log("jojo", list[i][idx]);
                    }
                    console.log("ja ja", `${i}${idx}`, cur.id);
                  }}
                  style={{
                    display: "flex",
                    border: "solid 1px black",
                    background: `${cur.select ? "red" : "green"}`,
                  }}
                >
                  {cur.value}
                </div>
              ))}
            </div>
          ))}
          {board.map((c, i) => (
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
                    height: "50px",
                    width: "50px",
                    fontSize: "40px",
                    userSelect: "none",
                    background: `${cur.select ? "red" : "midnightblue"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseDown={() => setStartSelect(true)}
                  onMouseUp={() => setStartSelect(false)}
                  onMouseMove={() => {
                    if (!startSelect) return;
                    console.log("start", cur.id, `${i}${idx}`);
                    if (cur.id !== `${i}${idx}`) return;
                    setBoard((p) => {
                      const updatedList = p.map((prevc) =>
                        prevc.map((pcur) =>
                          pcur.id === cur.id ? { ...pcur, select: true } : pcur
                        )
                      );
                      console.log("end", { updatedList });
                      return updatedList;
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
              fontSize: "20px",
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
