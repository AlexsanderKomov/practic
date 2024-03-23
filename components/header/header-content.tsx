'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import { Button } from '@/components/ui/button';
import { LINKS } from '@/constans/header-link';

import HeaderTopLinks from './header-top-link';
import Logo from '@/components/logo';
import { useWindowSize } from '@uidotdev/usehooks';
import Search from '@/components/search';
import Basket from '@/components/basket';

const HeaderContent = () => {
  const pathname = usePathname();
  const { width } = useWindowSize();

  if (width === null) return;

  return (
    <>
      {pathname === '/' && <HeaderTopLinks />}
      <div className="w-full">
        <div className=" max-w-[1280px] mx-auto py-[10px] lg:px-[100px] md:px-[70px]">
          <ul className=" flex items-center justify-between lg:gap-x-3 gap-x-[30px] mb-3">
            <li>
              <Logo />
            </li>
            <li className="flex items-center justify-between lg:text-sm">
              <ul className="flex gap-x-[26px] lg:gap-x-3">
                {LINKS.map((link) => {
                  return (
                    <li key={link.id}>
                      <Button
                        asChild
                        className={classNames(
                          'p-0',
                          pathname === `${link.href}` &&
                            'pointer-events-none text-colorActive'
                        )}
                        variant={'link'}
                      >
                        <Link href={link.href}>{link.name}</Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </li>
            {width > 1023 && (
              <li>
                <Button
                  variant={'outline'}
                  className="bg-colorBg text-white lg:text-base md:text-sm"
                  type="button"
                >
                  ЗАКАЗАТЬ ЗВОНОК
                </Button>
              </li>
            )}
          </ul>
          <div className="grid grid-cols-8 lg:grid-cols-12 lg:gap-x-7 gap-x-3  items-center">
            <Search className="col-start-3 col-span-6 lg:col-start-4  lg:col-span-8 " />
            <Basket className="col-start-12" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
