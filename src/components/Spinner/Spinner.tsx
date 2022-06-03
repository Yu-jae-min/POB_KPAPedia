import styles from './spinner.module.scss';

const Spinner = ({ top, bottom }: any) => {
  return <div className={styles.spinner} style={{ marginTop: top, marginBottom: bottom }} />;
};

export default Spinner;
