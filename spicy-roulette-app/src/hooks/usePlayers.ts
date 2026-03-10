import { useContext } from "react";
import { GameContext } from "../store/game/gameStore";

export function usePlayers(){
  const context = useContext(GameContext);

  if (!context){
    throw new Error('usePlayers debe estar dentro de GameProvider');
  }

  return context;
}