import Footer from 'src/Components/Footer/Footer';
import Heading from 'src/Components/Heading/Heading';
import Bar from '../Components/Bar/Bar';

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Bar />
        <Heading />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
