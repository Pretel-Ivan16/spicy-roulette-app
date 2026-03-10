import React, { createContext, useState, type ReactNode } from 'react'
import type { Player } from '../../types/player'
import type { Category } from '../../types/category'

interface GameContextType {
  players: Player[];
  setPlayers: (players: Player[]) => void;
  playerCount: number;
  setPlayerCount: (count: number) => void;
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category) => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({children}: {children: ReactNode }){
  const [players, setPlayers] = useState<Player[]>([]);
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  
  return (
    <GameContext.Provider value={{players, setPlayers, playerCount, setPlayerCount, selectedCategory, setSelectedCategory}}>
      {children}
    </GameContext.Provider>
  );
}

