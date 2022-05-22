import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

export default function Default({ children }) {
  return (
    <>
      <div className="">
        <NavBar />
        <div className=" h-24 md:h-32"></div>
        <main className="container m-auto"> {children}</main> <Footer />
      </div>
    </>
  );
}
