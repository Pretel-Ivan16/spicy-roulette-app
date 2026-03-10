import React from 'react';
import type { WheelItem } from '../../hooks/useWheel';

interface WheelItemProps {
  item: WheelItem;
  index: number;
  totalItems: number;
}

function WheelItemComponent({ item, index, totalItems }: WheelItemProps) {
  const angle = (360 / totalItems) * index + 360 / totalItems / 2;
  const radius = 65; // Reducido de 130 para mobile
  const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
  const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

  return (
    <div
      className='absolute w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center font-bold text-xs md:text-sm lg:text-sm text-center'
      style={{
        transform: `translate(${x}px, ${y}px)`,
        left: '50%',
        top: '50%',
        marginLeft: '-24px',
        marginTop: '-24px',
      }}
    >
      {item.label}
    </div>
  );
}

export default WheelItemComponent;