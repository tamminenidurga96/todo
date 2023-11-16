import React, { createContext, useState } from "react";
import Homepage from './components/homepage';
import Question from './components/question';
import Result from './components/result';

export const MyContext = createContext(); // Renamed to MyContext

function App() {
  const [currentData, setCurrentData] = useState("homepage");
  const [myScore, setMyScore] = useState(0);

  return (
    <div>
      <MyContext.Provider value={{ setData: setCurrentData, Score: myScore, setScore: setMyScore }}>
        {currentData === "homepage" && <Homepage />}
        {currentData === "question" && <Question />}
        {currentData === "result" && <Result />}
      </MyContext.Provider>
    </div>
  );
};
export default App;