import Error from 'src/UI/Error/Error';
import styles from 'styles/Custom404.module.scss';

const Custom404 = () => {
  return (
    <section className={styles.section}>
      <h1>Oops!! Error 404</h1>
      <Error text='A página que você está tentando acessar não existe.' />
    </section>
  );
};

export default Custom404;
