import styles from './searchNoResult.module.scss';

const SearchNoResult = () => {
  return (
    <div className={styles.noResultWrap}>
      <span className={styles.noResultTitle}>Error !</span>
      <span className={styles.noResultSubTitle}>검색 결과가 없습니다. 검색어를 다시 확인해주세요!</span>
    </div>
  );
};

export default SearchNoResult;
