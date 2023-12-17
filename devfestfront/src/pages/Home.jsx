import React from 'react'
import { Container, Row, Col } from "reactstrap"

import "../styles/home.css"
function Home() {
  return (
    <>
    <div className="heroSection">
      <div className="Shadow">
        <p className="hero__text animate-bounce">
          Nomber of Donators : 1.000.000
        </p>
        <button className="home__btn">Explorer détails</button>
      </div>
    </div>


    </>
  )
}

export default Home