import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nanoid } from 'nanoid';
import classNames from 'classnames';

import logo from '@/public/logo-header.svg';
import { Button } from '@/components/ui/button';

const links = [
  {
    id: nanoid(),
    name: 'Главная',
    href: '/',
  },
  {
    id: nanoid(),
    name: 'О Компании',
    href: '/about',
  },
  {
    id: nanoid(),
    name: 'Проекты',
    href: '/projects',
  },
  {
    id: nanoid(),
    name: 'Новости',
    href: '/news',
  },
  {
    id: nanoid(),
    name: 'Отзывы и сертификаты',
    href: '/reviews',
  },
  {
    id: nanoid(),
    name: 'Контакты',
    href: '/contacts',
  },
];

const HeaderBoard = () => {
  const pathName = usePathname();

  return (
    <div>
      <ul className="flex items-center justify-between gap-x-[30px] text-base">
        <li>
          <Link href="#">
            <Image src={logo} alt="Логотип" width={116} height={24} />
          </Link>
        </li>
        <li className="flex items-center justify-between">
          <ul className="flex gap-x-[26px]">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Button
                    asChild
                    className={classNames(
                      'p-0',
                      pathName === `${link.href}` &&
                        'pointer-events-none text-[#6AB8EE]'
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
        <li>
          <Button type="button">ЗАКАЗАТЬ ЗВОНОК</Button>
        </li>
      </ul>
      <style jsx>{`
        div {
          padding: 15px 100px;
        }
      `}</style>
    </div>
  );
};

export default HeaderBoard;
