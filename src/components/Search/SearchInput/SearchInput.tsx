import styles from './searchInput.module.scss';

interface ISearchInputParamsType {
  placeholder: string;
  handleInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

const SearchInput = ({ placeholder, handleInputValue, isLoading }: ISearchInputParamsType) => {
  return (
    <input
      type='text'
      className={styles.searchInput}
      placeholder={placeholder}
      maxLength={30}
      onChange={handleInputValue}
      disabled={isLoading}
    />
  );
};

export default SearchInput;
