import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic07 from '../assets/images/pic07.jpg'

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>Right Sidebar - Landed by HTML5 UP</title>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>PLAS-5k: Supplementary Data</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>

        <section id="content">
          <a href="#" className="image fit">
            <img src={pic07} alt="" />
          </a>
          <h3>Dolore Amet Consequat</h3>
          <p>
            Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est.
            Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus
            justo. Cras vel neque eros. Vestibulum diam quam, mollis at magna
            consectetur non, malesuada quis augue. Morbi tincidunt pretium
            interdum est. Curabitur mi justo, tincidunt vel eros ullamcorper,
            porta cursus justo. Cras vel neque eros. Vestibulum diam cubilia
            adipiscing interdum aliquet aliquet placerat cubilia accumsan cep
            ante nullam adipiscing tortor odio. Iaculis adipiscing accumsan
            nascetur in cras. Lacinia placerat.
          </p>
          <p>
            Vestibulum diam quam, mollis at consectetur non, malesuada quis
            augue. Morbi tincidunt pretium interdum. Morbi mattis elementum
            orci, nec dictum porta cursus justo. Quisque ultricies lorem in
            ligula condimentum, et egestas turpis sagittis. Cras ac nunc urna.
            Nullam eget lobortis purus. Phasellus vitae tortor non est placerat
            tristique faucibus magna adipiscing aliquet blandit nisi dolor
            accumsan nascetur lorem. Vis enim. Curae. Mi arcu vis aliquam ipsum
            non accumsan ac mi faucibus amet eu accumsan erat interdum semper
            accumsan. Eu sagittis tellus accumsan neque lorem penatibus in
            porttitor. Vivamus commodo curae. Condimentum lobortis praesent id
            ac lorem. Lorem vis ipsum dolor feugiat consequat dolore adipiscing.
          </p>
          <h3>Sed Magna Ornare</h3>
          <p>
            In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in
            odio vulputate luctus. Suspendisse euismod lorem eget lacinia
            fringilla. Sed sed felis justo. Nunc sodales elit in laoreet
            aliquam. Nam gravida, nisl sit amet iaculis porttitor, risus nisi
            rutrum metus. In accumsan lorem nunc ultrices a ac eu accumsan ac id
            nullam. Nec lobortis. Faucibus. Mi commodo laoreet arcu at non mi
            lacinia aliquet non lobortis phasellus accumsan nascetur varius.
            Integer orci porttitor eu faucibus aliquet faucibus ac accumsan
            adipiscing accumsan odio. Ut adipiscing.
          </p>
          <ul>
            <li>Faucibus orci lobortis ac adipiscing integer.</li>
            <li>Col accumsan arcu mi aliquet placerat.</li>
            <li>Lobortis vestibulum ut magna tempor massa nascetur.</li>
            <li>Blandit massa non blandit tempor interdum.</li>
            <li>Lacinia mattis arcu nascetur lobortis.</li>
          </ul>
        </section>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
