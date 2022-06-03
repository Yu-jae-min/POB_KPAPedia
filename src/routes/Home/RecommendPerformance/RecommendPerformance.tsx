import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getPerformanceListApi } from 'services/api';

import styles from './recommendPerformance.module.scss';

import useApiDataType from 'hooks/useApiDataType';

import Spinner from 'components/Spinner/Spinner';

const RecommendPerformance = () => {
  const navigate = useNavigate();
  const { handleXmlChange } = useApiDataType();

  const { data, isLoading, isError } = useQuery(
    ['getPerformanceListApi'],
    () =>
      getPerformanceListApi({ cpage: '1', rows: '5' })
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
    <div className={styles.performanceWrap}>
      <h1 className={styles.title}>추천 공연</h1>
      <ul className={styles.itemListWrap}>
        {dataCheck.map((item: any) => {
          const { mt20id, fcltynm, poster, genrenm, prfnm, prfpdfrom, prfpdto } = item;
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
      {isLoading && <Spinner top={220} bottom={220} />}
    </div>
  );
};

export default RecommendPerformance;
