import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

export default function Default({ children }) {
  return (
    <>
      <NavBar />
      {/* <div className="px-5">
        <ins
          class="adsbygoogle"
          style={{ display: "block", overflow: "hidden" }}
          data-ad-client="ca-pub-4491397756399283"
          data-ad-slot="9308808331"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div> */}
      <main> {children}</main> <Footer />
    </>
  );
}
