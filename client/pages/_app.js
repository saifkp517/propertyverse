import Navbar from '../components/Navbar';
import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {  

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Auth0Provider
        domain="dev-znk3kc4x.us.auth0.com"
        clientId="36R6FfoIjqtSl5ZxtclikDYwLny7gvZL"
        cacheLocation='localstorage'
        authorizationParams={{
          redirect_uri: "https://propertyverse.vercel.app/"
        }}
      >
        <Navbar />
        <Component {...pageProps} />
      </Auth0Provider>

    </>
  );
}

export default MyApp;
