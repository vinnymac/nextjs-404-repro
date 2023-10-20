
import App from 'next/app';

function _app({ Component, pageProps, err }) {
  return (
    <div>
      <Component {...pageProps} err={err} />
    </div>
  );
}

_app.getInitialProps = async function getInitialProps(ctx) {
  const appProps = await App.getInitialProps(ctx);

  return appProps;
};

export default _app;
