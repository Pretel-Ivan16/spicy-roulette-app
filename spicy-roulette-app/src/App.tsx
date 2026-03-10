import AppRouter from "./app/router";
import { GameProvider } from "./store/game/gameStore";

function App() {
  return (
    <GameProvider>
      <AppRouter/>
    </GameProvider>
  )
}

export default App;
