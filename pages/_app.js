import "../styles/globals.css";
import Default from "../Layouts/Default";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="lazyOnload">
        {`
           window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-211802929-1", "none");
        `}
      </Script>

      {/* <!-- A little help for the Netlify post-processing bots --> */}
      {/* <form
        name="contact"
        netlify
        netlify-honeypot="bot-field"
        action="/"
        hidden
      >
        <input type="text" name="author" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      <form
        name="susbcribe"
        netlify
        netlify-honeypot="bot-field"
        action="/"
        hidden
      >
        <input type="email" name="email" />
      </form> */}
      <Default>
        <Component {...pageProps} />
      </Default>
    </>
  );
}

export default MyApp;
