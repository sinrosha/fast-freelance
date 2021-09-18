import React from 'react';
import PropTypes from 'prop-types';
import Page from '../Page'
import attributes from '../../../content/attributes.json';

const BaseLayout = ({ children, content }) => (
  <Page content={content} attributes={attributes}>
    <>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </>
  </Page>
);

BaseLayout.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BaseLayout;
