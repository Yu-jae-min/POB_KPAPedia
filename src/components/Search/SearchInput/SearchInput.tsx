import styles from './searchInput.module.scss';

const SearchInput = ({ placeholder, handleInputValue, isLoading }: any) => {
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
