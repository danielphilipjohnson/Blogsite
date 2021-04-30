import React from "react";
import Nav from "./nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="bg-gray-50">{children}</div>
      <Footer />
    </>
  );
}
