import React from "react";

import Layout from "../components/layout";
import Categories from "../components/categories";
import Banner from "../components/banner";
import RecentBlogs from "../components/blogs/recent";
import LetsConnect from "../components/hero/lets-connect";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <RecentBlogs title={"Latest Posts"} />
        <Categories />
        <LetsConnect/>
      </Layout>
    </>
  );
}
