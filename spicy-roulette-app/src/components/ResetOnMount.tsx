import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Componente que navega a Home cuando la página se recarga
 */
function ResetOnMount() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Limpiar sessionStorage para que sepa que es una recarga
      sessionStorage.setItem('isReload', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Si detecta que fue una recarga, ir a Home
    if (sessionStorage.getItem('isReload') === 'true') {
      sessionStorage.removeItem('isReload');
      navigate('/');
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate]);

  return null;
}

export default ResetOnMount;
