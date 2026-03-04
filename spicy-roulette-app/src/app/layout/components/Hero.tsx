import React from 'react'
import Card from '../../../components/ui/Card'
import Title from '../../../components/ui/Title'

function Hero() {
  return (
    <div className='w-full py-12'>
      <div className='mb-12 text-center'>
        <Title title='¡Selecciona los jugadores!' size='h2' color='bg-gradient-to-r from-[#d50000] to-[#ffa628] bg-clip-text text-transparent'/>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Card player={{id: '1', name: '2 Jugadores'}}/>
        <Card player={{id: '2', name: '3 Jugadores'}}/>
        <Card player={{id: '3', name: '4 Jugadores'}}/>
        <Card player={{id: '4', name: '5 Jugadores'}}/>
        <Card player={{id: '5', name: '6 Jugadores'}}/>
        <Card player={{id: '6', name: '7 Jugadores'}}/>
        <Card player={{id: '7', name: '8 Jugadores'}}/>
      </div>
    </div>
  )
}

export default Hero
