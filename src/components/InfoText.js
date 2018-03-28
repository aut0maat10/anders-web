import React from 'react'
import styled from 'styled-components'

const InfoText = styled.div`
  color: #f4f4f4;
  font-weight: 400;
  font-size: 12pt;
  display: flex;
  flex-direction: column; 
  padding-top: 20px;
  padding-bottom: 50px; 
  align-items: center;
  justify-content: center; 
  text-align: center; 
  margin-left: 10%;  
  margin-right: 10%;
  @media (min-width: 1280px) {
     font-size: 15pt;
  }  
`;

export default InfoText; 