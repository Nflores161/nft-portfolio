import React from 'react'
import Background from '../images/DSC04123.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Nav, Image } from 'react-bootstrap'
import profilePic from '../images/nick.JPG'

const Home = (props) => {

  const leftArrow = <FontAwesomeIcon icon={faChevronLeft}/>
  const rightArrow = <FontAwesomeIcon icon={faChevronRight}/>

  return (
    <div style={{backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: "2em",
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'}}>
      
      <div style={{maxWidth: "95%", display: "flex", alignItems: "center",justifyContent: "center"}}>
      <Nav.Link to="/contact" as={Link}>    
        <h1 className="arrow"> {leftArrow} </h1>
      </Nav.Link>

      <div>
      <Image className="profileImage fade-in-name" src={profilePic} alt=""/>
      
        <div className="fade-in-hello" style={{display: "flex", flex: "wrap", textAlign: 'center', marginRight:"1em", marginLeft:"1em"}}>
          

          <div style={{border: "1px solid", backgroundColor: "black", padding: "4em",  borderRadius: "25px", opacity: "85%", boxShadow: "0px -10px 30px #ccc", maxWidth: "70%", marginLeft: "auto", marginRight: "auto"}}>
            <h1>Hi.  I'm <span className="fade-in-name" style={{color: "rgb(169, 98, 202)"}}><b>Nick F-T</b></span>, a full stack engineer, musician, lifetime learner and creative.</h1>
            <p>(click right arrow to learn more!)</p>
          </div>
        </div>

        </div> 
      <Nav.Link to="/about" as={Link}>
        <h1 className="arrow"> {rightArrow} </h1>
      </Nav.Link>
      </div>
    </div>
  )
}

export default Home