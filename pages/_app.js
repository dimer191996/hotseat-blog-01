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

      <ins
        class="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4491397756399283"
        data-ad-slot="2168142036"
      ></ins>

      <Default>
        <Component {...pageProps} />
      </Default>
    </>
  );
}

export default MyApp;
