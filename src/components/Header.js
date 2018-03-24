import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import SelectLanguage from './SelectLanguage'
import andersHero from '../images/header.jpg'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import Typed from 'typed.js'
import TypeWriter from '../components/Typed'

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

const Header = (props) => {
  // var typed = new Typed('#typed', {
  //   stringsElement: '#typed-strings',
  //   typeSpeed: 130
  // });
  return (
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
          Home
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
      
      <div id="typed-strings">
          <FormattedMessage id="typeWriter.comedian"/>
          <FormattedMessage id="typeWriter.host" />
          <FormattedMessage id="typeWriter.writer" />
      </div>
      <TypeWriter />
    </div>
    </Background>  
)
}

export default Header;
{/* <Link to="/sv/page-2/">Till sid 2</Link> */}

{/* <div>
  <FormattedMessage id="typeWriter">
    <TypeWriter
      className="TypeWriter"
      strings={props.langs.typeWriter}
    />
  </FormattedMessage>
</div> */}