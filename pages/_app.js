import "../styles/globals.css";
import Default from "../Layouts/Default";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
  }, []);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-VCL4RNBM4L"
      ></Script>
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

      <Default>
        <Component {...pageProps} />
      </Default>
    </>
  );
}

export default MyApp;
