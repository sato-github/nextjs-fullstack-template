import GoogleButton from '@components/atoms/button/GoogleButton';
import SearchInput from '@components/atoms/Input/SearchInput';
import { useState } from 'react';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  return (
    <>
      <form
        className="flex flex-col items-center gap-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          alert(searchTerm);
        }}
      >
        <SearchInput
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