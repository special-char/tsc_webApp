import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;
