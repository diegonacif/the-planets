import { BgVideo } from './components/BgVideo/BgVideo'
import { Header } from './components/Header/Header';
import { PlanetContainer } from './components/PlanetContainer/PlanetContainer';
import './App.scss'

export const App = () => {

  return (
    <div className="App">
      <BgVideo />
      <Header />
      <PlanetContainer />
    </div>
  )
}
