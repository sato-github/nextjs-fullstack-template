export interface ISearchInput extends React.ComponentPropsWithoutRef<'input'> {}

const SearchInput = ({ value, onChange, ...rest }: ISearchInput) => {
  return (
    <input
      type="text"
      className="rounded-full border-2 w-5/6 sm:w-128 h-12 px-3"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default SearchInput;
