import styles from './error.module.scss';

interface IErrorParams {
  desc: string;
  paddingTop?: number;
  paddingBottom?: number;
  height?: number;
}

const Error = ({ desc, paddingTop, paddingBottom, height }: IErrorParams) => {
  return (
    <div className={styles.errorWrap} style={{ paddingTop, paddingBottom, height }}>
      <span className={styles.errorTitle}>Error !</span>
      <span className={styles.errorSubTitle}>{desc}</span>
    </div>
  );
};

export default Error;
