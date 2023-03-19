import { FC, SetStateAction, useRef, useState } from "react"
import { GlobeHemisphereWest, Planet } from "@phosphor-icons/react";
import { useWindowSize } from '../../hooks/useWindowSize';
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";

interface IHeaderProps {
  currentPlanet: number ;
  setCurrentPlanet: React.Dispatch<SetStateAction<number>>;
}

export const Header:FC<IHeaderProps> = ({ currentPlanet, setCurrentPlanet }) => {
  const windowSize = useWindowSize();

  // Is Menu Open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Outside Click (Variable)
  const refContainer = useRef(null);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  }

  useOnClickOutside(refContainer, handleClickOutside)

  return (
    <div className="header-container" ref={refContainer}>
      <h1>THE PLANETS</h1>
      <div className="header-list" >
        {
          windowSize.width < 1024 ?
          <GlobeHemisphereWest size={40} weight="duotone" id="planet-icon" onClick={() => handleMenuOpen()} /> :
          <>
            <span 
              className={currentPlanet === 0 ? "selected mercury-selected" : ""} 
              onClick={() => setCurrentPlanet(0)}
            >
              Mercúrio
            </span>
            <span 
              className={currentPlanet === 1 ? "selected venus-selected" : ""} 
              onClick={() => setCurrentPlanet(1)}
            >
              Vênus
            </span>
            <span 
              className={currentPlanet === 2 ? "selected earth-selected" : ""} 
              onClick={() => setCurrentPlanet(2)}
            >
              Terra
            </span>
            <span 
              className={currentPlanet === 3 ? "selected mars-selected" : ""} 
              onClick={() => setCurrentPlanet(3)}
            >
              Marte
            </span>
            <span 
              className={currentPlanet === 4 ? "selected jupiter-selected" : ""} 
              onClick={() => setCurrentPlanet(4)}
            >
              Júpiter
            </span>
            <span 
              className={currentPlanet === 5 ? "selected saturn-selected" : ""} 
              onClick={() => setCurrentPlanet(5)}
            >
              Saturno
            </span>
            <span 
              className={currentPlanet === 6 ? "selected uranus-selected" : ""} 
              onClick={() => setCurrentPlanet(6)}
            >
              Urano
            </span>
            <span 
              className={currentPlanet === 7 ? "selected neptune-selected" : ""} 
              onClick={() => setCurrentPlanet(7)}
            >
              Netuno
            </span>
            <span 
              className={currentPlanet === 8 ? "selected pluto-selected" : ""} 
              onClick={() => setCurrentPlanet(8)}
            >
              Plutão
            </span>
          </>
        }
      </div>
      {
        isMenuOpen && windowSize.width < 1024 &&
        <div className="header-menu-wrapper">
          <HeaderMenu
            currentPlanet={currentPlanet} 
            setCurrentPlanet={setCurrentPlanet} 
          />
        </div>
      }
    </div>
  )
}
