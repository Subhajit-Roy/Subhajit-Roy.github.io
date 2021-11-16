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
            <li>Probably the first database to be fully simulated with 5000 number of pdbids</li>
            <li>Not only Binding Affinity value is present but also other energetic component like polar and non-polar interaction, 
              Vander Wall's interaction, Electrostatic interactions.</li>
            <li>Our results showed good statistical correlation with the experimental results.</li>
            <li>We were approximately able to find the Binding Energy of the proteins-ligand complexes for which the experimental values
              were unknown, thereby supplementing the exesting dataset.
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
