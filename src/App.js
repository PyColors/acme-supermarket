import React from 'react';
import { connect } from 'react-redux';

import DefaultTemplate from './templates/DefaultTemplate/DefaultTemplate';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import Content from './Content';

const AppDisplay = () => (
  /**
   * Default Template has principal components:
   * Footer
   * Content
   */
  <DefaultTemplate
    header={<Header />}
    content={<Content />}
    footer={<Footer />}
  />
);

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(AppDisplay);
