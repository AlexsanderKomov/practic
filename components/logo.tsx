import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/logo-header.svg';

const Logo = () => {
  return (
    <Link href="#">
      <Image src={logo} alt="Логотип" width={116} height={24} />
    </Link>
  );
};

export default Logo;
