import { BgVideo } from './components/BgVideo/BgVideo'
import { Header } from './components/Header/Header';
import { PlanetContainer } from './components/PlanetContainer/PlanetContainer';
import { planetsData } from './services/planetsData';
import './App.scss'

export const App = () => {

  const planet = planetsData[2]

  return (
    <div className="App">
      <BgVideo />
      <Header />
      <PlanetContainer {...planet} />
    </div>
  )
}
