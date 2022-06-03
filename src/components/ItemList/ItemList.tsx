import styles from './itemlist.module.scss';
import { useNavigate } from 'react-router-dom';

const ItemList = ({ itemArray }: any) => {
  const navigate = useNavigate();

  const goToDetail = (mt20id: string) => {
    navigate(`/${mt20id}`);
  };

  return (
    <ul className={styles.itemListWrap}>
      {itemArray.map((item: any) => {
        const { mt20id, fcltynm, poster, genrenm, prfnm, prfpdfrom, prfpdto } = item;
        const key = `${prfnm}+${fcltynm}`;

        return (
          <li key={key} className={styles.itemList}>
            <button type='button' onClick={() => goToDetail(mt20id)} className={styles.detailBtn}>
              <div className={styles.imgWrap}>
                <img className={styles.poster} src={poster} alt={fcltynm} />
              </div>
              <div className={styles.descWrap}>
                <p className={styles.itemTitle}>{prfnm}</p>
                <p className={styles.period}>
                  {prfpdfrom} ~ {prfpdto}
                </p>
                <p className={styles.host}>{fcltynm}</p>
              </div>
              <span className={styles.genrenm}>{genrenm}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
