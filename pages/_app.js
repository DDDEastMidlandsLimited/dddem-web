import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../theme/bootstrap.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
