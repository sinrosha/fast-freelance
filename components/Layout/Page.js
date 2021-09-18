import React from 'react';
import Head from './Head';

function Page(props) {
  const {children, content, attributes} = props;
  return (
    <div className='site-canvas' id='site-canvas'>
      <Head content={content} attributes={attributes}/>
      {children}
    </div>
  );
}
export default Page;