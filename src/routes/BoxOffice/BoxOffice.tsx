import { useQuery } from 'react-query';

import SEO from 'components/SEO/SEO';
import Spinner from 'components/Spinner/Spinner';
import BoxOfficeItemList from './BoxOfficeItemList/BoxOfficeItemList';
import BoxOfficeTable from './BoxOfficeTable/BoxOfficeTable';

import { boxOfficeXmlChange } from 'hooks/useApiDataType';

import { getBoxOfficeListApi } from 'services/api';

import styles from './boxOffice.module.scss';

const BoxOffice = () => {
  const { data, isLoading } = useQuery(
    ['getBoxOfficeListApi'],
    () =>
      getBoxOfficeListApi()
        .then((res) => res.data)
        .then((xml) => boxOfficeXmlChange(xml)),
    {
      staleTime: 2 * 60 * 1000,
      cacheTime: Infinity,
      retry: 3,
    }
  );

  const boxOfficeData = data ?? [];
  const thumbnailMainData = boxOfficeData.filter(({ rnum }: any) => Number(rnum) < 4);
  const thumbnailSubData = boxOfficeData.filter(({ rnum }: any) => Number(rnum) < 8 && Number(rnum) > 3);

  return (
    <section className={styles.boxOffice}>
      <SEO title='KPA Pedia - 예매현황' />
      <div className={styles.titleWrap}>
        <div>
          <h1 className={styles.title}>{PARAMS_TITLE.mainTitle}</h1>
          <span className={styles.subTitle}>{PARAMS_TITLE.subTitle}</span>
        </div>
      </div>
      {isLoading && <Spinner top={250} bottom={250} />}
      <BoxOfficeItemList itemArray={thumbnailMainData} />
      <BoxOfficeItemList itemArray={thumbnailSubData} />
      {!isLoading && <BoxOfficeTable boxOfficeData={boxOfficeData} />}
    </section>
  );
};

export default BoxOffice;

const PARAMS_TITLE = {
  mainTitle: '흥행하고 있는 축제와 공연을 소개합니다',
  subTitle: '가장 많은 사랑을 받고 있는 공연과 축제 즐겨보세요!',
};
