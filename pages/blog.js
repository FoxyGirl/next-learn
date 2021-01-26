import { useState } from "react";
import { pageVerify } from "../helpers/pageVerify";
import { verifyBrowser } from "../helpers/verifyBrowser";

export const getStaticProps = () => {
  const protectedPage = pageVerify("blog");

  return {
    props: {
      protectedPage,
    },
  };
};

const Blog = ({ theme, protectedPage }) => {
  console.log("Blog render");

  const [windowWidth, setWindowWidth] = useState(null);

  const isBrowser = verifyBrowser();

  const protectedPageJSX = protectedPage && (
    <h2 style={{ color: "red" }}>This is protected page</h2>
  );

  if (isBrowser) {
    console.log("width", window.innerWidth);
  }

  return (
    <>
      <h1>Blog page</h1>
      <p>This is the Blog page!</p>
      <p>Current Theme: {theme}</p>
      <p>Window width: {windowWidth}</p>

      {protectedPageJSX}
    </>
  );
};

export default Blog;
