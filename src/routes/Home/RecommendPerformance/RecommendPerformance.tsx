import { useQuery } from 'react-query';

import Spinner from 'components/Spinner/Spinner';
import ItemList from 'components/ItemList/ItemList';
import Error from 'components/Error/Error';

import { handleXmlChange } from 'hooks/useApiDataType';

import { getPerformanceListApi } from 'services/api';

import { REQUEST_ERROR } from 'models/models';

import styles from './recommendPerformance.module.scss';

const RecommendPerformance = () => {
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

  return (
    <div className={styles.performanceWrap}>
      <h1 className={styles.title}>추천 공연</h1>
      <ItemList itemArray={data ?? []} />
      {!isLoading && isError && <Error desc={REQUEST_ERROR} paddingTop={50} height={435} />}
      {isLoading && !isError && <Spinner marginTop={220} marginBottom={220} />}
    </div>
  );
};

export default RecommendPerformance;
