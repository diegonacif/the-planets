import { useState } from 'react';
import { BgVideo } from './components/BgVideo/BgVideo'
import { Header } from './components/Header/Header';
import { PlanetContainer } from './components/PlanetContainer/PlanetContainer';
import { planetsData } from './services/planetsData';
import './App.scss'
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';

export const App = () => {
  const [currentPlanet, setCurrentPlanet] = useState<number>(2);
  const [currentMenu, setCurrentMenu] = useState<string>('general');
  const planet = planetsData[currentPlanet]

  return (
    <div className="App">
      <BgVideo />
      <Header 
        currentPlanet={currentPlanet} 
        setCurrentPlanet={setCurrentPlanet} 
      />
      <HeaderMenu
        currentPlanet={currentPlanet} 
        setCurrentPlanet={setCurrentPlanet} 
      />
      <PlanetContainer 
        {...planet} 
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
      />
    </div>
  )
}
