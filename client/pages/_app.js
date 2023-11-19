import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {  
  return (
    <>
      <Auth0Provider
        domain="dev-znk3kc4x.us.auth0.com"
        clientId="36R6FfoIjqtSl5ZxtclikDYwLny7gvZL"
        cacheLocation='localstorage'
        authorizationParams={{
          redirect_uri: "http://localhost:3000"
        }}
      >
        <Navbar />
        <Component {...pageProps} />
      </Auth0Provider>

    </>
  );
}

export default MyApp;
