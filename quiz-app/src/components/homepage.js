import {useContext} from "react";
import{ MyContext, mybasket} from "../App"

export function Homepage() {

  const{ setData } = useContext(MyContext)

    function handleclick(){
      setData("question")
        
    }
        
  return (
    <div>
              <button className="btn btn-primary" onClick={handleclick}>Start Quiz</button>

    </div>
  );
}

export default Homepage;
