import styles from './Heading.module.scss';
import { BiSearchAlt } from 'react-icons/bi';
import Logo from 'src/UI/Logo/Logo';

const Heading = () => {
  return (
    <section className={styles.heading}>
      <Logo />
      <div className={styles.search}>
        <form action='/'>
          <label htmlFor='search'>buscar</label>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Buscar artigos'
          />
          <button className={styles.button}>
            <BiSearchAlt />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Heading;
