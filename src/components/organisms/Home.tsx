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
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { GRID_GAMES_VALUE } from "../../utils/constants/values";

export const Home = () => {
  const [solutionWord, setSolutionWord] = useState("");
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [gameState, setGameState] = useLocalStorage({}, "gameState");
  const [wordsCompleted, setWordsCompleted] = useState<any>(() => {
    return Object.keys(gameState).length !== 0 ? gameState.wordsCompleted : [];
  });
  const [isVictory, setIsVictory] = useState(false);
  const [isDefeat, setIsDefeat] = useState(false);
  const [inputWord, setInputWord] = useState("");
  const [theme, setTheme] = useLocalStorage(null, "theme");
  const [darkToggle, setDarkToggle] = useState<boolean>(
    theme === null ? false : theme === "light" ? false : true
  );

  const darkMode = (value: boolean) => {
    setDarkToggle(value);
    setTheme(value ? "dark" : "light");
  };

  useEffect(() => {
    solution.then((res: any) => {
      setSolutionWord(res);
      setGameState({ wordsCompleted, solution: res });
    });
  }, [wordsCompleted]);

  useEffect(() => {
    if (Object.keys(gameState).length === 0) {
      setTimeout(() => {
        setIsInfoModalOpen(true);
      }, 300);
    }
  }, []);

  useEffect(() => {
    if (isVictory) {
      setTimeout(() => {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
        swalWithBootstrapButtons
          .fire({
            title: "¡Victoria!",
            text: "Gracias por jugar.",
            icon: "success",
            confirmButtonText: "Jugar de nuevo",
          })
          .then((result) => {
            if (result.isConfirmed) {
              setTimeout(() => {
                setIsStatsModalOpen(true);
                setGameState({});
              }, 400);
            }
          });
      }, 400);
    }

    if (isDefeat) {
      setTimeout(() => {
        setIsStatsModalOpen(true);
      }, 1000);
    }
  }, [isVictory, isDefeat]);

  const onDeleteKey = () => {
    setInputWord(inputWord.substring(0, inputWord.length - 1));
  };

  const onEnterKey = () => {
    if (isVictory || isDefeat) {
      return;
    }

    const validationWord =
      inputWord.split("").length === solutionWord.length &&
      wordsCompleted.length < GRID_GAMES_VALUE;

    if (wordsCompleted.length === GRID_GAMES_VALUE) {
      setIsDefeat(true);
      Swal.fire({
        title: "Derrota!",
        text: `La solucion ${solutionWord} 
                   Gracias por jugar.`,
        icon: "success",
        confirmButtonText: "Jugar de nuevo",
      });
      return;
    }

    if (!validationWord) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Faltan letras",
        showConfirmButton: false,
        timer: 1500,
        width: 300,
        heightAuto: true,
      });
      return;
    }

    if (!DICTIONARY.includes(inputWord.toLowerCase())) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Palabra no encontrada",
        showConfirmButton: false,
        timer: 1500,
        width: 300,
        heightAuto: true,
      });
      return;
    }

    setWordsCompleted([...wordsCompleted, inputWord]);
    setInputWord("");

    if (solutionWord === inputWord) {
      setIsVictory(true);
    }
  };

  const onAnyKey = (key: string) => {
    const input = `${inputWord}${key}`;
    const validationKey =
      input.split("").length <= solutionWord.length &&
      wordsCompleted.length < GRID_GAMES_VALUE &&
      !isVictory;
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
            darkMode={darkMode}
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
                  onEnterKey={onEnterKey}
                />
              )}
            </Paper>
          </div>

          <Keyboard
            onEnterKey={onEnterKey}
            onAnyKey={onAnyKey}
            onDeleteKey={onDeleteKey}
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
