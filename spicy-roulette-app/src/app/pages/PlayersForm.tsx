import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigation } from '../../hooks/useNavigation';
import { usePlayers } from '../../hooks/usePlayers';
import type { Player } from '../../types/player';

function PlayersForm() {
  const [searchParams] = useSearchParams();
  const count = Number(searchParams.get('count')) || 0;
  const { goToPlayerWheel } = useNavigation();
  const {setPlayers} = usePlayers();
  const [names, setNames] = useState<string[]>(Array(count).fill(''));
  const [errors, setErrors] = useState<string[]>([]);

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...names]
    newNames[index] = value;
    setNames(newNames);
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    names.forEach((name, index) => {
      if (!name.trim()){
        newErrors[index] = 'The name cannot be empty'
      }
    });
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const players: Player[] = names.map((name, index) => ({
      id: `player-${index}`,
      name: name.trim(),
    }));

    setPlayers(players);
    goToPlayerWheel();
  }

  return (
    <form onSubmit={handleSumbit} className='w-full max-w-2xl'>
      <div className='bg-linear-to-r from-[#d50000] to-[#ffa628] rounded-xl p-0.5'>
        <div className='bg-linear-to-br from-[#030712] via-[#0f172a] to-[#030712] rounded-xl p-8 shadow-2xl backdrop-blur-sm'>
          <h2 className='text-4xl font-bold mb-8 text-center bg-linear-to-r from-[#d50000] to-[#ffa628] bg-clip-text text-transparent'>
            Enter the names!
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            {names.map((name, index) => (
              <div key={index} className='flex flex-col'>
                <label className='block text-sm font-bold mb-3 text-[#ffa628] uppercase tracking-wider'>
                  Player {index + 1}
                </label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                  className='px-4 py-3 bg-[#0f172a]/60 border-2 border-[#d50000]/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d50000] focus:ring-2 focus:ring-[#d50000]/50 transition-all duration-300'
                  placeholder={`Name Player ${index + 1}`}
                />
                {errors[index] && (
                  <p className='text-[#ffa628] text-sm mt-2 font-semibold'>{errors[index]}</p>
                )}
              </div>
            ))}
          </div>

          <button
            type='submit'
            className='w-full bg-linear-to-r from-[#d50000] to-[#ffa628] text-[#0f172a] py-3 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d50000]/50 hover:scale-105 transition-all duration-300 border-2 border-[#ffa628]'
          >
            Start the game
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlayersForm
