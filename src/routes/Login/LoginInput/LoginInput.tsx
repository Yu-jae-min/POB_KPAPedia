import { LOGIN_INPUT_INFO } from 'models/models';

import styles from './loginInput.module.scss';

interface IUserInfoType {
  id: string;
  pw: string;
}

interface ILoginInputType {
  userInfo: IUserInfoType;
  validationId: RegExp;
  validationPw: RegExp;
  handleUserInfo: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInput = ({ userInfo, handleUserInfo, validationId, validationPw }: ILoginInputType) => {
  const { id, pw } = userInfo;

  const idFoam = Boolean(id.length && !id.match(validationId));
  const pwFoam = Boolean(pw.length && !pw.match(validationPw));

  return (
    <div className={styles.loginInput}>
      {LOGIN_INPUT_INFO.map(({ type, name, labelTitle, warning }) => {
        return (
          <div className={styles.loginInputContainer} key={`${type}-${name}`}>
            <label htmlFor={name} className={styles.inputLabel}>
              {labelTitle}
            </label>
            <input
              type={type}
              name={name}
              className={styles.input}
              onChange={handleUserInfo}
              maxLength={20}
              autoComplete='off'
            />
            <div className={styles.loginWarningWrap}>
              {idFoam && name === 'id' && <span className={styles.loginWarning}>{warning}</span>}
              {pwFoam && name === 'pw' && <span className={styles.loginWarning}>{warning}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LoginInput;
