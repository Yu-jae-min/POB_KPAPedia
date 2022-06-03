import styles from './header.module.scss';

import { useNavigate, NavLink } from 'react-router-dom';
import { Logo } from 'assets/svg';

import Nav from '../Nav/Nav';
import { useRecoilState } from 'recoil';
import { userId } from 'states/atom';

const Header = () => {
  const [loginId, setLoginId] = useRecoilState(userId);

  const navigate = useNavigate();

  const HandleLogOut = () => {
    navigate('login');
    setLoginId('');
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <NavLink to='/'>
            <Logo className={styles.kpaLogo} />
          </NavLink>
        </div>
        <Nav />
        <ul className={styles.user}>
          <li className={styles.welcome}>
            <strong>{loginId}</strong>님 반가워요!
          </li>
          <li>
            <button type='button' className={styles.logOutBtn} onClick={HandleLogOut}>
              로그아웃
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
