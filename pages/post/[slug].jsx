import client from 'src/sanity';
import Author from 'src/UI/Author/Author';
import styles from 'styles/Post.module.scss';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { PortableText } from '@portabletext/react';

const Post = ({ post, author }) => {
  const {
    title,
    subtitle,
    mainImage,
    body,
    author: authorRef,
    publishedAt,
  } = post || {};

  const getAuthor = author?.find((author) => author._id === authorRef._ref);
  const imageProps = useNextSanityImage(client, mainImage);

  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value.asset._ref) return null;
        return (
          <Image
            alt={title || 'minimal blog'}
            loading='lazy'
            {...useNextSanityImage(client, value)}
          />
        );
      },
    },
  };

  return (
    <section className={styles.post}>
      <div className={styles.heading}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Author author={getAuthor} date={publishedAt} />
      </div>
      <article className={styles.content}>
        <div className={styles.image}>
          <Image {...imageProps} alt={title} />
        </div>
        <PortableText value={body} components={ptComponents} />
      </article>
    </section>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post" && defined(slug.current)[]].slug.current`;
  const paths = await client.fetch(query);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug = '' } = context.params;

  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const post = await client.fetch(query);

  const author = await client.fetch(`*[_type == "author"]`);

  return {
    props: {
      post,
      author,
    },
  };
};
