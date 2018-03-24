import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import './index.css'
import styled from 'styled-components'

const Container = styled.div`
  display: flex; 
  min-height: 100vh;
  flex-flow: row wrap;
`;

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  
  
  return (
    <Container>
      <IntlProvider
        locale={langKey}
        messages={i18nMessages}
      >
        <div>
          <Helmet
            title="Anders Helenius"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header 
            langs={langsMenu}
          />
          <div
            style={{
              //margin: '0 auto',
              //maxWidth: 960,
              //padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children()}
          </div>
          
        </div>
      </IntlProvider>
    </Container>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }      
      }
    }
  },
`;
