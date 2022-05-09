import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

export default function Default({ children }) {
  return (
    <>
      <NavBar />
      <ins
        class="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
          backgroundColor: "#eeee40",
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4491397756399283"
        data-ad-slot="2168142036"
      ></ins>
      <main> {children}</main>
      <Footer />
    </>
  );
}
