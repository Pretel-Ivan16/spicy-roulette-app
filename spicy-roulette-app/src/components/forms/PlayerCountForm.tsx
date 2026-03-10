import React from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import { usePlayers } from '../../hooks/usePlayers';
import Card from '../ui/Card';

function PlayerCountForm() {
  const {goToPlayersForm} = useNavigation();
  const {setPlayerCount} = usePlayers();

  const playerOptions = [2,3,4,5,6,7,8];

  const handleSelectPlayers = (count: number) => {
    setPlayerCount(count)
    goToPlayersForm(count);
  };

  return (
    <div className=''>
      {playerOptions.map((count) => (
        <Card 
        key={count}
        onClick={() => handleSelectPlayers(count)}
        className=''
        >
          <div>
            <p>{count}</p>
            <p>Players</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default PlayerCountForm
