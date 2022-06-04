import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Spinner from 'components/Spinner/Spinner';
import Error from 'components/Error/Error';

import { handleXmlChange } from 'hooks/useApiDataType';

import { getDetailApi } from 'services/api';

import { PERPOMANCE_MANNER_LIST_BEFORE, REQUEST_ERROR, PERPOMANCE_MANNER_LIST_COMES } from 'models/models';

import styles from './detail.module.scss';

const Detail = () => {
  const { detail } = useParams();
  const detailParams = detail ?? '';

  const { data, isLoading, isError } = useQuery(
    ['getDetailApi'],
    () =>
      getDetailApi(detailParams)
        .then((res) => res.data)
        .then((xml) => handleXmlChange(xml)),
    {
      staleTime: 0,
      cacheTime: 0,
      retry: 3,
    }
  );

  const dataCheck = data ?? [];

  return (
    <div className={styles.performanceDetail}>
      {dataCheck?.map((item) => {
        const { prfnm, prfpdfrom, prfpdto, fcltynm, poster, genrenm, prfage, prfcast, dtguidance, prfruntime } = item;
        const key = `${prfnm}+${fcltynm}`;

        return (
          <div key={key} className={styles.contentWrap}>
            <img src={poster} alt={prfnm} className={styles.poster} />
            <div className={styles.descWrap}>
              <span className={styles.genrenm}>{genrenm}</span>
              <span className={styles.prfage}>{prfage}</span>
              <p className={styles.prfnm}>{prfnm}</p>
              <ul className={styles.descListWrap}>
                <li className={styles.descList}>
                  <span className={styles.descListTitle}>공연 장소</span>
                  <span className={styles.detailDescription}>{fcltynm}</span>
                </li>
                <li className={styles.descList}>
                  <span className={styles.descListTitle}>출연 배우</span>
                  <span className={styles.detailDescription}>{prfcast}</span>
                </li>
                <li className={styles.descList}>
                  <span className={styles.descListTitle}>티겟 예매</span>
                  <span className={styles.detailDescription}>현장 예매, 티켓 예매 사이트</span>
                </li>
                <li className={styles.descList}>
                  <span className={styles.descListTitle}>공연 날짜</span>
                  <span className={styles.detailDescription}>{dtguidance}</span>
                </li>
                <li className={styles.descList}>
                  <span className={styles.descListTitle}>공연 기간</span>
                  <span className={styles.detailDescription}>
                    {prfpdfrom} ~ {prfpdto}
                  </span>
                </li>
                <li className={styles.descList}>
                  <span className={styles.descListTitle}>공연 시간</span>
                  <span className={styles.detailDescription}>{prfruntime}</span>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
      {isError && <Error desc={REQUEST_ERROR} paddingTop={185} height={465} />}
      {isLoading && <Spinner marginTop={200} marginBottom={270} />}
      <div className={styles.performanceMannerWrap}>
        <div className={styles.beforeWrap}>
          <span className={styles.mainTitle}>공연장 오기 전</span>
          <ul>
            {PERPOMANCE_MANNER_LIST_BEFORE.map((MannerListBefore) => {
              const { id, title, description } = MannerListBefore;
              return (
                <li key={id} className={styles.listWrap}>
                  <span className={styles.descIndex}>{id}</span>
                  <span className={styles.title}>{title}</span>
                  <p className={styles.desc}>{description}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.afterWrap}>
          <span className={styles.mainTitle}>공연장에서</span>
          <ul>
            {PERPOMANCE_MANNER_LIST_COMES.map((MannerListComes) => {
              const { id, title, description } = MannerListComes;
              return (
                <li key={id} className={styles.listWrap}>
                  <span className={styles.descIndex}>{id}</span>
                  <span className={styles.title}>{title}</span>
                  <p className={styles.desc}>{description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
