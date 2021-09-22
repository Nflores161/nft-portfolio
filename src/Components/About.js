import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Devpng from '../images/developerpngicon.png'


const About = (props) => {

  const leftArrow = <FontAwesomeIcon icon={faChevronLeft}/>
  const rightArrow = <FontAwesomeIcon icon={faChevronRight}/>

  return (
    <div 
    style={{
    //   backgroundImage: `url("")`, backgroundPosition: 'center', backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
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
            
          <span style={{color: "rgb(169, 98, 202)", fontSize: "2em", marginBottom:"1em", marginTop:"15em" }} className="fade-in-hello">Development with a creative approach.
          </span>
            <br></br>
          <div className="stage"> 
            <img src={Devpng} alt="dev icon" className="fade-in-hello head bounce-7" style={{height:"15em", width:"15em", marginBottom:"3em"}}/>
          </div> 
        <div>
        {/* <span style={{color: "rgb(169, 98, 202)", fontSize: "1.7em"}}>A developer with a creative drive and passion for design.</span>
        <br></br> */}
        <p>
        Coming from a background in creative merchandising and marketing management, my operational approach to development by means of aesthetic delineation transcends from the front end to the back end.
        {/* , 
        with usability and functionality at the forefront,  */}
      </p>
      <hr style={{marginTop:"3em"}}></hr>

     
      
      <div style={{display: "flex", flexDirection:"column", justifyContent: "space-evenly"}}>
          <div style={{color: "rgb(169, 98, 202)", fontSize: "2em", marginBottom:"1em", marginTop: "1em"}} className="fade-in-hello">
            Experience with an <span className="array-color">[array]</span> of languages...
          </div>
          
          <div>
            <img className="code-lang" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react logo"
            />
          </div>
          <div style={{marginTop:"1em"}}>  
            <img style={{marginRight:"3em"}} className="code-lang" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html logo" 
            />
            <img style={{marginLeft:"3em"}} className="code-lang" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="css logo" 
            />
          </div>
          <div style={{marginTop:"1.5em"}}>  
            <img style={{marginRight:"1em"}} className="code-lang" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" 
            alt="ruby logo"
            />
            <img  style={{marginRight:"2em", marginLeft:"2em"}} className="code-lang" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
            alt="javascript logo"
            />
            <img style={{marginLeft:"1em"}} className="code-lang"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
            alt="postgreSQL logo"
            />
          </div>
          <div style={{marginTop:"1.5em"}}>  
            <img style={{marginRight:"3em"}} className="code-lang" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" 
            alt="rails logo"
            />
            <img style={{marginLeft:"3em"}} className="code-lang" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
            alt="bootstrap logo"
            />
          </div>  
          <div style={{marginTop:"1em"}}>
            <img className="code-lang" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
            alt="rails logo"/>
          </div>
        </div>
        <hr style={{marginTop:"3em"}}></hr>
      </div>
    </div>
      <Nav.Link to="/portfolio" as={Link}>
        <h1 className="arrow"> {rightArrow} </h1>
      </Nav.Link>
    
    
    </div>
  </div>
  )
}

export default About

