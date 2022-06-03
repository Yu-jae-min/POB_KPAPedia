import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
