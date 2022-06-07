import { useMemo } from 'react';

import { ILoginInputType } from 'types/types';

import styles from './loginInput.module.scss';

import { LOGIN_INPUT_INFO } from 'models/models';

const LoginInput = (Props: ILoginInputType) => {
  const { userInfo, validationId, validationPw, handleUserInfo, handleLoginCheck } = Props;
  const { id, pw } = userInfo;

  const idFoam = Boolean(id.length && !id.match(validationId));
  const pwFoam = Boolean(pw.length && !pw.match(validationPw));

  const inputLogin = useMemo(() => {
    return LOGIN_INPUT_INFO.map((item) => {
      const { type, name, labelTitle, warning } = item;

      const nameIdCheck = idFoam && name === 'id';
      const namePwCheck = pwFoam && name === 'pw';

      return (
        <div className={styles.loginInputContainer} key={`${type}-${name}`}>
          <label htmlFor={name} className={styles.inputLabel}>
            {labelTitle}
          </label>
          <form className={styles.loginForm} onSubmit={handleLoginCheck}>
            <input
              type={type}
              name={name}
              className={styles.input}
              onChange={handleUserInfo}
              maxLength={20}
              autoComplete='off'
            />
          </form>
          <div className={styles.loginWarningWrap}>
            {nameIdCheck && <span className={styles.loginWarning}>{warning}</span>}
            {namePwCheck && <span className={styles.loginWarning}>{warning}</span>}
          </div>
        </div>
      );
    });
  }, [idFoam, pwFoam, handleUserInfo, handleLoginCheck]);

  return (
    <div className={styles.loginInput}>
      <div className={styles.inputWrap}>{inputLogin}</div>
    </div>
  );
};

export default LoginInput;
