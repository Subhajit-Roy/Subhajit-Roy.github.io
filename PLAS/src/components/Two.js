import React from 'react'
import pic03 from '../assets/images/pic03.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'

const Two = props => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${pic03})` }}
  >
    <span className="image fit main">
      <img src={pic03} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>Advantages of the PLAS-5k Dataset</h2>
          {/* <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p> */}
        </header>
        <p>
          <ul>
            <li>One of the first database with 5000 protein-ligand complexes generated using Molecular Dynamics simulation.</li>
            <li>It also consists of energy components like van der Waals, Electrostatic, Polar, Non-polar solvational energy.</li>
            <li>Our results showed good statistical correlation with the experimental results.</li>
            <li>We were approximately able to find the binding affinity of the protein-ligand complexes for which the experimental values
              were unknown, thereby supplementing the existing dataset.
            </li>
            

          </ul>
        </p>
        <ul className="actions">
          <li>
            <Link href="/" className="button">
              Learn More
            </Link>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="three"
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
)

export default Two
