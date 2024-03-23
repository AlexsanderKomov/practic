'use client';

import { useWindowSize } from '@uidotdev/usehooks';
import HeaderContent from './header-content';
import HeaderMobile from './header-mobile';

const Header = () => {
  const { width } = useWindowSize();

  if (width === null) return;

  return (
    <header className="w-full flex flex-col">
      {width >= 776 ? <HeaderContent /> : <HeaderMobile />}
    </header>
  );
};

export default Header;
