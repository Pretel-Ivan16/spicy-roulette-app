import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import PlayersForm from "./pages/PlayersForm";
import PlayerWheel from "./pages/PlayerWheel";
import CategoryWheel from "./pages/CategoryWheel";
import QuestionWheel from "./pages/QuestionWheel";
import MainLayout from "./layout/MainLayout";
import GameLayout from "./layout/GameLayout";

export default function AppRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
        </Route>

        <Route element={<GameLayout/>}>
          <Route path="/players" element={<PlayersForm/>}/>
          <Route path="/wheel/players" element={<PlayerWheel/>}/>
          <Route path="/wheel/categories" element={<CategoryWheel/>}/>
          <Route path="/wheel/questions" element={<QuestionWheel/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

