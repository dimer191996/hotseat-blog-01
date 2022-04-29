import "../styles/globals.css";
import Default from "../Layouts/Default";

function MyApp({ Component, pageProps }) {
  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  );
}

export default MyApp;
