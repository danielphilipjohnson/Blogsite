import React from "react";
import Nav from "../../layout/nav";
import Banner from "../../layout/banner";
import Footer from "../../layout/footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />

      <div>{children}</div>
      <Footer />
    </>
  );
}
