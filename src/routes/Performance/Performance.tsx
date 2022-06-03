import SEO from 'components/SEO/SEO';
import useApiDataType from 'hooks/useApiDataType';
import styles from './performance.module.scss';
import { useQuery } from 'react-query';
import { getPerformanceListApi } from 'services/api';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilState } from 'recoil';
import { requestNumber } from 'states/atom';
import Spinner from 'components/Spinner/Spinner';

const Performance = () => {
  const [itemList, setItemList] = useState();
  const [filterList, setFilterList] = useState();
  const [inputValue, setInputValue] = useState<string>();
  const [request, setRequest] = useRecoilState(requestNumber);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [ref, inView] = useInView();

  const navigate = useNavigate();
  const { handleXmlChange } = useApiDataType();

  const { data, isLoading, isError } = useQuery(
    ['getPerformanceDetailListApi'],
    () =>
      getPerformanceListApi({ cpage: '1', rows: '99' })
        .then((res) => res.data)
        .then((xml) => handleXmlChange(xml)),
    {
      staleTime: 2 * 60 * 1000,
      cacheTime: Infinity,
      retry: 3,
    }
  );

  const getMovieList = useCallback(async () => {
    setIsLoad(true);

    await getPerformanceListApi({ cpage: '1', rows: String(request) })
      .then((res) => res.data)
      .then((xml) => setItemList(handleXmlChange(xml)));

    setIsLoad(false);
  }, [request, setItemList, handleXmlChange]);

  const dataCheck = itemList ?? [];

  const goToDetail = (mt20id: string) => {
    navigate(`/${mt20id}`);
  };

  const getSearchList = () => {
    alert('하이');
  };

  useEffect(() => {
    getMovieList();
  }, [request, getMovieList]);

  useEffect(() => {
    if (inView) {
      setRequest((prev) => prev + 5);
    }
  }, [inView, setRequest]);

  return (
    <div className={styles.performance}>
      <SEO title='공연검색' />
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>원하시는 공연을 검색해보세요!</h1>
        <span className={styles.subTitle}>
          관람을 원하시거나 관심있는 공연을 검색해보세요.
          <br />
          최신 공연에 관한 모든 공연 정보를 확인해보실 수 있습니다.
        </span>
        <form onSubmit={getSearchList} className={styles.searchFoam}>
          <input type='text' className={styles.searchInput} placeholder='공연명을 입력해주세요.' maxLength={30} />
          <button type='submit' className={styles.searchBtn}>
            검색
          </button>
        </form>
      </div>
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
      {isLoad && <Spinner top={150} bottom={80} />}
      {dataCheck.length !== 0 && <div ref={ref} className={styles.infiniteScrollDiv} />}
    </div>
  );
};

export default Performance;
