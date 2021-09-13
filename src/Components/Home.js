import React from 'react'
import Background from '../images/DSC04123.jpg'
import Ticker from 'react-ticker'

const Home = () => {

  return (
    <div style={{backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'}}>

      

    {/* <Ticker>
      {({ index }) => (
          <>
              <h1 style={{color: "white", whiteSpace: "nowrap"}}>Welcome to Nick Flores-Tober's personal portfolio page.</h1><br></br>
              <img src="www.my-image-source.com/" alt=""/>
          </>
      )}
    </Ticker> */}

    </div>
  )
}

export default Home