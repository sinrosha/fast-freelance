import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

function Head({attributes, content = [] }) {

  const { brand, gtmId, analyticsId } = attributes;
  const { title, canonical, metatags, ogTags, scripts } = content;

  return (
    <NextHead>
      <title>{title ? `${title} - ${brand}` : brand}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <link rel="dns-prefetch" href="//gstatic.com" />
      <link rel="dns-prefetch" href="//ik.imagekit.io.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />

      {/* Adding canonical tag */}
      { canonical && <link rel="canonical" href={canonical} /> }

      {/* Adding meta tags */}
      { metatags &&  metatags.map(({name, content}) => <meta name={name} content={content} key={name} />)}

      {/* Adding og tags */}
      { ogTags &&  ogTags.map(({property, content}) => <meta property={property} content={content} key={property} />
      )}

      {/* Google Tag Manager */}
      {
        gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${gtmId}');`,
            }}
          ></script>
        )
      }

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      { analyticsId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${analyticsId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {scripts.map((script) => (
        <script key={script.src} src={script.src} />
      ))}

      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
      <link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32" />
    </NextHead>
  );
}


Head.defaultProps = {
  preLoadContent: {},
  scripts: [],
  pageStructuredData: [],
};

export default Head;