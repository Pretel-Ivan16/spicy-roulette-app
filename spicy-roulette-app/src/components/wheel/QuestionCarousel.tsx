import React, { useEffect, useState, useRef } from 'react';
import type { WheelItem } from '../../hooks/useWheel';

// Tonalidades de rojo picante
const CAROUSEL_COLORS = [
  '#FF0000', // Rojo puro
  '#EE0000', // Rojo brillante
  '#DD0000', // Rojo oscuro
  '#CC0000', // Rojo profundo
  '#BB0000', // Rojo intenso
  '#FF1111', // Rojo claro
  '#FF3333', // Rojo más claro
  '#AA0000', // Rojo muy intenso
];

interface QuestionCarouselProps {
  items: WheelItem[];
  isSpinning: boolean;
  onSpinClick: () => void;
  onComplete?: (item: WheelItem) => void;
}

function QuestionCarousel({
  items,
  isSpinning,
  onSpinClick,
  onComplete,
}: QuestionCarouselProps) {
  const [selectedItem, setSelectedItem] = useState<WheelItem | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const [animationState, setAnimationState] = useState<'idle' | 'spinning' | 'stopped'>('idle');

  // Crear muchas copias para la animación fluida (30 copias)
  const extendedItems = Array(30)
    .fill(null)
    .flatMap(() => items);

  const CARD_WIDTH = 272; // w-64 = 256px + gap-4 = 16px
  const GAP = 16;
  const VISIBLE_WIDTH = CARD_WIDTH + GAP;

  const getCardColor = (index: number) => {
    return CAROUSEL_COLORS[index % CAROUSEL_COLORS.length];
  };

  const getCardBgGradient = (color: string) => {
    // Crear gradientes dinámicos basados en el color
    return `linear-gradient(135deg, ${color}dd 0%, ${color}99 50%, ${color}44 100%)`;
  };

  useEffect(() => {
    if (!isSpinning) {
      // Si justo terminó la animación, mostrar el item seleccionado
      if (animationState === 'spinning' && selectedItem) {
        setAnimationState('stopped');
        if (onComplete) {
          onComplete(selectedItem);
        }
      }
      return;
    }

    setAnimationState('spinning');
    setSelectedItem(null);
    setTranslateX(0);

    // Elegir índice aleatorio
    const randomIndex = Math.floor(Math.random() * items.length);
    const selected = items[randomIndex];
    setSelectedItem(selected);

    // Calcular la distancia a recorrer
    const fullRotations = 3;
    const totalCards = items.length;
    const distancePerCard = VISIBLE_WIDTH;
    const totalDistance = (fullRotations * totalCards * distancePerCard) + (randomIndex * distancePerCard);

    // Animar durante 2 segundos (sincronizado con useWheel)
    const spinDuration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / spinDuration, 1);

      // Easing function: ease-out cúbico para frenada más gradual
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentDistance = totalDistance * easeProgress;

      setTranslateX(-currentDistance);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isSpinning, items, items.length, onComplete]);

  return (
    <div className="flex flex-col items-center gap-8 w-full overflow-x-hidden">
      {/* Carrusel Container */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg" style={{ perspective: '1000px' }}>
        {/* Gradient overlays para efecto de "focus" */}
        <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-transparent to-transparent z-10 pointer-events-none" />

        {/* Center indicator (línea roja central) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-600 z-20 pointer-events-none transform -translate-x-1/2" />

        {/* Carrusel track con animación */}
        <div
          className="flex gap-4 h-full items-center px-8 transition-none will-change-transform"
          style={{
            transform: `translate3d(${translateX}px, 0, 0)`,
            width: 'fit-content',
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          {extendedItems.map((item, index) => {
            const cardColor = getCardColor(index % items.length);
            const bgGradient = getCardBgGradient(cardColor);
            
            return (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 w-64 h-80 flex items-center justify-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div 
                  className="w-full h-full p-6 rounded-xl shadow-xl border-4 flex items-center justify-center hover:shadow-2xl transition-shadow"
                  style={{
                    background: bgGradient,
                    borderColor: cardColor,
                  }}
                >
                  <p className="text-center text-base font-bold text-white leading-relaxed drop-shadow-lg">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={onSpinClick}
        disabled={isSpinning}
        className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-lg"
      >
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
    </div>
  );
}

export default QuestionCarousel;
