import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SEO from 'components/SEO/SEO';
import ModalPortal from 'components/Modal/ModalPortal';
import LoginModal from 'components/Modal/LoginModal/LoginModal';
import LoginInput from './LoginInput/LoginInput';

import { useRecoilState } from 'recoil';
import { userId } from 'states/atom';

import styles from './login.module.scss';
import { LoginLogo } from 'assets/svg';

const Login = () => {
  const [userInfo, setUserInfo] = useState({ id: '', pw: '' });
  const [, setUserLoginId] = useRecoilState(userId);
  const [modalOpen, setModalOpen] = useState<boolean>();
  const btnActive = userInfo.id && userInfo.pw;

  const navigate = useNavigate();

  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    const nextInput = { ...userInfo, [name]: value };
    setUserInfo(nextInput);
  };

  const handleLoginCheck = () => {
    const { id, pw } = userInfo;
    const foamCheck = !id || !pw;

    if (foamCheck) {
      setModalOpen(true);
      return;
    }

    setUserLoginId(id);
    navigate('/');
  };

  const handleModalShow = () => {
    setModalOpen(false);
  };

  return (
    <section className={styles.login}>
      <SEO title='KPA Pedia - 로그인' />
      <div className={styles.container}>
        <LoginLogo className={styles.loginLogo} />
        <div className={styles.inputWrap}>
          <LoginInput type='text' name='id' labelTitle='USERNAME' handleUserInfo={handleUserInfo} />
          <LoginInput type='password' name='pw' labelTitle='PASSWORD' handleUserInfo={handleUserInfo} />
        </div>
        <button
          type='button'
          className={btnActive ? styles.loginBtnActive : styles.loginBtn}
          onClick={handleLoginCheck}
        >
          로그인
        </button>
        {modalOpen && (
          <ModalPortal>
            <LoginModal onClose={handleModalShow} />
          </ModalPortal>
        )}
      </div>
    </section>
  );
};

export default Login;
