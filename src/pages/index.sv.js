import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import InfoSection from '../components/InfoSection'
import InfoText from '../components/InfoText'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import Card from '../components/Card'
import ReadMore from '../components/ReadMore'
import ReadMoreWrapper from '../components/ReadMoreWrapper'
import { SocialIcon } from 'react-social-icons'
import { SocialIcons } from 'react-social-icons'

const urls = [
  'mailto:anders.helenius@gmail.com',
  'http://www.facebook.com/andershelenius',
  'http://twitter.com/andershelenius',
  'http://instagram.com/andershelenius'
];

//import Img from 'gatsby-image'
//import andersHero from '../images/header.jpg'

const Container = styled.div`
  display: flex; 
  min-height: 100vh;
  flex-flow: row wrap;
`;

const SocIconWrapper = styled.div`
  display: flex;
  background-color: #f4f4f4; 
  padding-bottom: 40px; 
  margin: auto; 
  justify-content: center; 
`;
//background-image: url(${andersHero });

const IndexPage = () => (
 <Container>
  <div>
  <InfoSection>
    <InfoText>
      <Welcome className="pulsate">Jag är Anders.<br />Jag gör stand up på finska, svenska och engelska. Jag jobbar som manusförfattare för det Venla-belönta satirprogrammet "Närapå en veckas nyheter". Jag bor i skärgårdens huvudstad Pargas, och har fyra barn i skolåldern.</Welcome>
    </InfoText>
        </InfoSection>
        <ReadMoreWrapper>
          <ReadMore>Mer om vad jag gör:</ReadMore>
        </ReadMoreWrapper>
      <Card />
      <SocIconWrapper>
        <SocialIcons urls={urls} className="sm" color={'#A06085'} />
      </SocIconWrapper>
      <Footer><p>&#9400; Anders Helenius 2018</p></Footer>
    </div>
  </Container>
)

export default IndexPage;

