import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from '@uidotdev/usehooks';
import classNames from 'classnames';

interface IContact {
  href?: string;
  src: string;
  alt: string;
  content?: string;
}

const Contact = ({ href = '', src, alt, content }: IContact) => {
  const { width } = useWindowSize();

  if (width === null) return;

  return (
    <div className="flex items-center justify-center gap-x-2 md:text-base lg:text-xl">
      {href ? (
        <Link
          className={classNames('flex items-center justify-center gap-x-2', {
            'font-bold': href.startsWith('tel'),
          })}
          href={href}
          target="_blank"
        >
          <Image
            src={src}
            width={width <= 1024 ? 17 : 21}
            height={width <= 1024 ? 17 : 21}
            alt={alt}
          />
          {content}
        </Link>
      ) : (
        <>
          <Image
            src={src}
            width={
              content === 'Москва'
                ? width <= 1024
                  ? 12
                  : 16
                : width <= 1024
                ? 17
                : 21
            }
            height={width <= 1024 ? 17 : 21}
            alt={alt}
          />
          {content}
        </>
      )}
    </div>
  );
};

export default Contact;
