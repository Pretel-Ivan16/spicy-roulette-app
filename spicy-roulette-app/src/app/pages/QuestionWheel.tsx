import React, { useState, useMemo, useCallback } from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import { usePlayers } from '../../hooks/usePlayers';
import QuestionCarousel from '../../components/wheel/QuestionCarousel';
import Title from '../../components/ui/Title';
import { QUESTIONS } from '../../data/questions';
import { useWheel } from '../../hooks/useWheel';

// Tonalidades de rojo picante (igual al carrusel)
const QUESTION_COLORS = [
  '#FF0000', // Rojo puro
  '#EE0000', // Rojo brillante
  '#DD0000', // Rojo oscuro
  '#CC0000', // Rojo profundo
  '#BB0000', // Rojo intenso
  '#FF1111', // Rojo claro
  '#FF3333', // Rojo más claro
  '#AA0000', // Rojo muy intenso
];

function QuestionWheel() {
  const { goToPlayerWheel } = useNavigation();
  const { selectedCategory } = usePlayers();
  const { isSpinning, spinWheel } = useWheel();
  const [hasSpun, setHasSpun] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);

  const filteredQuestions = selectedCategory
    ? QUESTIONS.filter(q => q.categoryID === selectedCategory.id)
    : QUESTIONS;

  const wheelItems = useMemo(() => 
    filteredQuestions.map((q, index) => ({
      id: q.id,
      label: q.text,
      color: QUESTION_COLORS[index % QUESTION_COLORS.length],
    })),
    [selectedCategory?.id]
  );

  const handleCarouselComplete = useCallback((selected: any) => {
    console.log('Pregunta seleccionada:', selected.label);
    setSelectedQuestion(selected);
    setHasSpun(true);
  }, []);

  const handleSpin = useCallback(() => {
    if (wheelItems.length === 0) return;
    setHasSpun(false);
    setSelectedQuestion(null);
    spinWheel(wheelItems, handleCarouselComplete);
  }, [wheelItems, handleCarouselComplete]);

  if (!selectedCategory) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen gap-8'>
        <Title title='No Category Selected' size='h2'/>
        <button
          onClick={goToPlayerWheel}
          className='px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700'
        >
          Back
        </button>
      </div>
    );
  }

  const getCardBgGradient = (color: string) => {
    return `linear-gradient(135deg, ${color}dd 0%, ${color}99 50%, ${color}44 100%)`;
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-8 px-4 overflow-x-hidden w-full'>
      <Title title={selectedCategory.name} size='h2'/>
      
      {!hasSpun ? (
        <QuestionCarousel
          items={wheelItems}
          isSpinning={isSpinning}
          onSpinClick={handleSpin}
          onComplete={handleCarouselComplete}
        />
      ) : (
        <div 
          className='w-full max-w-3xl p-8 rounded-xl border-4 shadow-2xl animate-pulse'
          style={{ 
            background: getCardBgGradient(selectedQuestion?.color),
            borderColor: selectedQuestion?.color 
          }}
        >
          <h3 className='text-2xl font-bold mb-4 text-white drop-shadow-lg'>Selected Question</h3>
          <p className='text-lg leading-relaxed text-white drop-shadow-lg'>
            {selectedQuestion?.label}
          </p>
        </div>
      )}

      {hasSpun && selectedQuestion && (
        <button
          onClick={goToPlayerWheel}
          className='px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all hover:scale-105'
        >
          Continue
        </button>
      )}
    </div>
  );
}

export default QuestionWheel;