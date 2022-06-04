import styles from './itemlist.module.scss';
import { useNavigate } from 'react-router-dom';

import { IAwardsListType, IPerformenceListType, IFestivalListType } from 'types/types';

interface IItemArrayType {
  itemArray: IAwardsListType[] | IPerformenceListType[] | IFestivalListType[];
}

const ItemList = ({ itemArray }: IItemArrayType) => {
  const navigate = useNavigate();

  const goToDetail = (mt20id: string) => {
    navigate(`/${mt20id}`);
  };

  return (
    <ul className={styles.itemListWrap}>
      {itemArray.map((item: IAwardsListType | IPerformenceListType | IFestivalListType) => {
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
