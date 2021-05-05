import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO";

import Banner from "../components/banner";

export default function About() {
  const description = `I am a Front-End Engineer with more than 2+ years experience building responsive and accessible web-applications and 6 months experience in the startup world working remotely withcodecareer.io. I am looking to expand my skills with the right front-end react developer position.`;

  return (
    <Layout>
      <SEO
        keywords={
          "About  Daniel Philip Johnson, react developer, Front-End Engineer, London, web development"
        }
        title={"About Daniel Philip Johnson"}
        description={description}
      />
      <Banner />
      <div className="container pt-20 md:pt-28">
        <h2 className="text-3xl mb-4 pb-2 border-b border-gray-200">
          Hi{" "}
          <span role="img" aria-label="hello">
            👋{" "}
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
          I am a Front-End Engineer with more than 2+ years experience building
          responsive and accessible web-applications and 6 months experience in
          the startup world working remotely withcodecareer.io. I am looking to
          expand my skills with the right front-end react developer position. I
          have a Theoretical knowledge of the fundamentals HTML, CSS and JS. I
          specialise in react development, graphql, redux, redux thunk and
          reselect. I'm seeking to further develop my front end skills and be
          part of a team that can accelerate my development.
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
        <h2 className="text-3xl mb-4 pb-2 border-b border-gray-200">
          <span role="img" aria-labelledby="A little story about my">
            📔{" "}
          </span>{" "}
          Biography
        </h2>

        <p className="mb-8 text-lg">
          I discovered programming as a young child by helping my mother program
          the game Blue Meanies from Outer Space into the Commodore 64 (CBM 64)
          memory. Then while at college, I spent my free time playing Xbox and
          came across XNA Game Studio 3.0 in 2008. This idea of making games for
          Xbox seemed cool to me. So I started to learn C# and eventually built
          an RPG game from the toolkit they provided. After I finished college,
          I progressed to university studying psychology with little free time.
          My next year I switched to neuroscience where once again I fell in
          love with programming. It required using a samba Linux server and
          creating experiments with python and using libraries such as pandas,
          NumPy and matplotlib to plot and analysis data. Then slowly in my free
          time, I started learning web development with freecodecamp and udacity
          and late moving to react.
        </p>

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
            React is constantly updated with new features, recently with hooks,
            everything you need to successfully complete your project is there
            and adding customizations like useAuth and useForm is a breeze.
          </p>

          <p className="mb-6">
            Once you learn the React library, you are able to build native apps
            for IOS and Android with the React Native Framework and for Desktop
            Apps React NodeGui.
          </p>
          <p>Finally, it is easy to learn.</p>
        </div>
        <h2 className="text-3xl mb-4 pb-2 border-b border-gray-200">
          <span role="img" aria-labelledby="book">
            📚
          </span>{" "}
          Why Did I Start This Blog?
        </h2>
        <div className="mb-8 text-lg">
          <p className="mb-6">
            Recently I started to blog, mainly to expand my expertise, because
            as im sure you know the best way to learn - is to teach it.
          </p>

          <p className="mb-6">
            I have started to narrow down my topics to write about. If you have
            any front end development areas you are interested in let me know on
            twitter.
          </p>

          <p className="mb-6">
            Almost everyday I am working with JavaScript, React, Gatsby, Next.js
            and TailwindCSS. When I identify a gap in my knowledge I will write
            about it. Sometimes you spend a lot of time with a certain topic you
            start to forget things. When this happens i'll start to write about
            the topic and yes I do tend to forget the basics. Sometimes React
            can spoil you when it comes back to working with the DOM.
          </p>

          <p className="mb-6">
            Please Note: Do not treat my blogs as the sole source of truth.
            Please think critically and evaluate it for yourself. Sometimes my
            blogs cannot cover the whole topic. I might not have the time to
            write 100% about a topic. Please be aware of that. The internet can
            be a great place, you can find more complete explanations I am sure.
            I always try to write in the simplest terms and provide information
            in a managable way. If you feel some areas are not easy to grasp
            please provide me with feedback.
          </p>
        </div>

        <h2 className="text-3xl mb-4 pb-2 border-b border-gray-200">
          <span role="img" aria-labelledby="Goodbye and ">
            🙏
          </span>{" "}
          Thank You
        </h2>
        <div className="text-lg">
          <p className="mb-6">
            I'm glad you found your way to my blogs, I really hope, you will
            learn a lot from writing.
          </p>
          <p className="mb-6">
            Please, feel free to leave your feedback on my twitter page tag me
            and let me know if there is something missing on inaccurate.
          </p>
        </div>
      </div>
    </Layout>
  );
}
