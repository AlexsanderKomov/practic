import Contact from '@/components/contact';

import geo from '@/public/geo-header.svg';
import clockHeader from '@/public/clock-header.svg';
import email from '@/public/email-header.svg';
import telegram from '@/public/telegram-header.svg';
import whatsapp from '@/public/whatsapp-header.svg';
import phone from '@/public/phone-header.svg';

const HeaderTopLinks = () => {
  return (
    <div className="text-white bg-[#555d68] text-xl w-full">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between py-[10px] lg:px-[100px] md:px-[70px]">
        <Contact src={geo} content="Москва" alt="Геолокация" />
        <Contact
          src={clockHeader}
          content="Пн-Пт с 8:00-18:00"
          alt="Время роботы"
        />
        <Contact
          src={email}
          href="mailto:alexsanderkomov@yandex.ru"
          alt="Наша почта"
          content="promair@mail.ru"
        />
        <div className="flex lg:gap-x-[30px] md:gap-x-[15px]">
          <Contact
            src={telegram}
            alt="Телеграм"
            href="https://t.me/alexsandrkomov"
          />
          <Contact
            src={whatsapp}
            alt="Wats App"
            href="https://wa.me/79601188544"
          />
        </div>
        <Contact
          src={phone}
          href="tel:79601188544"
          content="+7 (960) 118-85-44"
          alt="Наш телефон"
        />
      </div>
    </div>
  );
};

export default HeaderTopLinks;
