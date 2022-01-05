import React from 'react'
import pic02 from '../assets/images/pic02.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${pic02})` }}
  >
    <span className="image fit main">
      <img src={pic02} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>How to access the Database</h2>
                <p>
                  PLAS-5k Database
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <h3>New User:</h3>
              <p>
                If your are a new user please go ahead and <Link to="/">sign up</Link> using your email and password or via 3rd party authenticator like Google, Facebook etc.
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <h3>Old User:</h3>
              <p>
                If you are a returning member no need to create a new account and simply login in the <Link to="/">authentication</Link> page.
                In case there are any error while signing up please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
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
export default One
