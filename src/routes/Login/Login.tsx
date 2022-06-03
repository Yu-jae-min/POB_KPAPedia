import { useState } from 'react';
import styles from './login.module.scss';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import LoginModal from 'components/Modal/LoginModal/LoginModal';
import ModalPortal from 'components/Modal/ModalPortal';
import { userId } from 'states/atom';
import { LoginLogo } from 'assets/svg';

const Login = () => {
  const [userInfo, setUserInfo] = useState({ id: '', pw: '' });
  const [, setUserLoginId] = useRecoilState(userId);
  const [modalOpen, setModalOpen] = useState<boolean>();
  const btnActive = userInfo.id && userInfo.pw;

  const navigate = useNavigate();

  const HandleUserInfo = (event: any) => {
    const { name, value } = event.currentTarget;

    const nextInput = { ...userInfo, [name]: value };
    setUserInfo(nextInput);
  };

  const HandleLoginCheck = () => {
    const { id, pw } = userInfo;
    const foamCheck = !id || !pw;

    if (foamCheck) {
      setModalOpen(true);
      return;
    }

    setUserLoginId(id);
    navigate('/');
  };

  const HandleModalShow = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <LoginLogo className={styles.loginLogo} />
        <div className={styles.inputWrap}>
          <label htmlFor='id' className={styles.idLabel}>
            USERNAME
          </label>
          <input
            type='text'
            name='id'
            className={styles.idInput}
            onChange={HandleUserInfo}
            maxLength={12}
            autoComplete='off'
          />
          <label htmlFor='pw' className={styles.pwLabel}>
            PASSWORD
          </label>
          <input
            type='password'
            name='pw'
            className={styles.pwInput}
            onChange={HandleUserInfo}
            maxLength={12}
            autoComplete='off'
          />
        </div>
        <button
          type='button'
          className={btnActive ? styles.loginBtnActive : styles.loginBtn}
          onClick={HandleLoginCheck}
        >
          로그인
        </button>
        {modalOpen && (
          <ModalPortal>
            <LoginModal onClose={HandleModalShow} />
          </ModalPortal>
        )}
      </div>
    </div>
  );
};

export default Login;
