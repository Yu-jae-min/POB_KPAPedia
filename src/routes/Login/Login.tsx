import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import store from 'store';

import SEO from 'components/SEO/SEO';
import ModalPortal from 'components/Modal/ModalPortal';
import LoginModal from 'components/Modal/LoginModal/LoginModal';
import LoginInput from './LoginInput/LoginInput';

import styles from './login.module.scss';
import { LoginLogo } from 'assets/svg';

const validationId = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const validationPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

const Login = () => {
  const [userInfo, setUserInfo] = useState({ id: '', pw: '' });
  const [modalOpen, setModalOpen] = useState<boolean>();
  const [btnActive, setBtnActive] = useState<boolean>();

  const navigate = useNavigate();

  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    const nextInput = { ...userInfo, [name]: value };
    setUserInfo(nextInput);
  };

  const handleLoginCheck = () => {
    if (!btnActive) {
      setModalOpen(true);
      return;
    }

    store.set('login', { userId: userInfo.id });
    navigate('/');
  };

  const handleModalShow = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const { id, pw } = userInfo;

    const idFoam = Boolean(id.length && id.match(validationId));
    const pwFoam = Boolean(pw.length && pw.match(validationPw));

    idFoam && pwFoam ? setBtnActive(true) : setBtnActive(false);
  }, [userInfo]);

  return (
    <section className={styles.login}>
      <SEO title='KPA Pedia - 로그인' />
      <div className={styles.container}>
        <LoginLogo className={styles.loginLogo} />
        <LoginInput
          handleUserInfo={handleUserInfo}
          userInfo={userInfo}
          validationId={validationId}
          validationPw={validationPw}
        />
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
