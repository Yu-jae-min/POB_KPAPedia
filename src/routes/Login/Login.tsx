import { useState } from 'react';
import styles from './login.module.scss';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import LoginModal from 'components/Modal/LoginModal/LoginModal';
import ModalPortal from 'components/Modal/ModalPortal';
import { userId } from 'states/atom';
import { LoginLogo } from 'assets/svg';
import SEO from 'components/SEO/SEO';

const Login = () => {
  const [userInfo, setUserInfo] = useState({ id: '', pw: '' });
  const [, setUserLoginId] = useRecoilState(userId);
  const [modalOpen, setModalOpen] = useState<boolean>();
  const btnActive = userInfo.id && userInfo.pw;

  const navigate = useNavigate();

  const handleUserInfo = (event: any) => {
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
          <label htmlFor='id' className={styles.idLabel}>
            USERNAME
          </label>
          <input
            type='text'
            name='id'
            className={styles.idInput}
            onChange={handleUserInfo}
            maxLength={20}
            autoComplete='off'
          />
          <label htmlFor='pw' className={styles.pwLabel}>
            PASSWORD
          </label>
          <input
            type='password'
            name='pw'
            className={styles.pwInput}
            onChange={handleUserInfo}
            maxLength={20}
            autoComplete='off'
          />
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

// 아이디는 6~20자의 영문자 또는 숫자의 조합입니다.
// 비밀번호는 8자 이상의 영문, 숫자, 특수문자의 조합입니다.
