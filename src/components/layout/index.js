import React from "react";
import Nav from "../../layout/nav";
import Footer from "../../layout/footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />

      <div className="bg-gray-50">{children}</div>
      <Footer />
    </>
  );
}
