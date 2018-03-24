import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'
//import Img from 'gatsby-image'
//import andersHero from '../images/header.jpg'


const Container = styled.div`
  display: flex; 
  min-height: 100vh;
  flex-flow: row wrap;
`;
//background-image: url(${andersHero });

const InfoText = styled.div`
  color: #a5e7ed;
  font-weight: 700;
  font-size: 28px;
  display: flex;
  flex-direction: column; 
  padding: 50px; 
  align-items: center;
  justify-content: center; 
  //max-width: 960px;  
`;

const IndexPage = () => (
  <Container>

    <div>
      <InfoSection>
        <InfoText>
          <h1 color={'#a5e7ed'}>Lorem Ipsum</h1>
          <p>Wolf craft beer YOLO, typewriter salvia fam quinoa bushwick occupy godard. Deep v authentic jean shorts humblebrag gastropub distillery quinoa asymmetrical aesthetic williamsburg activated charcoal hammock gentrify direct trade cred. Artisan adaptogen blog man braid leggings skateboard yr sustainable VHS typewriter roof party glossier mustache viral hell of. Meggings williamsburg intelligentsia kale chips helvetica sustainable venmo vinyl chia. Slow-carb stumptown bitters, farm-to-table thundercats tousled banh mi tilde woke chillwave.</p>
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
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/en/page-2/">Go to page 2</Link>
//   </div>
// )

// export default IndexPage
