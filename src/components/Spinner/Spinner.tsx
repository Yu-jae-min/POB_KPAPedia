import styles from './spinner.module.scss';

interface ISpinnerType {
  top: number;
  bottom: number;
}

const Spinner = ({ top, bottom }: ISpinnerType) => {
  return <div className={styles.spinner} style={{ marginTop: top, marginBottom: bottom }} />;
};

export default Spinner;
