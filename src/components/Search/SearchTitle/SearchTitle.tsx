import styles from './searchTitle.module.scss';

const SearchTitle = ({ HandleInputValue, isLoading }: any) => {
  return (
    <div className={styles.titleWrap}>
      <div>
        <h1 className={styles.title}>원하시는 공연을 검색해보세요!</h1>
        <span className={styles.subTitle}>
          관람을 원하시거나 관심있는 공연을 검색해보세요.
          <br />
          최신 공연에 관한 모든 공연 정보를 확인해보실 수 있습니다.
        </span>
      </div>
      <input
        type='text'
        className={styles.searchInput}
        placeholder='공연명을 입력해주세요.'
        maxLength={30}
        onChange={HandleInputValue}
        disabled={isLoading}
      />
    </div>
  );
};

export default SearchTitle;
