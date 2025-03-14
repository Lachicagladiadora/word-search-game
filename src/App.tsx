import { useEffect, useState } from "react";
import { WORD_LIST } from "./constants";
import { Letter, Row } from "./types";
import { getRandomLetter } from "./utils";

const initialWordList = (object: any): string[] => {
  const keys = Object.keys(object);
  const random = keys[Math.floor(Math.random() * keys.length)];
  const listRandom = object[`${random}`];
  return listRandom;
};
initialWordList(WORD_LIST);

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
  ],
];

function App() {
  const [wordList, setWordList] = useState(initialWordList(WORD_LIST));
  const [checkWord, setCheckWord] = useState<string[]>([]);
  // const []=useState()
  const [board, setBoard] = useState<Row[]>(INITIAL_BOARD);
  const [startSelect, setStartSelect] = useState(false);
  const [currentWord, setCurrentWord] = useState<Letter[]>([]);

  type OnToggleSelectInput = {
    letter: Letter;
    rowId: number;
    columnId: number;
  };

  const AddLetter = (letter: Letter) => {
    const existLetter = currentWord.filter((c) => c.id === letter.id);
    if (existLetter.length) return;
    setCurrentWord((p) => [...p, letter]);
  };

  const OnToggleSelect = ({ letter, rowId, columnId }: OnToggleSelectInput) => {
    if (letter.id !== `${rowId}${columnId}`) return;
    setBoard((p) => {
      const updatedList = p.map((prevc) =>
        prevc.map((pcur) =>
          pcur.id === letter.id ? { ...pcur, select: !pcur.select } : pcur
        )
      );
      return updatedList;
    });
    if (letter.select) return;
    AddLetter(letter);
  };

  type OnSelectInput = { letter: Letter; rowId: number; columnId: number };

  const onSelectLetter = ({ letter, rowId, columnId }: OnSelectInput) => {
    if (letter.id !== `${rowId}${columnId}`) return;
    setBoard((p) => {
      const updatedList = p.map((prevc) =>
        prevc.map((pcur) =>
          pcur.id === letter.id ? { ...pcur, select: true } : pcur
        )
      );
      return updatedList;
    });
  };

  // const uniqueLetter = (arr: Letter[], letter: Letter) => {
  //   const existLetter = arr.filter((c) => (c.id === letter.id ? false : true));
  //   console.log({ existLetter });
  //   return existLetter;
  //   // setCurrentWord(existLetter);
  // };

  // console.log({ board });

  // const onUndo =()=>{
  //   )
  // }

  useEffect(() => {
    const _checkWord = [...new Set(currentWord)].map((c) => c.value);
    setStartSelect(false);
    const straight = _checkWord.join("");
    const reverse = _checkWord.reverse().join("");

    // const compareCurrentWordWithSomeWordList = () => {
    const existStraight = wordList.filter(
      (c) => c.toLocaleLowerCase() === straight.toLocaleLowerCase()
    ).length;
    const existReverse = wordList.filter(
      (c) => c.toLocaleLowerCase() === reverse.toLocaleLowerCase()
    ).length;
    console.log(":)= check word", { existStraight }, { existReverse });

    if (existStraight) {
      setCheckWord((p) => [...p, straight]);
      setWordList((p) =>
        p.filter((c) => straight.toLocaleLowerCase() !== c.toLocaleLowerCase())
      );
      console.log({ straight });
      setCurrentWord([]);
      return;
    }
    console.log({ currentWord });
    if (existReverse) {
      setCheckWord((p) => [...p, reverse]);
      setWordList((p) =>
        p.filter((c) => reverse.toLocaleLowerCase() !== c.toLocaleLowerCase())
      );
      console.log({ reverse });
      setCurrentWord([]);
      return;
    }
    // };
    // compareCurrentWordWithSomeWordList();

    console.log({ _checkWord });
    console.log({ currentWord });
  }, [currentWord, wordList]);
  console.log({ currentWord });

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
        <button
          onClick={() =>
            setCurrentWord((p) => {
              if (p.length === 0) return [];
              return p.pop();
            })
          }
        >
          undo
        </button>
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
          onMouseLeave={() => setStartSelect(false)}
        >
          {board.map((c, i) => (
            <div
              key={`${i}row`}
              style={{
                display: "flex",
                color: "#eee",
                // border: "solid 1px red",
                alignItems: "center",
                justifyContent: "center",
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
                    background: `${cur.select ? "orange" : "#222"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() =>
                    OnToggleSelect({ letter: cur, rowId: i, columnId: idx })
                  }
                  onMouseDown={() => setStartSelect(true)}
                  onMouseUp={() => setStartSelect(false)}
                  onMouseMove={() => {
                    if (!startSelect) return;
                    onSelectLetter({ letter: cur, rowId: i, columnId: idx });
                    AddLetter(cur);
                    // setCurrentWord([]);
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
