import { useRouter } from 'next/router';
import { useState } from 'react';
import { TextInput } from '@components/atoms';
import { GoogleButton } from '@components/atoms';

const SearchForm = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <>
      <form
        className="flex flex-col items-center gap-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/results?search=${searchTerm}`);
        }}
      >
        <TextInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-x-3">
          <GoogleButton>Google Search</GoogleButton>
          <GoogleButton>I&apos;m Feeling Lucky</GoogleButton>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
