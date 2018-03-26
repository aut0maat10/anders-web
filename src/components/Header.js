import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import SelectLanguage from './SelectLanguage'
import andersHero from '../images/header.jpg'
import andersMobile from '../images/anders-mobile-background.jpg'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import Typed from 'typed.js'
import TypeWriter from '../components/Typed'
import { SocialIcon } from 'react-social-icons'
import { SocialIcons } from 'react-social-icons'

const urls = [
  'mailto:anders.helenius@gmail.com',
  'http://www.facebook.com/andershelenius',
  'http://twitter.com/andershelenius',
  'http://instagram.com/andershelenius'
];

const mainColor = '#272727'
const secondaryColor = '#a5e7ed'

const Background = styled.div`
  background-image: url(${andersHero});
  background-size: cover;
  background-postition: center; 
  //width: 100vh; 
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  flex: 1 100%;
  padding: 20px;
  @media (max-width: 600px) {
     background-image: url(${andersMobile});
  }   
 }  
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
  margin-top: 18%;
  margin-left: 5%;   
`;

const Title = styled.h1`
  //font-family: Timmana;
  font-family: Rubik, sans-serif;
  font-size: 40px;  
  margin-bottom: 15px; 
  color: ${props => props.color || mainColor}
  -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 3s; /* Firefox < 16 */
    -ms-animation: fadein 3s; /* Internet Explorer */
    -o-animation: fadein 3s; /* Opera < 12.1 */
    animation: fadein 3s;
  @media (min-width: 1280px) {
     font-size: 50px;
  }   
 }  
`;

const TypedStrings = styled.div` 
`;

const Header = (props) => (
    
      <Background className="background">
        <Wrapper>
      <SocialIcons urls={urls} className="sm" color={'#272727'} /> 
          <SelectLanguage className="languages" langs={props.langs} />
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