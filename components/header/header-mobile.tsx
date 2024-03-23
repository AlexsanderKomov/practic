import Logo from '@/components/logo';
import Image from 'next/image';
import { Button } from '../ui/button';

import Contact from '@/components/contact';
import Burger from '@/components/burger';
import catalog from '@/public/btn-catalog.svg';
import search from '@/public/search.svg';
import phone from '@/public/phone-header.svg';

const HeaderMobile = () => {
  return (
    <div className="w-full flex justify-between items-center py-[23px] px-[14px]">
      <Button
        asChild
        variant={'ghost'}
        size={'icon'}
        className="w-5 h-5 cursor-pointer"
      >
        <Image src={catalog} width={24} height={24} alt="Кнопка каталог" />
      </Button>
      <Button
        asChild
        variant={'ghost'}
        size={'icon'}
        className="w-5 h-5 cursor-pointer"
      >
        <Image src={search} width={20} height={20} alt="Поиск" />
      </Button>
      <Logo />
      <Contact href="tel:79601188544" src={phone} alt="Номер телефона" />
      <Burger />
    </div>
  );
};

export default HeaderMobile;
