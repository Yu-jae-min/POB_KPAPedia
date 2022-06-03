import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss';
import { cx } from 'styles';
import { useResetRecoilState } from 'recoil';
import { requestNumber } from 'states/atom';

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

const NAV_LIST = [
  {
    key: 1,
    title: '홈',
    path: '/',
  },
  {
    key: 2,
    title: '예매현황',
    path: 'boxOffice',
  },
  {
    key: 3,
    title: '공연목록',
    path: 'performance',
  },
  {
    key: 4,
    title: '축제목록',
    path: 'festival',
  },
  {
    key: 5,
    title: '수상작',
    path: 'award',
  },
];
