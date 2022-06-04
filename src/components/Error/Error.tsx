import styles from './error.module.scss';

interface IErrorParams {
  desc: string;
}

const Error = ({ desc }: IErrorParams) => {
  return (
    <div className={styles.noResultWrap}>
      <span className={styles.noResultTitle}>Error !</span>
      <span className={styles.noResultSubTitle}>{desc}</span>
    </div>
  );
};

export default Error;
