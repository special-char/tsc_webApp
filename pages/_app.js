import { LocaleProvider } from "context/locale.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <LocaleProvider>{getLayout(<Component {...pageProps} />)}</LocaleProvider>
  );
}

export default MyApp;
