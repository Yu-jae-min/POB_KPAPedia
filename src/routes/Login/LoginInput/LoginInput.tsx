import styles from './loginInput.module.scss';

interface ILoginInputType {
  type: string;
  name: string;
  handleUserInfo: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelTitle: string;
}

const LoginInput = ({ type, name, handleUserInfo, labelTitle }: ILoginInputType) => {
  return (
    <div className={styles.loginInput}>
      <label htmlFor={name} className={styles.inputLabel}>
        {labelTitle}
      </label>
      <input
        type={type}
        name={name}
        className={styles.loginInput}
        onChange={handleUserInfo}
        maxLength={20}
        autoComplete='off'
      />
    </div>
  );
};

export default LoginInput;
