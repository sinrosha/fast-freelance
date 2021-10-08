import React from 'react';
import PropTypes from 'prop-types';
import Page from '../Page'
import attributes from '../../../content/attributes.json';

const BaseLayout = ({ children, content }) => (
  <Page content={content} attributes={attributes}>
    <>
      {children}
    </>
  </Page>
);

BaseLayout.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BaseLayout;
