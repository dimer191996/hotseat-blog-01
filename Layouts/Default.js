import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

export default function Default({ children }) {
  return (
    <>
      <NavBar />

      <main>{children}</main>
      <Footer />
    </>
  );
}
