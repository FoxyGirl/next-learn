const Blog = ({ theme }) => {
  console.log("Blog render");

  return (
    <>
      <h1>Blog page</h1>
      <p>This is the Blog page!</p>
      <p>Current Theme: {theme}</p>
    </>
  );
};

export default Blog;
