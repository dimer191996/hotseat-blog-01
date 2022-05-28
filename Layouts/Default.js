import { useState } from "react";
import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

export default function Default({ children }) {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="">
        <NavBar />
        <div className=" h-24 md:h-32"></div>
        <main className="container m-auto"> {children}</main> <Footer />
        <FloatingButton
          hidebutton={() => setVisible(false)}
          showbutton={() => setVisible(true)}
          hideHeader={visible}
        />
      </div>
    </>
  );
}
