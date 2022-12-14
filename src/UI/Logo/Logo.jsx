import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.svg' alt='minimal blog' width={209} height={48} />
    </Link>
  );
};

export default Logo;
