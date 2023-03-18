import { FC, SetStateAction } from "react"
import { Planet } from "@phosphor-icons/react";
import { useWindowSize } from '../../hooks/useWindowSize';

interface IHeaderProps {
  currentPlanet: number ;
  setCurrentPlanet: React.Dispatch<SetStateAction<number>>;
}

export const Header:FC<IHeaderProps> = ({ currentPlanet, setCurrentPlanet }) => {
  console.log(useWindowSize());
  
  return (
    <div className="header-container">
      <h1>THE PLANETS</h1>
      <div className="header-list">
        <Planet size={36} weight="fill" />
        <span 
          className={currentPlanet === 0 ? "selected" : ""} 
          onClick={() => setCurrentPlanet(0)}
        >
          Mercúrio
        </span>
        <span 
          className={currentPlanet === 1 ? "selected" : ""} 
          onClick={() => setCurrentPlanet(1)}
        >
          Vênus
        </span>
        <span 
          className={currentPlanet === 2 ? "selected" : ""} 
          onClick={() => setCurrentPlanet(2)}
        >
          Terra
        </span>
        <span 
          className={currentPlanet === 3 ? "selected" : ""} 
          onClick={() => setCurrentPlanet(3)}
        >
          Marte
        </span>
        <span 
          className={currentPlanet === 4 ? "selected" : ""} 
          onClick={() => setCurrentPlanet(4)}
        >
          Júpiter
        </span>
        <span 
          className={currentPlanet === 5 ? "selected" : ""} 
          onClick={() => setCurrentPlanet(5)}
        >
          Saturno
        </span>
        <span 
          className={currentPlanet === 6 ? "selected" : ""} 
          onClick={() => setCurrentPlanet(6)}
        >
          Urano
        </span>
        <span 
          className={currentPlanet === 7 ? "selected" : ""} 
          onClick={() => setCurrentPlanet(7)}
        >
          Netuno
        </span>
        <span 
          className={currentPlanet === 8 ? "selected" : ""} 
          onClick={() => setCurrentPlanet(8)}
        >
          Plutão
        </span>
      </div>
    </div>
  )
}
