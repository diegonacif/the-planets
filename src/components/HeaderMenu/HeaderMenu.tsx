import { Planet } from "@phosphor-icons/react";
import { FC, SetStateAction } from "react"

interface IHeaderMenuProps {
  currentPlanet: number ;
  setCurrentPlanet: React.Dispatch<SetStateAction<number>>;
}

export const HeaderMenu:FC<IHeaderMenuProps> = ({ currentPlanet, setCurrentPlanet }) => {
  return (
    <div className="header-menu-container">
      <div className="header-list">
        <div className="header-list-row">
          <Planet size={16} weight="fill" className={currentPlanet === 0 ? "mercury-selected" : ""} />
          <span 
            className={currentPlanet === 0 ? "selected" : ""} 
            onClick={() => setCurrentPlanet(0)}
          >
            Mercúrio
          </span>
        </div>
        <div className="header-list-row">
          <Planet size={16} weight="fill" className={currentPlanet === 1 ? "venus-selected" : ""} />
          <span 
            className={currentPlanet === 1 ? "selected" : ""} 
            onClick={() => setCurrentPlanet(1)}
          >
            Vênus
          </span>
        </div>
        <div className="header-list-row">
          <Planet size={16} weight="fill" className={currentPlanet === 2 ? "earth-selected" : ""} />
          <span 
            className={currentPlanet === 2 ? "selected" : ""} 
            onClick={() => setCurrentPlanet(2)}
          >
            Terra
          </span>
        </div>
        <div className="header-list-row">
          <Planet size={16} weight="fill" className={currentPlanet === 3 ? "mars-selected" : ""} />
          <span 
            className={currentPlanet === 3 ? "selected" : ""} 
            onClick={() => setCurrentPlanet(3)}
          >
            Marte
          </span>
        </div>
        <div className="header-list-row">
          <Planet size={16} weight="fill" className={currentPlanet === 4 ? "jupiter-selected" : ""} />
          <span 
            className={currentPlanet === 4 ? "selected" : ""} 
            onClick={() => setCurrentPlanet(4)}
          >
            Júpiter
          </span>
        </div>
        <div className="header-list-row">
          <Planet size={16} weight="fill" className={currentPlanet === 5 ? "saturn-selected" : ""} />
          <span 
            className={currentPlanet === 5 ? "selected" : ""} 
            onClick={() => setCurrentPlanet(5)}
          >
            Saturno
          </span>
        </div>
        <div className="header-list-row">
          <Planet size={16} weight="fill" className={currentPlanet === 6 ? "uranus-selected" : ""} />
          <span 
            className={currentPlanet === 6 ? "selected" : ""} 
            onClick={() => setCurrentPlanet(6)}
          >
            Urano
          </span>
        </div>
        <div className="header-list-row">
          <Planet size={16} weight="fill" className={currentPlanet === 7 ? "neptune-selected" : ""} />
          <span 
            className={currentPlanet === 7 ? "selected" : ""} 
            onClick={() => setCurrentPlanet(7)}
          >
            Netuno
          </span>
        </div>
        <div className="header-list-row">
          <Planet size={16} weight="fill" className={currentPlanet === 8 ? "pluto-selected" : ""} />
          <span 
            className={currentPlanet === 8 ? "selected" : ""} 
            onClick={() => setCurrentPlanet(8)}
          >
            Plutão
          </span>
        </div>
      </div>
    </div>
  )
}
