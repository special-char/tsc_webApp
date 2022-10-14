import { LocaleProvider } from "context/locale.context";
import "../styles/globals.css";
import { LayoutProvider } from "context/layoutContext";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <LayoutProvider>
      <LocaleProvider>{getLayout(<Component {...pageProps} />)}</LocaleProvider>
    </LayoutProvider>
  );
}

export default MyApp;
