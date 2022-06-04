import styles from './error.module.scss';

interface IErrorParams {
  desc: string;
}

const Error = ({ desc }: IErrorParams) => {
  return (
    <div className={styles.errorWrap}>
      <span className={styles.errorTitle}>Error !</span>
      <span className={styles.errorSubTitle}>{desc}</span>
    </div>
  );
};

export default Error;
