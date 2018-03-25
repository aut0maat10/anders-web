import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import styled from "styled-components";

const LinkWrapper = styled.div`
  margin: 0;
`;

const Li = styled.li`
  display: flex; 
  width: 40px;  
  margin: 0; 
`;

const Ul = styled.ul`
  display: flex; 
  margin: 0 auto; 
`;

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} style={{
      color: '#272727',
      textDecoration: 'none',
      //fontWeight: 'lighter',
      fontSize: '16px',
      textTransform: 'uppercase',
    }}>
      <Li selected={lang.selected}>
        {lang.langKey}
      </Li>
    </Link>
  );

  return (
    <LinkWrapper>
      {/* <header style={{
        color: '#272727'
      }}>
        <FormattedMessage id="selectLanguage" />
      </header> */}
      <Ul>
        {links}
      </Ul>
    </LinkWrapper>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
