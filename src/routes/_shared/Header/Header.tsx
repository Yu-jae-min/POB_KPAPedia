import { useNavigate, NavLink } from 'react-router-dom';

import Nav from '../Nav/Nav';

import { useRecoilState } from 'recoil';
import { userId } from 'states/atom';

import styles from './header.module.scss';
import { Logo } from 'assets/svg';

const Header = () => {
  const [loginId, setLoginId] = useRecoilState(userId);

  const navigate = useNavigate();

  const handleLogOut = () => {
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
            <button type='button' className={styles.logOutBtn} onClick={handleLogOut}>
              로그아웃
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
