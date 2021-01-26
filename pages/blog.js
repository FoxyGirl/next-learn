import { pageVerify } from "../helpers/pageVerify";

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

  const protectedPageJSX = protectedPage && (
    <h2 style={{ color: "red" }}>This is protected page</h2>
  );

  return (
    <>
      <h1>Blog page</h1>
      <p>This is the Blog page!</p>
      <p>Current Theme: {theme}</p>
      {protectedPageJSX}
    </>
  );
};

export default Blog;
