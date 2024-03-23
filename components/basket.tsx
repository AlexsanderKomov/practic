import classNames from 'classnames';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

import shape from '@/public/shape.svg';

interface IBasket {
  className?: string;
}

const Basket = ({ className }: IBasket) => {
  return (
    <Button
      asChild
      variant={'ghost'}
      className={classNames(
        className,
        'w-[72px] h-[46px] bg-[#E5E8EB] cursor-pointer'
      )}
    >
      <Image
        src={shape}
        alt="Корзина"
        width={20}
        height={20}
        fill={false}
        className="w-5 h-5 bg-transparent"
      />
    </Button>
  );
};

export default Basket;
