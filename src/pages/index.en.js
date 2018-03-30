import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
//import { FormattedMessage } from 'react-intl'
import InfoSection from '../components/InfoSection'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import InfoText from '../components/InfoText'
//import Carousel from '../components/Carousel'
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
          <Welcome className="pulsate">I'm Anders. <br />I write news satire for Finnish national TV. <br />I perform in Finnish, Swedish, and English.<br />I live in Pargas, the capital of the Finnish archipelago. I have four kids.
          </Welcome>
        </InfoText>
      </InfoSection>
      <ReadMoreWrapper>
        <ReadMore>More about what I do:</ReadMore>
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

// import React from 'react'
// import Link from 'gatsby-link'

// const IndexPage = () => (
//   <div>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/en/page-2/">Go to page 2</Link>
//   </div>
// )

// export default IndexPage
