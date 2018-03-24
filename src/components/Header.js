import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import SelectLanguage from './SelectLanguage'
import andersHero from '../images/header.jpg'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

const mainColor = '#272727'
const secondaryColor = '#272727'

const Background = styled.div`
  background-image: url(${andersHero});
  background-size: cover;
  //background-postition: center; 
  
  //width: 100vh; 
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 100%;
  padding: 20px;
`;

const Title = styled.h1`
  font-family: Rubik;
  font-size: 45px;  
  margin: 0;
  color: ${props => props.color || mainColor}
`;

const Header = (props) => (
    <Background>
    <div
      style={{
        //margin: '0 auto',
        //maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
      <SelectLanguage langs={props.langs} />
    </div>
    <div>
      <Title>
        <FormattedMessage id="header.title">
          {props.langs.title}
        </FormattedMessage>
      </Title>
      <p>Välkommen till Gatsby.</p>
      <p>Testing testing.</p>
      
    </div>
    </Background>
  
)

export default Header;
{/* <Link to="/sv/page-2/">Till sid 2</Link> */}