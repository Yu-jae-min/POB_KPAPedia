import { useQuery } from 'react-query';

import Spinner from 'components/Spinner/Spinner';
import ItemList from 'components/ItemList/ItemList';

import { handleXmlChange } from 'hooks/useApiDataType';

import { getPerformanceListApi } from 'services/api';

import styles from './recommendPerformance.module.scss';

const RecommendPerformance = () => {
  const { data, isLoading } = useQuery(
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

  return (
    <div className={styles.performanceWrap}>
      <h1 className={styles.title}>추천 공연</h1>
      <ItemList itemArray={data ?? []} />
      {isLoading && <Spinner top={220} bottom={220} />}
    </div>
  );
};

export default RecommendPerformance;
