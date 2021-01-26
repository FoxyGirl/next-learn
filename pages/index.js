const Home = ({ theme }) => {
  console.log("Home render");

  return (
    <>
      <h1>Home page</h1>
      <p>This is the Home page</p>
      <p>Current Theme: {theme}</p>
    </>
  );
};

export default Home;
