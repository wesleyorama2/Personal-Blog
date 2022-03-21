import Layout from '../components/layout';
import '../styles/globals.scss';
function MyApp({ Component, pageProps }) {
  return (
    /* jshint ignore:start */
    <Layout>
      <Component {...pageProps} />
    </Layout>
    /* jshint ignore:end */
  );
}
export default MyApp;