import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Banner from "../components/banner";
import Markdown from "react-markdown";

export default function About() {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiAboutpage.seo}>
      <Banner />
      <div className="container pt-20 md:pt-20">
        <h2 className="text-3xl mb-4 pb-2 border-b border-gray-200">
          Hi{" "}
          <span role="img" aria-label="hello">
            🖐
          </span>
          I am Daniel
          <span role="img" aria-label="sparkles">
            ✨
          </span>{" "}
          <span role="img" aria-labelledby="I use my laptop and">
            👨‍💻
          </span>{" "}
          I work remote{" "}
          <span role="img" aria-labelledby="in my house">
            🏠
          </span>{" "}
          in Cornwall
        </h2>

        <p className="mb-4 text-lg leading-relaxed border-l-4 border-indigo-500 px-4">
          {data.strapiAboutpage.Introduction}
        </p>
        <p className="mb-4">
          Current Focus:
          <span>
            <span> &#47;&#47; </span>
            <span className="text-indigo-900"> Accessibility </span>
          </span>
          <span>
            <span> &#47;&#47; </span>
            <span className="text-indigo-900"> React </span>
          </span>
          <span>
            <span> &#47;&#47; </span>
            <span className="text-indigo-900"> Performance </span>
          </span>
          <span>
            <span> &#47;&#47; </span>
            <span className="text-indigo-900"> Responsive</span>
          </span>
        </p>

        <section>
          <h2 className="text-3xl mb-4 pb-2 border-b border-gray-200">
            <span role="img" aria-labelledby="A little story about my">
              📔{" "}
            </span>{" "}
            Biography
          </h2>

          <p className="mb-8 text-lg">{data.strapiAboutpage.Bio}</p>
        </section>

        <section>
          <h2 className="text-3xl mb-4 pb-2 border-b border-gray-200">
            <span role="img" aria-labelledby="rocket rocket">
              {" "}
              🚀{" "}
            </span>
            Why React?
          </h2>
          <div className="mb-8 text-lg">
            <p className="mb-6">
              When using a library or framework, what you need is something that
              is continuously supported and maintained. React is maintained by
              Facebook and a strong community.
            </p>
            <p className="mb-6">
              React is constantly updated with new features, recently with
              hooks, everything you need to successfully complete your project
              is there and adding customizations like useAuth and useForm is a
              breeze.
            </p>

            <p className="mb-6">
              Once you learn the React library, you are able to build native
              apps for IOS and Android with the React Native Framework and for
              Desktop Apps React NodeGui.
            </p>
            <p>Finally, it is easy to learn.</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl mb-4 pb-2 border-b border-gray-200">
            <span role="img" aria-labelledby="book">
              📚
            </span>{" "}
            Why Did I Start This Blog?
          </h2>
          <div className="mb-8 text-lg space-y-6">
            <Markdown
              children={data.strapiAboutpage.WhyBlog}
              escapeHtml={false}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl mb-4 pb-2 border-b border-gray-200">
            <span role="img" aria-labelledby="Goodbye and ">
              🙏
            </span>{" "}
            Thank You
          </h2>
          <div className="text-lg space-y-6 mb-8">
            <Markdown
              children={data.strapiAboutpage.ThankYou}
              escapeHtml={false}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
const query = graphql`
  query {
    strapiAboutpage {
      seo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
        keywords
      }
      Bio
      Introduction
      ThankYou
      WhyBlog
    }
  }
`;
