import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import { LandingPage } from "./pages/LandingPage"
import { SingleCharacter } from "./pages/SingleCharacter"
import { Character } from './components/Character'
import { CharacterList } from './components/CharacterList'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<LandingPage />} />
        <Route path='/character/characterId' element={<SingleCharacter />} />
      
      </Routes>
    </BrowserRouter>
  )
}


