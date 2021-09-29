import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import PortfolioCard from './PortfolioCard'


const Portfolio = () => {

  const leftArrow = <FontAwesomeIcon icon={faChevronLeft}/>
  const rightArrow = <FontAwesomeIcon icon={faChevronRight}/>

  return (
    <div style={{
      width: '100vw',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column'}}>

    <div style={{maxWidth: "90%", display: "flex", alignItems: "center", textAlign:"center", marginTop:"5em"}}>
        <Nav.Link to="/home" as={Link}>    
          <h1 className="arrow"> {leftArrow} </h1>
        </Nav.Link>

        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", overflowY: "scroll", maxHeight:"90vh", marginRight:"1em", marginLeft:"1em",
          marginTop:"1em"
          }}>
          <PortfolioCard/>
        </div>
        <Nav.Link to="/portfolio" as={Link}>
          <h1 className="arrow"> {rightArrow} </h1>
        </Nav.Link>
      </div>
    </div>
  )
}

export default Portfolio