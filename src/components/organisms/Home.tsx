import { useState } from "react";
import { Paper } from "../atoms/Paper";
import { PrincipalBar } from "../molecules/PrincipalBar";

export const Home = () => {
  const [darkToggle, setDarkToggle] = useState<boolean>(false);
  const showInstructions = () => {
    console.log("showInstructions");
  };
  const showStatistics = () => {
    console.log("statistics");
  };
  return (
    <div
      className={`h-screen w-full flex items-center justify-center bg-gray-100 flex-col ${
        darkToggle && "dark"
      }`}
    >
      <PrincipalBar
        darkToggle={darkToggle}
        setDarkToggle={setDarkToggle}
        showInstructions={showInstructions}
        showStatistics={showStatistics}
      />

      <Paper>
        <img
          className="w-full"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2">
            The Coldest Sunset
          </div>
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
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </Paper>
      {/* <div className="max-w-sm rounded overflow-hidden bg-gray-200 p-5 rounded-lg mt-4 text-white dark:bg-gray-900">
        
      </div> */}
    </div>
  );
};
