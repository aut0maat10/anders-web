import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import InfoSection from '../components/InfoSection'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import InfoText from '../components/InfoText'
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
          <Welcome className="pulsate">Welcome!</Welcome>
          <p>I am Anders Helenius, a comedian and screenwriter from Finland.<br /><br /> I mostly tour Finnish comedy clubs in Finnish, Swedish and English. You heard it right, trilingual baby! At the moment I write news satire for Finnish television, a show called Noin Viikon Uutiset, a live on tape news-satire show.<br /><br /> I live in the capital of the finnish archipelago, a small town called Pargas. I have four kids.
</p>
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
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/en/page-2/">Go to page 2</Link>
//   </div>
// )

// export default IndexPage
