import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import InfoSection from '../components/InfoSection'
import InfoText from '../components/InfoText'
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
          <h1 color={'#a5e7ed'}>Tervetuloa!</h1>
          <p>Olen Anders Helenius, stand up -koomikko ja käsikirjoittaja. <br /><br />Kierrän Suomen stand up-klubeja ja teattereita kolmella kielellä (suomi, ruotsi ja englanti) jo lähes 20 vuoden kokemuksella.  Lisäksi toimin käsikirjoittajana, mm. Ylen Venla-palkitun “Noin Viikon Uutisten” ydin-tiimissä. <br /><br />Asun saariston pääkaupungissa Paraisilla ja minulla on neljä kouluikäistä lasta. </p>
        </InfoText>
      </InfoSection>
      <Footer>Anders Helenius 2018</Footer>
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