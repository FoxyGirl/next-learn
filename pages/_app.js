function MyApp({ Component, pageProps }) {
  console.log("App render");

  return <Component theme="default" {...pageProps} />;
}

export default MyApp;
