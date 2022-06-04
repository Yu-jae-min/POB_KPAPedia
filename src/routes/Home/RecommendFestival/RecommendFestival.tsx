import { useQuery } from 'react-query';

import Spinner from 'components/Spinner/Spinner';
import ItemList from 'components/ItemList/ItemList';
import Error from 'components/Error/Error';

import { handleXmlChange } from 'hooks/useApiDataType';

import { getFestivalListApi } from 'services/api';

import { REQUEST_ERROR } from 'models/models';

import styles from './recommendFestival.module.scss';

const RecommendFestival = () => {
  const { data, isLoading, isError } = useQuery(
    ['getFestivalListApi'],
    () =>
      getFestivalListApi({ cpage: '1', rows: '5' })
        .then((res) => res.data)
        .then((xml) => handleXmlChange(xml)),
    {
      staleTime: 2 * 60 * 1000,
      cacheTime: Infinity,
      retry: 3,
    }
  );

  return (
    <div className={styles.festivalWrap}>
      <h1 className={styles.title}>추천 축제</h1>
      <ItemList itemArray={data ?? []} />
      {isError && <Error desc={REQUEST_ERROR} />}
      {isLoading && <Spinner top={220} bottom={220} />}
    </div>
  );
};

export default RecommendFestival;
