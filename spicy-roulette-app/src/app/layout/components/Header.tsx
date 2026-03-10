import { useNavigate } from 'react-router-dom'
import Title from '../../../components/ui/Title'
import Logo from '../../../components/ui/Logo'
import ExitButton from '../../../components/ui/ExitButton'

interface HeaderProps {
  variant?: 'main' | 'game';
}

function Header({variant = 'main' }: HeaderProps) {
  const navigate = useNavigate()

  const handleTitleClick = () => {
    navigate('/')
  }

  return (
    <header className='flex justify-center items-center relative p-4 bg-linear-to-b from-[#d50000] to-[#ffa628]'>
      <div className='absolute left-0'>
        {variant === 'main' ? <Logo/> : <ExitButton/>}
      </div>
      <div onClick={handleTitleClick} className='cursor-pointer hover:opacity-80 transition-opacity'>
        <Title title='Spicy Roulette' size='h1' color='text-[#0f172a]'/>
      </div>
    </header>
  )
}

export default Header
