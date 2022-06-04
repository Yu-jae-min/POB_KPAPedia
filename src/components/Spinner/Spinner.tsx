import styles from './spinner.module.scss';

interface ISpinnerType {
  marginTop?: number;
  marginBottom?: number;
}

const Spinner = ({ marginTop, marginBottom }: ISpinnerType) => {
  return <div className={styles.spinner} style={{ marginTop, marginBottom }} />;
};

export default Spinner;
