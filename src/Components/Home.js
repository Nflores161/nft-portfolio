import React from 'react'
import Background from '../images/DSC04123.jpg'
// import Ticker from 'react-ticker'
import Navigation from "../Navigation";

const Home = (props) => {

  return (
    <div>
    {/* <Navigation/>   */}
    <div style={{backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'}}>

    <div style={{display: "flex", maxWidth: '80%', textAlign: 'center', justifyContent: "space-between"}}>
      <div style={{border: "2px solid white", backgroundColor: "black"}}>
        <h2>Hi, I'm Nick F-T and I'm a full stack engineer.<br></br> Welcome to my portfolio page.</h2>
        <p>I'm a full stack developer with a creative drive and passion for design. Coming from a background in creative merchandising and marketing management, my approach to creating with usability and functionality completely transcend from the front end to the back end.</p>
      </div>
      <div style={{border: "2px solid white", backgroundColor: "black"}}>
        <p>Photo of myself here</p>
      </div>
    </div>

    {/* <Ticker>
      {({ index }) => (
          <>
              <h1 style={{color: "white", whiteSpace: "nowrap"}}>Welcome to Nick Flores-Tober's personal portfolio page.</h1><br></br>
              <img src="www.my-image-source.com/" alt=""/>
          </>
      )}
    </Ticker> */}

    </div>
    </div>
  )
}

export default Home