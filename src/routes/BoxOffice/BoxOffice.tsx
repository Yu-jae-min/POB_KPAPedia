import { useQuery } from 'react-query';

import SEO from 'components/SEO/SEO';
import Spinner from 'components/Spinner/Spinner';
import BoxOfficeItemList from './BoxOfficeItemList/BoxOfficeItemList';
import BoxOfficeTable from './BoxOfficeTable/BoxOfficeTable';
import Error from 'components/Error/Error';

import { boxOfficeXmlChange } from 'hooks/useApiDataType';

import { getBoxOfficeListApi } from 'services/api';

import { BOXOFFICE_PARAMS_TITLE, REQUEST_ERROR } from 'models/models';

import styles from './boxOffice.module.scss';

interface IRumType {
  rnum: string;
}

const BoxOffice = () => {
  const { data, isLoading, isError } = useQuery(
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
  const thumbnailMainData = boxOfficeData.filter(({ rnum }: IRumType) => Number(rnum) < 4);
  const thumbnailSubData = boxOfficeData.filter(({ rnum }: IRumType) => Number(rnum) < 8 && Number(rnum) > 3);

  return (
    <section className={styles.boxOffice}>
      <SEO title='KPA Pedia - 예매현황' />
      <div className={styles.titleWrap}>
        <div>
          <h1 className={styles.title}>{BOXOFFICE_PARAMS_TITLE.mainTitle}</h1>
          <span className={styles.subTitle}>{BOXOFFICE_PARAMS_TITLE.subTitle}</span>
        </div>
      </div>
      {isError && <Error desc={REQUEST_ERROR} />}
      {isLoading && <Spinner top={250} bottom={250} />}
      <BoxOfficeItemList itemArray={thumbnailMainData} />
      <BoxOfficeItemList itemArray={thumbnailSubData} />
      {!isLoading && <BoxOfficeTable boxOfficeData={boxOfficeData} />}
    </section>
  );
};

export default BoxOffice;
