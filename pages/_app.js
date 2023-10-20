function _app({ Component, pageProps, err }) {
  return (
    <div>
      <Component {...pageProps} err={err} />
    </div>
  );
}

export default _app;
