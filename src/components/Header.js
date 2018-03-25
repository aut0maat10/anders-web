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
  background-postition: center; 
  //width: 100vh; 
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  flex: 1 100%;
  padding: 20px;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column; 
`;

const Wrapper = styled.div`
  display: flex;
  maxWidth: 960px; 
  margin-left: 5%;
  
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 10px; 
  justify-content: center; 
  margin-top: 20%;
  margin-left: 5%;   
`;

const Title = styled.h1`
  font-family: Rubik, sans-serif;
  font-size: 50px;  
  margin-bottom: 15px; 
  color: ${props => props.color || mainColor}
`;

const TypedStrings = styled.div` 
`;

const Header = (props) => (
    
      <Background>
        <Wrapper>
          <SelectLanguage langs={props.langs} />
        </Wrapper>
        <HeroText>
          <Title>
            <FormattedMessage id="header.title">
              {props.langs.title}
            </FormattedMessage>
          </Title>
          <TypedStrings id="typed-strings">
              <FormattedMessage id="typeWriter.comedian"/>
              <FormattedMessage id="typeWriter.host" />
              <FormattedMessage id="typeWriter.writer" />
          </TypedStrings>
        <TypeWriter />
      </HeroText>
    </Background>  
  
)


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