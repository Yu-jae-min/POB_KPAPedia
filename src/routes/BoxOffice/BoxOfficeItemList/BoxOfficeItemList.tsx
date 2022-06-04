import { useNavigate } from 'react-router-dom';

import styles from './boxOfficeItemList.module.scss';

const BoxOfficeItemList = ({ itemArray }: any) => {
  const thumnailCheck = itemArray.length < 4;
  const navigate = useNavigate();

  const goToDetail = (mt20id: string) => {
    navigate(`/${mt20id}`);
  };

  return (
    <ul className={thumnailCheck ? styles.mainItemListWrap : styles.subItemListWrap}>
      {itemArray.map((item: any) => {
        const { prfplcnm, prfnm, rnum, poster, mt20id } = item;
        const key = `${prfnm}+${rnum}`;

        return (
          <li key={key} className={styles.itemList}>
            <button type='button' onClick={() => goToDetail(mt20id)} className={styles.detailBtn}>
              <div className={styles.imgWrap}>
                <img className={styles.poster} src={poster} alt={prfplcnm} />
              </div>
              <span className={styles.rnum}>{rnum}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default BoxOfficeItemList;
