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

import { getFestivalListApi } from 'services/api';

import { IFestivalListType } from 'types/types';

import { NO_RESULT, REQUEST_ERROR, FESTIVAL_PARAMS_TITLE } from 'models/models';

import styles from './festival.module.scss';

interface IPrfnmType {
  prfnm: string;
}

const Festival = () => {
  const [itemList, setItemList] = useState();
  const [filterItemList, setFilterItemList] = useState<IFestivalListType[]>();
  const [inputValue, setInputValue] = useState<string>('');
  const [request, setRequest] = useRecoilState(requestNumber);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [ref, inView] = useInView();
  const debouncedValue = useDebounce(inputValue, 300);

  const getMovieList = useCallback(async () => {
    setIsLoad(true);

    await getFestivalListApi({ cpage: '1', rows: String(request) })
      .then((res) => res.data)
      .then((xml) => setItemList(handleXmlChange(xml)));

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
    ['getFestivalDetailListApi'],
    () =>
      getFestivalListApi({ cpage: '1', rows: '99' })
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

    return <ItemList itemArray={itemList ?? []} />;
  }, [debouncedValue, filterItemList, itemList]);

  const ActiveLogin = !inputValue && defaultItemList.length !== 0;

  return (
    <section className={styles.festival}>
      <SEO title='KPA Pedia - 축제목록' />
      <SearchTitle mainTitle={FESTIVAL_PARAMS_TITLE.mainTitle} subTitle={FESTIVAL_PARAMS_TITLE.subTitle} />
      <SearchInput
        placeholder={FESTIVAL_PARAMS_TITLE.placeholder}
        handleInputValue={handleInputValue}
        isLoading={isLoading}
      />
      {fillterItemList}
      {isLoad && <Spinner top={150} bottom={80} />}
      {ActiveLogin && <div ref={ref} className={styles.infiniteScrollDiv} />}
    </section>
  );
};

export default Festival;
