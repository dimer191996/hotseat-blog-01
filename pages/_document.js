import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="facebook-domain-verification"
        content={process.env.FB_DOMAIN_VERIFY}
      />
      <meta property="fb:app_id" content={process.env.FB_APP_ID} />
      <meta name="p:domain_verify" content={process.env.P_DOMAIN_VERIFY} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        name="google-site-verification"
        content="AySyKKneKOxxtntn4fnsZqo_BEN30KI5caMaXJLRwFI"
      />
      <meta property="og:site_name" content="hotseatmag" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />

      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4491397756399283`}
        crossOrigin="anonymous"
      ></script>

      <ins
        class="adsbygoogle"
        style={{
          display: "block",
          backgroundColor: "#eee",
          marginTop: "130px",
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4491397756399283"
        data-ad-slot="2168142036"
      ></ins>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
