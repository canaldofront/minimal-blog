import MainLayout from 'src/Layout/MainLayout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
