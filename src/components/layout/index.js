import React from "react";
import Nav from "./nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="bg-gray-50">{children}</main>
      <Footer />
    </>
  );
}
