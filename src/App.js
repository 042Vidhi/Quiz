import QuizOptions from "./pages/QuizOptions";
//verbal reasoning quiz
import Quiz1 from "./pages/verbal_reasoning/Quiz";
import Quiz4 from "./pages/numerical/Quiz"
//
// import Quiz2 from "../pages/"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={ <QuizOptions/>} />
        <Route path="/quiz/verbal_reasoning" element={<Quiz1/>} />
        <Route path="/quiz/numerical" element={<Quiz4/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
