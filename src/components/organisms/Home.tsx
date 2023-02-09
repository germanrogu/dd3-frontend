import { useState } from "react";
import { Paper } from "../atoms/Paper";
import { InstructionsModal } from "../molecules/InstructionsModal";
import { Keyboard } from "../molecules/Keyboard";
import { PrincipalBar } from "../molecules/PrincipalBar";
import { StatisticsModal } from "../molecules/StatisticsModal";

export const Home = () => {
  const [darkToggle, setDarkToggle] = useState<boolean>(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

  const onChar = (value: string) => {
    // if (
    //   unicodeLength(`${currentGuess}${value}`) <= solution.length &&
    //   guesses.length < MAX_CHALLENGES &&
    //   !isGameWon
    // ) {
    //   setCurrentGuess(`${currentGuess}${value}`)
    // }
  };

  const onDelete = () => {
    // setCurrentGuess(
    //   new GraphemeSplitter().splitGraphemes(currentGuess).slice(0, -1).join('')
    // )
  };

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
          <div className="px-6 py-4">
            <p className="text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
          </div>
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
