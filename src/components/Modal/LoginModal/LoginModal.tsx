import styles from './loginModal.module.scss';

const LoginModal = ({ onClose }: any) => {
  return (
    <div className={styles.loginModal}>
      <div className={styles.content}>
        <h1 className={styles.title}>로그인 에러 !</h1>
        <p className={styles.desc}>아이디와 비밀번호 모두 입력해주세요.</p>
        <button type='button' className={styles.closeBtn} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
