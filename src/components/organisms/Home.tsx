import React from "react";
import { useEffect, useState } from "react";
import { solution } from "../../utils/getRandomWord";
import { Paper } from "../atoms/Paper";
import { GameGrid } from "../molecules/GameGrid";
import { InstructionsModal } from "../molecules/InstructionsModal";
import { Keyboard } from "../molecules/Keyboard";
import { PrincipalBar } from "../molecules/PrincipalBar";
import { StatisticsModal } from "../molecules/StatisticsModal";

export const Home = () => {
  const [darkToggle, setDarkToggle] = useState<boolean>(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [wordsCompleted, setWordsCompleted] = useState<string[]>([]);
  const [solutionWord, setSolutionWord] = useState();

  useEffect(() => {
    solution.then((res: any) => {
      setSolutionWord(res);
    });
  }, []);

  const onChar = (value: string) => {};

  const onDelete = () => {};

  const onEnter = () => {};
  return (
    <div className={`${darkToggle && "dark"}`}>
      <div
        className={`h-screen w-full flex items-center justify-center bg-gray-100 flex-col dark:bg-gray-900`}
      >
        <PrincipalBar
          darkToggle={darkToggle}
          setDarkToggle={setDarkToggle}
          setIsInfoModalOpen={setIsInfoModalOpen}
          setIsStatsModalOpen={setIsStatsModalOpen}
        />
        <Paper>
          {solutionWord && (
            <GameGrid
              wordSolution={solutionWord!}
              wordsCompleted={wordsCompleted}
            />
          )}
        </Paper>
        <Keyboard
          onChar={onChar}
          onDelete={onDelete}
          onEnter={onEnter}
          // solution={solution}
          // guesses={guesses}
        />
        <InstructionsModal
          isOpen={isInfoModalOpen}
          handleClose={() => setIsInfoModalOpen(false)}
        />
        <StatisticsModal
          isOpen={isStatsModalOpen}
          handleClose={() => setIsStatsModalOpen(false)}
        />
      </div>
    </div>
  );
};
