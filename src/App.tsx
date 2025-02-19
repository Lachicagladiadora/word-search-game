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

function App() {
  const [wordList, setWordList] = useState(initialWordList(WORD_LIST));
  const [checkWord, setCheckWord] = useState<string[]>([]);
  const [board, setBoard] = useState<Row[]>([
    [
      { id: 11, value: getRandomLetter(), select: false },
      { id: 21, value: getRandomLetter(), select: false },
      { id: 31, value: getRandomLetter(), select: false },
      { id: 41, value: getRandomLetter(), select: false },
      { id: 51, value: getRandomLetter(), select: false },
      { id: 61, value: getRandomLetter(), select: false },
      { id: 71, value: getRandomLetter(), select: false },
      { id: 81, value: getRandomLetter(), select: false },
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
      { id: 12, value: getRandomLetter(), select: false },
      { id: 22, value: getRandomLetter(), select: false },
      { id: 32, value: getRandomLetter(), select: false },
      { id: 42, value: getRandomLetter(), select: false },
      { id: 52, value: getRandomLetter(), select: false },
      { id: 62, value: getRandomLetter(), select: false },
      { id: 72, value: getRandomLetter(), select: false },
      { id: 82, value: getRandomLetter(), select: false },
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
      { id: 13, value: getRandomLetter(), select: false },
      { id: 23, value: getRandomLetter(), select: false },
      { id: 33, value: getRandomLetter(), select: false },
      { id: 43, value: getRandomLetter(), select: false },
      { id: 53, value: getRandomLetter(), select: false },
      { id: 63, value: getRandomLetter(), select: false },
      { id: 73, value: getRandomLetter(), select: false },
      { id: 83, value: getRandomLetter(), select: false },
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
      { id: 14, value: getRandomLetter(), select: false },
      { id: 24, value: getRandomLetter(), select: false },
      { id: 34, value: getRandomLetter(), select: false },
      { id: 44, value: getRandomLetter(), select: false },
      { id: 54, value: getRandomLetter(), select: false },
      { id: 64, value: getRandomLetter(), select: false },
      { id: 74, value: getRandomLetter(), select: false },
      { id: 84, value: getRandomLetter(), select: false },
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
      { id: 15, value: getRandomLetter(), select: false },
      { id: 25, value: getRandomLetter(), select: false },
      { id: 35, value: getRandomLetter(), select: false },
      { id: 45, value: getRandomLetter(), select: false },
      { id: 55, value: getRandomLetter(), select: false },
      { id: 65, value: getRandomLetter(), select: false },
      { id: 75, value: getRandomLetter(), select: false },
      { id: 85, value: getRandomLetter(), select: false },
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
      { id: 16, value: getRandomLetter(), select: false },
      { id: 26, value: getRandomLetter(), select: false },
      { id: 36, value: getRandomLetter(), select: false },
      { id: 46, value: getRandomLetter(), select: false },
      { id: 56, value: getRandomLetter(), select: false },
      { id: 66, value: getRandomLetter(), select: false },
      { id: 76, value: getRandomLetter(), select: false },
      { id: 86, value: getRandomLetter(), select: false },
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
      { id: 17, value: getRandomLetter(), select: false },
      { id: 27, value: getRandomLetter(), select: false },
      { id: 37, value: getRandomLetter(), select: false },
      { id: 47, value: getRandomLetter(), select: false },
      { id: 57, value: getRandomLetter(), select: false },
      { id: 67, value: getRandomLetter(), select: false },
      { id: 77, value: getRandomLetter(), select: false },
      { id: 87, value: getRandomLetter(), select: false },
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
      { id: 18, value: getRandomLetter(), select: false },
      { id: 28, value: getRandomLetter(), select: false },
      { id: 38, value: getRandomLetter(), select: false },
      { id: 48, value: getRandomLetter(), select: false },
      { id: 58, value: getRandomLetter(), select: false },
      { id: 68, value: getRandomLetter(), select: false },
      { id: 78, value: getRandomLetter(), select: false },
      { id: 88, value: getRandomLetter(), select: false },
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
  ]);
  const [startSelect, setStartSelect] = useState(false);
  const [currentLetter, setCurrentLetter] = useState<Letter | null>(null);
  const [current, setCurrent] = useState<{
    id: number;
    value: string;
    select: boolean;
  } | null>(null);
  const [list, setList] = useState(listInitial);

  // console.log({  board });

  // const onUpdateItemList = (id: number) => {
  //   console.log(id);
  // };

  // list[0][1] = "jiji";
  console.log({ value: list[0][1], list });
  console.log({ current });

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
            background: "ghostwhite",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            // gap: "14px",
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
                // flexDirection: "column",
              }}
            >
              {c.map((cur, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    // list.indexOf(Number(`${i}${idx}`))
                    if (cur.id === `${i}${idx}`) {
                      // list[i][idx] = { ...cur, value: "jojo" + cur.value };
                      // setList((p) => {
                      //   const newList = [
                      //     [...p[i], { ...p[i][idx], value: "jojo" }],
                      //   ];
                      // (p[i][idx] = {
                      //   ...cur,
                      //   value: "jojo" + cur.value,
                      // });
                      // cur.value = "SUN";
                      setList((p) => {
                        // console.log({ p });
                        const newList =
                          // ...p,
                          p.map(
                            (cp) =>
                              // ...cp,
                              cp.map((curp) => {
                                return curp.id !== cur.id
                                  ? curp
                                  : { ...curp, select: !cur.select };
                              })
                            // ...cp,
                          );
                        // ...p,
                        return newList;
                      });
                      console.log("jojo", list[i][idx]);
                      //   return newList;
                      // });
                    }
                    // list[i][idx] = { ...cur, value: "jiji" };
                    console.log("ja ja", `${i}${idx}`, cur.id);
                    // setCurrent(cur);
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
                    // border: "solid 1px royalblue",
                    background: `${cur.select ? "red" : "midnightblue"}`,
                    // background: `${
                    //   currentLetter?.indexColumn === idx &&
                    //   currentLetter.indexRow === i
                    //     ? "red"
                    //     : "midnightblue"
                    // }`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    setCurrentLetter(cur);
                    // console.log({ currentLetter, cur, i, idx });
                    setBoard((p) => {
                      if (
                        p.indexOf(c) === cur.indexRow &&
                        p[i].indexOf(cur) === cur.indexColumn
                      )
                        // console.log("jiji");
                        return [...p, [...c, { ...cur, select: !cur.select }]];
                      // const updatedBoard = [...p, {}];
                    });
                    return { ...cur, select: !cur.select };
                  }}
                  // onMouseDown={() => setStartSelect(true)}
                  // onMouseUp={() => setStartSelect(false)}
                  // onMouseMove={() => {
                  //   if (!startSelect) return;
                  //   // setWordSearch((p) => {
                  //   //   return [...p, [...p[idx], { ...cur, select: true }]];
                  //   // });
                  //   // ({ ...cur, selecct: true });
                  //   // console.log(cur.value);
                  //   setStartSelect((p) => {
                  //     console.log("startSelect", !p);
                  //     return !p;
                  //   });
                  //   console.log(cur.select, {
                  //     ...cur,
                  //     select: startSelect,
                  //     i: i,
                  //     idx: idx,
                  //   });
                  // }}
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
