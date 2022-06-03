import styles from './searchInput.module.scss';

const SearchInput = ({ placeholder, HandleInputValue, isLoading }: any) => {
  return (
    <input
      type='text'
      className={styles.searchInput}
      placeholder={placeholder}
      maxLength={30}
      onChange={HandleInputValue}
      disabled={isLoading}
    />
  );
};

export default SearchInput;
