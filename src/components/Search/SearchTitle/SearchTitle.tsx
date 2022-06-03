import styles from './searchTitle.module.scss';

const SearchTitle = ({ mainTitle, subTitle }: any) => {
  return (
    <div className={styles.titleWrap}>
      <div>
        <h1 className={styles.title}>{mainTitle}</h1>
        <span className={styles.subTitle}>{subTitle}</span>
      </div>
    </div>
  );
};

export default SearchTitle;
