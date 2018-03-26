import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import InfoSection from '../components/InfoSection'
import InfoText from '../components/InfoText'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
//import Img from 'gatsby-image'
//import andersHero from '../images/header.jpg'


const Container = styled.div`
  display: flex; 
  min-height: 100vh;
  flex-flow: row wrap;
`;
//background-image: url(${andersHero });

const IndexPage = () => (
  <Container>

    <div>
      <InfoSection>
        <InfoText>
          <Welcome className="pulsate">Tervetuloa!</Welcome>
          <p>Olen Anders Helenius, stand up -koomikko ja käsikirjoittaja. <br /><br />Kierrän Suomen stand up-klubeja ja teattereita kolmella kielellä (suomi, ruotsi ja englanti) jo lähes 20 vuoden kokemuksella.  Lisäksi toimin käsikirjoittajana, mm. Ylen Venla-palkitun “Noin Viikon Uutisten” ydin-tiimissä. <br /><br />Asun saariston pääkaupungissa Paraisilla ja minulla on neljä kouluikäistä lasta. </p>
        </InfoText>
      </InfoSection>
      <Footer><p>&#9400; Anders Helenius 2018</p></Footer>
    </div>
  </Container>
)

export default IndexPage;

// import React from 'react'
// import Link from 'gatsby-link'

// const IndexPage = () => (
//   <div>
//     <h1>Moi ihmiset</h1>
//     <p>Tervetuloa.</p>
//     <p>Testing, testing....</p>
//     <Link to="/fi/page-2/">Sivulle 2</Link>
//   </div>
// )

// export default IndexPage