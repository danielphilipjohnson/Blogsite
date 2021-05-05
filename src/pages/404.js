import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/SEO";
import bg404 from "../images/404bg.jpg";

export default function Status404() {
  return (
    <>
      <Layout>
        <Seo />
        <img
          className=""
          src={bg404}
          alt="404 background"
          style={{
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
            filter: "brightness(.6)",
          }}
        />
        <div className="absolute inset-0 p-6 flex flex-col items-start text-white">
          <div className="pt-32 md:pt-12 container min-h-full flex flex-col justify-center">
            <h1 className="text-7xl md:text-9xl mb-2">404</h1>
            <h2 className="text-3xl md:text-5xl mb-8">
              Opps, I havent wrote a blog for that yet.
            </h2>

            <Link to="/" className="border border-white-800 px-3 py-2 w-max">
              Go back Home
            </Link>

            <div className="mt-8">
              <a href="https://www.vecteezy.com/free-vector/nature">
                Image from Nature Vectors by Vecteezy
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
