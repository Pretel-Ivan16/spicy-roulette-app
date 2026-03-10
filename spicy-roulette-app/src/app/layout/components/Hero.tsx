import React from 'react'
import Card from '../../../components/ui/Card'
import Title from '../../../components/ui/Title'
import { useNavigation } from '../../../hooks/useNavigation'

function Hero() {
  const { goToPlayersForm } = useNavigation()

  return (
    <div className='w-full py-12'>
      <div className='mb-12 text-center'>
        <Title title='Select the players!' size='h2' color='bg-gradient-to-r from-[#d50000] to-[#ffa628] bg-clip-text text-transparent'/>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Card player={{id: '1', name: '2 Players'}} onClick={() => goToPlayersForm(2)}/>
        <Card player={{id: '2', name: '3 Players'}} onClick={() => goToPlayersForm(3)}/>
        <Card player={{id: '3', name: '4 Players'}} onClick={() => goToPlayersForm(4)}/>
        <Card player={{id: '4', name: '5 Players'}} onClick={() => goToPlayersForm(5)}/>
        <Card player={{id: '5', name: '6 Players'}} onClick={() => goToPlayersForm(6)}/>
        <Card player={{id: '6', name: '7 Players'}} onClick={() => goToPlayersForm(7)}/>
        <Card player={{id: '7', name: '8 Players'}} onClick={() => goToPlayersForm(8)}/>
      </div>
    </div>
  )
}

export default Hero
