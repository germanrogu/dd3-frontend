import { useEffect, useState } from "react";
import { solution } from "../../utils/getRandomWord";
import { Paper } from "../atoms/Paper";
import { GameGrid } from "../molecules/GameGrid";
import { InstructionsModal } from "../molecules/InstructionsModal";
import { Keyboard } from "../molecules/Keyboard";
import { PrincipalBar } from "../molecules/PrincipalBar";
import { StatisticsModal } from "../molecules/StatisticsModal";
import { DICTIONARY } from "../../utils/constants/Dictionary";
import Swal from "sweetalert2";

export const Home = () => {
  const [darkToggle, setDarkToggle] = useState<boolean>(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [wordsCompleted, setWordsCompleted] = useState<string[]>([]);
  const [inputWord, setInputWord] = useState("");
  const [solutionWord, setSolutionWord] = useState("");

  useEffect(() => {
    solution.then((res: any) => {
      setSolutionWord(res);
    });
  }, []);

  const onDeleteKey = () => {
    setInputWord(inputWord.substring(0, inputWord.length - 1));
  };

  const onEnterKey = () => {
    console.log("Entro");
    const validationWord =
      inputWord.split("").length === solutionWord.length &&
      wordsCompleted.length < 5;

    if (!(inputWord.split("").length === solutionWord.length)) {
      return Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Faltan letras",
        showConfirmButton: false,
        timer: 1500,
        width: 300,
        heightAuto: true,
      });
    }

    if (!DICTIONARY.includes(inputWord.toLowerCase())) {
      return Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Palabra no encontrada",
        showConfirmButton: false,
        timer: 1500,
        width: 300,
        heightAuto: true,
      });
    }

    const winningWord = solutionWord === inputWord;

    if (validationWord) {
      setWordsCompleted([...wordsCompleted, inputWord]);
      setInputWord("");
    }

    if (winningWord) {
    }
  };

  const onAnyKey = (key: string) => {
    const input = `${inputWord}${key}`;
    const validationKey =
      input.split("").length <= solutionWord.length &&
      wordsCompleted.length < 5;
    if (validationKey) setInputWord(input);
  };

  return (
    <div className={`${darkToggle && "dark"}`}>
      <div
        className={`w-full flex h-screen flex-col justify-center bg-zinc-100 flex-col dark:bg-zinc-900`}
      >
        <Paper>
          <PrincipalBar
            darkToggle={darkToggle}
            setDarkToggle={setDarkToggle}
            setIsInfoModalOpen={setIsInfoModalOpen}
            setIsStatsModalOpen={setIsStatsModalOpen}
          />
        </Paper>

        <div className="mx-auto flex w-full grow flex-col px-1 pt-2 pb-8 sm:px-6 md:max-w-7xl lg:px-8 short:pb-2 short:pt-2">
          <div className="flex grow flex-col justify-center pb-6 short:pb-2">
            <Paper>
              {solutionWord && (
                <GameGrid
                  inputWord={inputWord}
                  wordSolution={solutionWord}
                  wordsCompleted={wordsCompleted}
                />
              )}
            </Paper>
          </div>

          <Keyboard
            onEnterKey={onEnterKey}
            onAnyKey={onAnyKey}
            onDeleteKey={onDeleteKey}
            // solution={solution}
            // guesses={guesses}
          />
          <InstructionsModal
            showModal={isInfoModalOpen}
            hideModal={() => setIsInfoModalOpen(false)}
          />
          <StatisticsModal
            showModal={isStatsModalOpen}
            hideModal={() => setIsStatsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};
