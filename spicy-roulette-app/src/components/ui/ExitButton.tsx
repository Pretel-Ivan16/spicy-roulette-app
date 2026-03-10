import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function ExitButton() {
  const navigate = useNavigate()
  const location = useLocation()

  // Flujo lineal de navegación
  const navigationFlow: Record<string, string> = {
    '/wheel/questions': '/wheel/categories',
    '/wheel/categories': '/wheel/players',
    '/wheel/players': '/players',
    '/players': '/',
  }

  const handleGoBack = () => {
    const nextPath = navigationFlow[location.pathname]
    if (nextPath) {
      navigate(nextPath)
    } else if (location.pathname === '/') {
      // Si está en home, no hace nada o recarga la página
      window.location.reload()
    }
  }

  return (
    <button
      onClick={handleGoBack}
      className='ml-2 text-[#0f172a] font-bold rounded-lg  transition-all duration-300 cursor-pointer'
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
      </svg>
    </button>
  )
}

export default ExitButton
