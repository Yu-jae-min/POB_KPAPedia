import { useState, useEffect, useCallback, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';

import SEO from 'components/SEO/SEO';
import Spinner from 'components/Spinner/Spinner';
import ItemList from 'components/ItemList/ItemList';
import SearchTitle from 'components/Search/SearchTitle/SearchTitle';
import SearchNoResult from 'components/Search/SearchNoResult/SearchNoResult';
import SearchInput from 'components/Search/SearchInput/SearchInput';

import { useRecoilState } from 'recoil';
import { requestNumber } from 'states/atom';

import { getAwardListApi } from 'services/api';

import useApiDataType from 'hooks/useApiDataType';
import useDebounce from 'hooks/useDebounce';

import styles from './awards.module.scss';

const Awards = () => {
  const [itemList, setItemList] = useState();
  const [filterItemList, setFilterItemList] = useState<any>();
  const [inputValue, setInputValue] = useState<string>('');
  const [request, setRequest] = useRecoilState(requestNumber);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [ref, inView] = useInView();
  const debouncedValue = useDebounce(inputValue, 300);

  const { handleXmlChange } = useApiDataType();

  const getMovieList = useCallback(async () => {
    setIsLoad(true);

    await getAwardListApi({ cpage: '1', rows: String(request) })
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

  const handleInputValue = (event: any) => {
    const { value } = event.currentTarget;
    setInputValue(value);
  };

  useEffect(() => {
    const filterData = data ?? [];
    const searchList = filterData.filter(({ prfnm }: any) =>
      prfnm.toLowerCase().includes(debouncedValue.toLowerCase())
    );

    setFilterItemList(searchList);
  }, [debouncedValue, data]);

  const fillterItemList = useMemo(() => {
    if (debouncedValue && filterItemList.length) {
      return <ItemList itemArray={filterItemList} />;
    }

    if (debouncedValue && !filterItemList.length) {
      return <SearchNoResult />;
    }

    return <ItemList itemArray={itemList ?? []} />;
  }, [debouncedValue, filterItemList, itemList]);

  const ActiveLogin = !inputValue && defaultItemList.length !== 0;

  return (
    <section className={styles.festival}>
      <SEO title='KPA Pedia - 수상작' />
      <SearchTitle mainTitle={PARAMS_TITLE.mainTitle} subTitle={PARAMS_TITLE.subTitle} />
      <SearchInput placeholder={PARAMS_TITLE.placeholder} HandleInputValue={handleInputValue} isLoading={isLoading} />
      {fillterItemList}
      {isLoad && <Spinner top={150} bottom={80} />}
      {ActiveLogin && <div ref={ref} className={styles.infiniteScrollDiv} />}
    </section>
  );
};

export default Awards;

const PARAMS_TITLE = {
  mainTitle: '원하시는 수상작을 검색해보세요!',
  subTitle: `관람을 원하시거나 관심있는 수상작을 검색해보세요. 최신 수상작에 관한 모든 정보를 확인해보실 수 있습니다.`,
  placeholder: '수상작을 입력해주세요.',
};
