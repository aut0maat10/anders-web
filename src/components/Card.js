import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import andersHero from '../images/header.jpg'
import andersStage from '../images/stage-c.jpg'
import andersPen from '../images/watermark-c.jpg'
import andersStudio from '../images/studio-b.jpg'

const Container = styled.section`
  background-color: #f4f4f4;
  //margin: 20px; 
  padding: 5%;
  display: flex;
  flex-flow: row wrap; 
  justify-content: space-around;
  //perspective: 1000;
  flex: 1 100%;
  @media all and (max-width: 700px) {
    flex-direction: column;
    margin: 0; 
    padding: 0; 
  }
`;

const CardBox = styled.div`
  width: 300px; 
  height: 400px;
  margin: auto;
  padding: 10px;
   
  transition:all 0.8s ease;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover{
        transform: rotateY(180deg);
    }
    .back{
        transform: rotateY(180deg);
        background: #d9d9d9;
        padding: 7px; 
    }
    .front{
        // background: url(${andersStage});
        background-size:cover;
        display: flex; 
        flex-align: center; 
        justify-content: center;
        color: white; 
    }
    .front, .back{
        font-size: 16px; 
        position: absolute;
        width: 300px;
        height: 400px;
        border-radius:10px;
        backface-visibility:hidden;
        display: flex;
        align-items:center;
        justify-content:center;
        box-shadow: 0px 2px 5px gray;
        @media all and (max-width: 500px) {
        //   width: 300px;
        //   height: 500px; 
        //padding: 25px; ; 
      }
    }
`;

export default class Card extends React.Component {
  render() {
    return (
      <Container>
        <CardBox>
          <div className="front" 
            style={{ background: `linear-gradient(45deg, rgba(156,30,97,1) 0%, rgba(0,128,128,.1) 0%), url(${andersStage }`}}>
            <h1><FormattedMessage id="cardTitle.standup" /></h1>
          </div>
          <div className="back">
            <div>
              <strong><FormattedMessage id="standupCard.title" /></strong><br /><br />
              <FormattedMessage id="standupCard.body" /><br /><br />
            <FormattedMessage id="standupCard.end" />
            </div>
          </div>
        </CardBox>
        <CardBox>
          <div className="front"
            style={{ background: `linear-gradient(45deg, rgba(156,30,97,1) 0%, rgba(0,128,128,.1) 0%), url(${andersStudio}` }}>
            <h1><FormattedMessage id="cardTitle.tv" /></h1>
          </div>
          <div className="back">
            Testing
          </div>
        </CardBox>
        <CardBox>
          <div className="front"
            style={{ background: `linear-gradient(45deg, rgba(156,30,97,1) 0%, rgba(0,128,128,.1) 0%), url(${andersPen}` }}>
            <h1><FormattedMessage id="cardTitle.screenwriter" /></h1>
          </div>
          <div className="back">
            Testing
          </div>
        </CardBox>
      </Container>
    )
  }
}