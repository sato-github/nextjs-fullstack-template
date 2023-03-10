import { ISearchData } from '@types';
import Link from 'next/link';

export type SearchResultProps = React.ComponentPropsWithoutRef<'div'> &
  ISearchData;

const SearchResult = ({
  url,
  title,
  text,
  className,
  ...rest
}: SearchResultProps) => {
  return (
    <div
      {...rest}
      className={`flex flex-col w-5/6 max-w-screen-md space-y-1 ${className} `}
    >
      <Link
        href={url}
        className="cursor:pointer hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>{url}</p>
        <p className="text-blue-600 text-xl ">{title}</p>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default SearchResult;
