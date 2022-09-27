import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/main.scss';
import '../theme/bootstrap.css';
import '../public/static/client/sessionize.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
