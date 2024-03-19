import Link from 'next/link';
import Image from 'next/image';

import geo from '@/public/geo-header.svg';
import clockHeader from '@/public/clock-header.svg';
import email from '@/public/email-header.svg';
import telegram from '@/public/telegram-header.svg';
import whatsapp from '@/public/whatsapp-header.svg';
import phone from '@/public/phone-header.svg';

const HeaderTopLinks = () => {
  return (
    <ul className="flex items-center w-full justify-between list-nav">
      <li className="flex items-center justify-center gap-x-2">
        <Image src={geo} width={20} height={20} alt="Геолокация" />
        Мосвка
      </li>
      <li className="flex items-center justify-center gap-x-2">
        <Image src={clockHeader} width={20} height={20} alt="Часы" />
        Пн-Пт с 8:00-18:00
      </li>
      <li>
        <Link
          className="flex items-center justify-center gap-x-2"
          href="mailto:alexsanderkomov@yandex.ru"
          target="_blank"
        >
          <Image src={email} width={21} height={15.17} alt="Наша почта" />
          promair@mail.ru
        </Link>
      </li>
      <li>
        <ul className="flex gap-x-[30px]">
          <li>
            <Link href="https://t.me/alexsandrkomov" target="_blank">
              <Image src={telegram} width={20} height={20} alt="Телеграм" />
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/79601188544" target="_blank">
              <Image src={whatsapp} width={20} height={20} alt="Wats Apip" />
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link
          className="flex items-center justify-center gap-x-2 font-bold"
          href="tel:79601188544"
          target="_blank"
        >
          <Image src={phone} width={21} height={21} alt="Телефон" />
          +7 (960) 118-85-44
        </Link>
      </li>
      <style jsx>
        {`
          .list-nav {
            padding: 15px 100px;
            background-color: #555d68;
            color: #fff;
            font-size: 20px;
          }
        `}
      </style>
    </ul>
  );
};

export default HeaderTopLinks;
