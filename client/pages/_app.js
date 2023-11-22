import Navbar from '../components/Navbar';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Auth0Provider } from '@auth0/auth0-react';

// function Loading() {
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = (url) => (url !== router.asPath) && setLoading(true);
//     const handleComplete = (url) => (url === router.asPath) && setLoading(false);

//     router.events.on('routeChangeStart', handleStart)
//     router.events.on('routeChangeComplete', handleComplete)
//     router.events.on('routeChangeError', handleComplete)

//     return () => {
//       router.events.off('routeChangeStart', handleStart)
//       router.events.off('routeChangeComplete', handleComplete)
//       router.events.off('routeChangeError', handleComplete)
//     }
//   })

//   return loading && (<div>Loading....{/*I have an animation here*/}</div>);
// }

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
        <NextNProgress color='#424242' height={7} showOnShallow={true} />
        {/* <Loading /> */}
        <Component {...pageProps} />
      </Auth0Provider>

    </>
  );
}

export default MyApp;
