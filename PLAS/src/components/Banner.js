import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import { Link as ScrollLink } from 'react-scroll'
import './Banner.css'
// import { StaticImage } from 'gatsby-plugin-image'
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
          Binding affinity and other interaction energy components like Electrostatic, van der Waals, <br/> Polar and Non-polar solvation energies are included.
          <br /> <br/>
          All the data were derived using Molecular Dynamics Simulation.
        </p>
      </header>
      <span className="image">
        <img src={pic01} alt="intro"/>
        {/* <StaticImage src="pic01" alt='intro'/> */}
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
