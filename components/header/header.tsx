'use client';

import { usePathname } from 'next/navigation';
import HeaderTopLinks from './header-top-link';
import HeaderBoard from './header-doard';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full flex flex-col">
      {pathname === '/' && <HeaderTopLinks />}
      <HeaderBoard />
    </header>
  );
};

export default Header;
