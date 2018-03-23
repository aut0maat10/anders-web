import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import andersHero from '../assets/anders-hero-3-gradient.jpg'

const Container = styled.div`
  display: flex; 
  min-height: 100vh;
  flex-flow: row wrap;
`;

const Hero = styled.section`
  background-image: url(${andersHero});
  background-size: cover;
  background-postition: center; 
  margin: auto; 
  width: 100vh; 
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 100%;
  padding: 20px;
`;

const IndexPage = () => (
  <Container>
    <Hero>
      <h1>Hej hej</h1>
      <p>Välkomment till Gatsby.</p>
      <p>Testing testing.</p>
      <Link to="/sv/page-2/">Till sid 2</Link>
    </Hero>
  </Container>
)

export default IndexPage
