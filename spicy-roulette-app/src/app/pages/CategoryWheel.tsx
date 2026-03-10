import React from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import { usePlayers } from '../../hooks/usePlayers';
import Title from '../../components/ui/Title';
import { CATEGORIES } from '../../data/categories';

function CategoryWheel() {
  const { goToQuestionWheel } = useNavigation();
  const { setSelectedCategory } = usePlayers();

  const handleSelectCategory = (category: typeof CATEGORIES[0]) => {
    setSelectedCategory(category);
    goToQuestionWheel();
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-8'>
      <style>{`
        @keyframes spicy-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(213, 0, 0, 0.4); }
          50% { text-shadow: 0 0 20px rgba(255, 166, 40, 0.6); }
        }
        .spicy-title {
          animation: spicy-glow 2.5s ease-in-out infinite;
        }
      `}</style>
      
      <div className='spicy-title'>
        <Title title='Choose a Category' size='h2' color='bg-gradient-to-r from-[#d50000] to-[#ffa628] bg-clip-text text-transparent'/>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4'>
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => handleSelectCategory(category)}
            className='p-8 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-110 active:scale-95 uppercase tracking-wide shadow-lg hover:shadow-2xl relative overflow-hidden'
            style={{
              background: `linear-gradient(135deg, #d50000, #ff4500)`,
              border: '2px solid #ffa628',
              color: '#1e3a8a',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 25px rgba(255, 166, 40, 0.6)`;
              e.currentTarget.style.borderColor = '#ffa628';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = '#ffa628';
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryWheel;