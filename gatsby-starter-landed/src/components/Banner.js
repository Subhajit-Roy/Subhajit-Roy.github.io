import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import { Link as ScrollLink } from 'react-scroll'
import './Banner.css'
const Banner = props => (
  <div className="ultimate"
    style={{
      backgroundColor: 'rgba(0,0,0,0.89)',
      color: 'rgba(0,0,0,0.89)'
    }}>
  <section id="banner" 
    style={{
      backgroundColor: 'rgba(0, 0, 0, 1)',
    }}>
    <div className="content"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 50,
      }} >
      <header>
        <h2>PLAS-5k</h2>
        <p>
          5000 pdbids with their binding affinity and other data included.
          <br />
          All the datas were derived by using Molecular Dynamics Simulation.
        </p>
      </header>
      <span className="image">
        <img src={pic01} alt="intro"/>
      </span>
    </div>
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
  </div>
)

export default Banner
