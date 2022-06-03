import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getAwardListApi } from 'services/api';

import styles from './recommendAward.module.scss';

import useApiDataType from 'hooks/useApiDataType';
import { useEffect } from 'react';

const RecommendAward = () => {
  const navigate = useNavigate();
  const { handleXmlChange } = useApiDataType();

  const { data, isLoading, isError } = useQuery(
    ['getAwardListApi'],
    () =>
      getAwardListApi({ cpage: '1', rows: '5' })
        .then((res) => res.data)
        .then((xml) => handleXmlChange(xml)),
    {
      staleTime: 2 * 60 * 1000,
      cacheTime: Infinity,
      retry: 3,
    }
  );

  const goToDetail = (mt20id: string) => {
    navigate(`/${mt20id}`);
  };

  const dataCheck = data ?? [];

  return (
    <div className={styles.awardWrap}>
      <h1 className={styles.title}>추천 수상작</h1>
      <ul className={styles.itemListWrap}>
        {dataCheck.map((item: any) => {
          const { mt20id, prfnm, prfpdfrom, prfpdto, fcltynm, poster, genrenm } = item;
          const key = `${prfnm}+${fcltynm}`;

          return (
            <li key={key} className={styles.itemList}>
              <button type='button' onClick={() => goToDetail(mt20id)} className={styles.detailBtn}>
                <img className={styles.poster} src={poster} alt={fcltynm} />
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
    </div>
  );
};

export default RecommendAward;
