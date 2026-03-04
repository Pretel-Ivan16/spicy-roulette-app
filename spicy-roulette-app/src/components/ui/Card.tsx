import type { Player } from "../../types/player";

interface CardProps {
  player?: Player;
  category?: string;
  question?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

function Card({player, onClick, children, className}: CardProps) {
  return (
    <div className='m-4'>
      <section 
        className={`w-72 h-32 p-6 bg-linear-to-r from-[#d50000] to-[#ffa628] border-2 border-[#d50000] rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center ${className || ''}`}
        onClick={onClick}
      >
        <div className='flex flex-col items-center justify-center'>
          {player && <p className='text-2xl font-bold text-[#0f172a]'>{player.name}</p>}
          {children}
        </div>
      </section>
    </div>
  )
}

export default Card

