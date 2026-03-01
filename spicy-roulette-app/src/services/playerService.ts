import type { Player } from "../types/player";

export function getRandomPlayer(players: Player[]): Player{
  return players[Math.floor(Math.random() * players.length)];
}
export function validatePlayers(players: Player[]): boolean{
  return players.length >= 2 && players.length <= 5;
}
