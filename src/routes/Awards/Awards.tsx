import { useState, useEffect, useCallback, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';

import SEO from 'components/SEO/SEO';
import Spinner from 'components/Spinner/Spinner';
import ItemList from 'components/ItemList/ItemList';
import SearchTitle from 'components/Search/SearchTitle/SearchTitle';
import Error from 'components/Error/Error';
import SearchInput from 'components/Search/SearchInput/SearchInput';

import { handleXmlChange } from 'hooks/useApiDataType';
import useDebounce from 'hooks/useDebounce';

import { useRecoilState } from 'recoil';
import { requestNumber } from 'states/atom';

import { getAwardListApi } from 'services/api';

import { IAwardsListType } from 'types/types';

import { NO_RESULT, REQUEST_ERROR, AWARDS_PARAMS_TITLE } from 'models/models';

import styles from './awards.module.scss';

interface IPrfnmType {
  prfnm: string;
}

const Awards = () => {
  const [itemList, setItemList] = useState();
  const [filterItemList, setFilterItemList] = useState<IAwardsListType[]>();
  const [inputValue, setInputValue] = useState<string>('');
  const [request, setRequest] = useRecoilState(requestNumber);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [ref, inView] = useInView();
  const debouncedValue = useDebounce(inputValue, 300);

  const getMovieList = useCallback(async () => {
    setIsError(false);
    setIsLoad(true);

    await getAwardListApi({ cpage: '1', rows: String(request) })
      .then((res) => res.data)
      .then((xml) => setItemList(handleXmlChange(xml)))
      .catch(() => setIsError(true));

    setIsLoad(false);
  }, [request]);

  const defaultItemList = itemList ?? [];

  useEffect(() => {
    getMovieList();
  }, [request, getMovieList]);

  useEffect(() => {
    if (!inView) return;

    if (inView) {
      setRequest((prev) => prev + 5);
    }
  }, [inView, setRequest]);

  const { data, isLoading } = useQuery(
    ['getAwardDetailListApi'],
    () =>
      getAwardListApi({ cpage: '1', rows: '99' })
        .then((res) => res.data)
        .then((xml) => handleXmlChange(xml)),
    {
      staleTime: 2 * 60 * 1000,
      cacheTime: Infinity,
      retry: 3,
    }
  );

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setInputValue(value);
  };

  useEffect(() => {
    const filterData = data ?? [];
    const searchList = filterData.filter(({ prfnm }: IPrfnmType) =>
      prfnm.toLowerCase().includes(debouncedValue.toLowerCase())
    );

    setFilterItemList(searchList);
  }, [debouncedValue, data]);

  const fillterItemList = useMemo(() => {
    if (debouncedValue && filterItemList?.length) {
      return <ItemList itemArray={filterItemList} />;
    }

    if (debouncedValue && !filterItemList?.length) {
      return <Error desc={NO_RESULT} />;
    }

    if (!isLoad && isError) {
      return <Error desc={REQUEST_ERROR} />;
    }

    return <ItemList itemArray={itemList ?? []} />;
  }, [debouncedValue, filterItemList, isError, itemList, isLoad]);

  const ActiveLogin = !inputValue && defaultItemList.length !== 0;

  return (
    <section className={styles.performance}>
      <SEO title='KPA Pedia - 수상작' />
      <SearchTitle mainTitle={AWARDS_PARAMS_TITLE.mainTitle} subTitle={AWARDS_PARAMS_TITLE.subTitle} />
      <SearchInput
        placeholder={AWARDS_PARAMS_TITLE.placeholder}
        handleInputValue={handleInputValue}
        isLoading={isLoading}
      />
      {fillterItemList}
      {isLoad && !isError && <Spinner marginTop={150} marginBottom={80} />}
      {ActiveLogin && <div ref={ref} className={styles.infiniteScrollDiv} />}
    </section>
  );
};

export default Awards;
