import { LOGIN_INPUT_INFO } from 'models/models';
import { useMemo } from 'react';

import { ILoginInputType } from 'types/loginInput';

import styles from './loginInput.module.scss';

const LoginInput = (Props: ILoginInputType) => {
  const { userInfo, validationId, validationPw, handleUserInfo } = Props;
  const { id, pw } = userInfo;

  const idFoam = Boolean(id.length && !id.match(validationId));
  const pwFoam = Boolean(pw.length && !pw.match(validationPw));

  const inputLogin = useMemo(() => {
    return LOGIN_INPUT_INFO.map(({ type, name, labelTitle, warning }) => {
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
    });
  }, [handleUserInfo, idFoam, pwFoam]);

  return (
    <div className={styles.loginInput}>
      <div className={styles.inputWrap}>{inputLogin}</div>
    </div>
  );
};

export default LoginInput;
