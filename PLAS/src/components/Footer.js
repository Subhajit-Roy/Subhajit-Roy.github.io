import React from 'react'

const Footer = props => (
  <footer id="footer">
    <ul className="icons">
      <li>
        <a href="/" className="icon brands alt fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="/" className="icon brands alt fa-facebook-f">
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="/" className="icon brands alt fa-linkedin-in">
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="/" className="icon brands alt fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="/" className="icon brands alt fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a href="/" className="icon solid alt fa-envelope">
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li><a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>&copy; CC BY-NC-SA</a></li>
      <li>
        Made with: <a href="https://www.gatsbyjs.com/">Gatsby JS</a>
      </li>
      <li>
        Hosted on: <a href="https://guides.github.com/features/pages/">Github Pages</a>
      </li>
    </ul>
  </footer>
)

export default Footer
