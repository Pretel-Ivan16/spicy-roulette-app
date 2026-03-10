import { useState } from 'react';

export interface WheelItem {
  id: string;
  label: string;
  color?: string;
}

export function useWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState<WheelItem | null>(null);
  const [rotation, setRotation] = useState(0);

  const spinWheel = (items: WheelItem[], onComplete?: (item: WheelItem) => void) => {
    if (isSpinning || items.length === 0) return;

    setIsSpinning(true);

    // Duración de la animación
    const spinDuration = 2000; // 2 segundos
    const extraSpins = 5; // Vueltas completas antes de detenerse
    
    // Seleccionar índice aleatorio
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItemData = items[randomIndex];
    
    // Calcular ángulo por segmento
    const segmentAngle = 360 / items.length;
    
    // Rotación final: vueltas completas + posición del centro del segmento
    // Sumar 0.5 para apuntar al CENTRO del segmento, no al borde
    const finalRotation = (extraSpins * 360) - ((randomIndex + 0.5) * segmentAngle);
    
    setRotation(finalRotation);

    setTimeout(() => {
      setSelectedItem(selectedItemData);
      setIsSpinning(false);
      if (onComplete) {
        onComplete(selectedItemData);
      }
    }, spinDuration);
  };

  const reset = () => {
    setSelectedItem(null);
    setIsSpinning(false);
  };

  return {
    isSpinning,
    selectedItem,
    rotation,
    spinWheel,
    reset,
  };
}