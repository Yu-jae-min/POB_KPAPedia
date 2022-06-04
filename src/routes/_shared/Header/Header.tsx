import { useEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import Nav from '../Nav/Nav';

import { useCheckLogin } from 'hooks/useLoginCheck';

import styles from './header.module.scss';
import { Logo } from 'assets/svg';

import store from 'store';

const Header = () => {
  const { loginCheck, logOut } = useCheckLogin();

  useEffect(() => {
    loginCheck();
  }, [loginCheck]);

  const getStoreId = useMemo(() => {
    return store.get('login');
  }, []);

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
            <strong>{getStoreId?.userId}</strong>님 반가워요!
          </li>
          <li>
            <button type='button' className={styles.logOutBtn} onClick={logOut}>
              로그아웃
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
