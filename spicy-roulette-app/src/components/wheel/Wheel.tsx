import React from 'react';
import type { WheelItem } from '../../hooks/useWheel';
import WheelItemComponent from './WheelItem';

interface WheelProps {
  items: WheelItem[];
  rotation?: number;
  isSpinning: boolean;
  onSpinClick: () => void;
}

function Wheel({ items, rotation = 0, isSpinning, onSpinClick }: WheelProps) {
  const segmentAngle = 360 / items.length;

  return (
    <div className='flex flex-col items-center gap-8'>
      <div className='relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96'>
        <div
          className='w-full h-full rounded-full border-4 md:border-6 lg:border-8 border-gray-800 transition-transform duration-[2s] ease-out'
          style={{
            transform: `rotate(${rotation}deg)`,
            background: 'conic-gradient(' +
              items.map((item, i) => `${item.color} ${segmentAngle * i}deg ${segmentAngle * (i + 1)}deg`).join(', ') +
              ')',
          }}
        >
          {items.map((item, index) => (
            <WheelItemComponent
              key={item.id}
              item={item}
              index={index}
              totalItems={items.length}
            />
          ))}
        </div>

        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-6 border-r-6 border-t-12 border-l-transparent border-r-transparent border-t-red-600' />
      </div>

      <button
        onClick={onSpinClick}
        disabled={isSpinning}
        className='px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
    </div>
  );
}

export default Wheel;