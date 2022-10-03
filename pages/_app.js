import { LayoutProvider } from "context/layoutContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <LayoutProvider>{getLayout(<Component {...pageProps} />)}</LayoutProvider>
  );
}

export default MyApp;
