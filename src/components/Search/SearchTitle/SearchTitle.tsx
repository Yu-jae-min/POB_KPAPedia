import styles from './searchTitle.module.scss';

interface ISearchTitleType {
  mainTitle: string;
  subTitle: string;
}

const SearchTitle = ({ mainTitle, subTitle }: ISearchTitleType) => {
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
