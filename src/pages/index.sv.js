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
          <Welcome className="pulsate">Välkommen!</Welcome>
      <p>Jag är Anders Helenius, en finlandssvensk stand up -komiker och manusförfattare. <br /><br />Jag turnérar främst i Finland på finska, svenska och engelska, ibland också spontana gig i Sverige. Utöver det jobbar jag som manusförfattare, bl.a  för det Venla-belönta satirprogrammet ‘Närapå en veckas nyheter’.<br /><br />Jag bor i skärgårdens huvudstad Pargas, och har fyra barn i skolåldern.
    </p>
    </InfoText>
  </InfoSection>
  <Footer><p>&#9400; Anders Helenius 2018</p></Footer>
  </div>
  </Container>
)

export default IndexPage;

