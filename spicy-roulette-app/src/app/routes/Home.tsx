import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/cards/Card';
import Title from '../../components/ui/Title';
import PlayerCountForm from '../../components/forms/PlayerCountForm';

export default function Home(){
  const navigate = useNavigate();

  function handleSelect(count: number){
    navigate("/players", {
      state: {playersCount: count}
    });
  }

  return (
    <main>
      <Card>
        <Title></Title>
        <PlayerCountForm onSelect={handleSelect}/>
      </Card>
    </main>
  )
}