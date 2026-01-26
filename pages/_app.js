import { useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/main.scss';
import '../theme/bootstrap.css';
import '../public/static/client/sessionize.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          registrations.forEach((registration) => {
            registration.unregister();
          });
        });
    }
  }, []);
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
