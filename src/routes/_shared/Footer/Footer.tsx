import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTitle}>
        <span>
          공연과 축제 목록은 <strong>★ 매일매일 업데이트</strong> 됩니다.
        </span>
      </div>
      <div className={styles.footerContent}>
        <ul className={styles.list}>
          {FOOTER_LIST.map(({ id, name }) => (
            <li key={id} className={styles.listItem}>
              {name}
            </li>
          ))}
        </ul>
        <p className={styles.copyright}>© 2022 by KPI, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

const FOOTER_LIST = [
  {
    id: 1,
    name: '이용약관',
  },
  {
    id: 2,
    name: '개인정보취급방침',
  },
  {
    id: 3,
    name: '매장찾기',
  },
  {
    id: 4,
    name: 'CONTACT',
  },
  {
    id: 5,
    name: '사이트 맵',
  },
];
