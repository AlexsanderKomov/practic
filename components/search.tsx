import Image from 'next/image';
import classNames from 'classnames';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import search from '@/public/search.svg';
import cross from '@/public/cross.svg';

interface ISearch {
  className?: string;
}

const Search = ({ className }: ISearch) => {
  return (
    <form
      action=""
      className={classNames(
        className,
        'flex items-center py-[13px] px-5 rounded bg-[#E5E8EB]'
      )}
    >
      <Input
        placeholder="Поиск"
        className="bg-transparent border-none outline-none p-0 h-5"
      />
      <Button
        asChild
        variant={'outline'}
        size={'icon'}
        className="w-[14px] h-[14px] cursor-pointer mr-4"
      >
        <Image
          src={search}
          width={14}
          height={14}
          alt="Поиск"
          className="bg-transparent"
        />
      </Button>
      <Button
        asChild
        variant={'ghost'}
        size={'icon'}
        className="w-[14px] h-[14px] cursor-pointer"
      >
        <Image src={cross} width={14} height={14} alt="Очистить поиск" />
      </Button>
    </form>
  );
};

export default Search;
