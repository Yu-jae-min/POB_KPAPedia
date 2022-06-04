import { NavLink } from 'react-router-dom';
import { cx } from 'styles';

import { useResetRecoilState } from 'recoil';
import { requestNumber } from 'states/atom';

import { NAV_LIST } from 'models/models';

import styles from './nav.module.scss';

const Nav = () => {
  const InfiniteScrollReset = () => {
    useResetRecoilState(requestNumber);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {NAV_LIST.map(({ key, title, path }) => {
          return (
            <li key={key}>
              <NavLink
                to={path}
                className={({ isActive }) => cx({ [styles.isActive]: isActive })}
                onClick={InfiniteScrollReset}
              >
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
