import styles from './Author.module.scss';
import Image from 'next/image';
import client from 'src/sanity';
import { useNextSanityImage } from 'next-sanity-image';

const Author = ({ date = new Date(), author }) => {
  const { name, image } = author || {};

  const newDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
  }).format(newDate);

  const imageProps = useNextSanityImage(client, image);

  return (
    <div className={styles.author}>
      <div className={styles.image}>
        <Image src={imageProps?.src} alt='autor' width={35} height={35} />
      </div>
      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
        <span className={styles.date}>{formattedDate}</span>
      </div>
    </div>
  );
};

export default Author;
