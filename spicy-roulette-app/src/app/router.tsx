import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./routes/Home";
import PlayersForm from "./routes/PlayersForm";
import PlayerWheel from "./routes/PlayerWheel";
import CategoryWheel from "./routes/CategoryWheel";
import QuestionWheel from "./routes/QuestionWheel";

export default function AppRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/players" element={<PlayersForm/>}/>
        <Route path="/wheel/players" element={<PlayerWheel/>}/>
        <Route path="/wheel/categories" element={<CategoryWheel/>}/>
        <Route path="/wheel/questions" element={<QuestionWheel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

