import Logo from 'src/UI/Logo/Logo';
import styles from './Footer.module.scss';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsTelegram } from 'react-icons/bs';

const social = [
  { component: <AiFillInstagram />, url: '#' },
  { component: <IoLogoWhatsapp />, url: '#' },
  { component: <MdEmail />, url: '#' },
  { component: <BsTelegram />, url: '#' },
];

const Footer = () => {
  const renderSocial = social.map((el, i) => (
    <a href={el.url} key={i}>
      {el.component}
    </a>
  ));

  return (
    <footer className={styles['footer-wrapper']}>
      <div className={styles.footer}>
        <div className={styles.content}>
          <Logo />
          <p>Compartilhando conhecimento sobre o mundo de tecnologia.</p>
          <div className={styles.social}>{renderSocial}</div>
        </div>
        <span className={styles.copy}>
          © Minimal Blog - Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
