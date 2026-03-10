import React from 'react';
import { usePlayers } from '../../hooks/usePlayers';
import { useNavigation } from '../../hooks/useNavigation';
import Wheel from '../../components/wheel/Wheel';
import Title from '../../components/ui/Title';
import { useWheel } from '../../hooks/useWheel';

// Degradado suave de rojo a naranja, como la estética del header
const PLAYER_COLORS = [
  '#FF0000', // Rojo puro
  '#FF1900', // Rojo-naranja
  '#FF3200', // Rojo-naranja
  '#FF4B00', // Rojo-naranja
  '#FF6400', // Naranja-rojo
  '#FF7D00', // Naranja
  '#FF9600', // Naranja claro
  '#FFAF00', // Naranja más claro
];

function PlayerWheel() {
  const { players } = usePlayers();
  const { goCategoryWheel } = useNavigation();
  const { isSpinning, selectedItem, rotation, spinWheel, reset } = useWheel();

  const wheelItems = players.map((player, index) => ({
    id: player.id,
    label: player.name,
    color: PLAYER_COLORS[index % PLAYER_COLORS.length],
  }));

  const handleSpin = () => {
    spinWheel(wheelItems, (selected) => {
      // Aquí puedes hacer algo con el jugador seleccionado
      console.log('Jugador seleccionado:', selected.label);
      // Después de 2 segundos, ir a la siguiente rueda
      setTimeout(() => {
        goCategoryWheel();
      }, 2000);
    });
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-8'>
      <Title title='Which player stars?' size='h2'/>
      
      <Wheel
        items={wheelItems}
        rotation={rotation}
        isSpinning={isSpinning}
        onSpinClick={handleSpin}
      />

      {selectedItem && (
        <div className='text-center'>
          <p className='text-2xl font-bold text-green-500'>
            ¡{selectedItem.label} Play!
          </p>
        </div>
      )}
    </div>
  );
}

export default PlayerWheel;