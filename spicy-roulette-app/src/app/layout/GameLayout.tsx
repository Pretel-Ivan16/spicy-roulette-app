import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function GameLayout() {
  return (
    <div className='min-h-screen bg-linear-to-br from-[#030712] via-[#0f172a] to-[#030712]'>
      <header className='bg-linear-to-r from-[#0f172a]/80 to-[#1e293b]/80 backdrop-blur-md'>
        <Header variant="game"/>
      </header>
      <main className='flex flex-col items-center justify-center px-4 py-12 bg-linear-to-b from-[#10b981]/5 via-transparent to-transparent'>
        <Outlet/>
      </main>
    </div>
  )
}

export default GameLayout
