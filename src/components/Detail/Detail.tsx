import { useParams } from 'react-router-dom';
import { getDetailApi } from 'services/api';
import styles from './detail.module.scss';
import { useQuery } from 'react-query';
import { handleXmlChange } from 'hooks/useApiDataType';

const Detail = () => {
  const param: any = useParams();

  const { data } = useQuery(
    ['getDetailApi'],
    () =>
      getDetailApi(param.detail)
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

const PERPOMANCE_MANNER_LIST_BEFORE = [
  {
    id: 1,
    title: '관람할 작품정보를 확인하시면 좋아요.',
    description:
      '관람 전, 공연에 대해 간단하게 알아두시면 공연을 더욱 즐겁게 관람하실 수 있습니다. 재단 홈페이지의 공연정보를 읽거나, 혹은 공연장에서 시간 여유를 가지고 오셔서 프로그램이나 리플렛을 살펴보세요.',
  },
  {
    id: 2,
    title: '공연시간을 확인해 주세요.',
    description: '공연마다 공연시간이 다릅니다. 정확한 시간을 확인하셔서 공연 시간에 늦지 않도록 해주세요.',
  },
  {
    id: 3,
    title: '관람연령을 확인해 주세요.',
    description:
      '관람 내용에 따라 관람연령 제한이 있습니다. 특히 관람연령 제한으로 인한 당일 티켓환불은 어려우니 예매 전 미리 확인해 주시기 바랍니다. (어린이와 동행 시, 연령을 확인 할 수 있는 자료를 미리 준비해 오신다면 원활한 입장이 가능합니다.)',
  },
  {
    id: 4,
    title: '옷차림은 공연에 방해가 안 되도록!',
    description:
      '특별한 드레스코드는 없습니다. 간편하면서도 다른사람에게 불쾌감을 주지 않는 옷차림이면 충분합니다. 바스락거리는 소리가 많이 나는 옷이나 반짝이는 액세서리가 달린 디자인, 모자 착용, 불빛이 나는 운동화 등 관람에 방해가 될 수 있으니 삼가해 주시기 바랍니다.',
  },
];

const PERPOMANCE_MANNER_LIST_COMES = [
  {
    id: 1,
    title: '객성 입장 시간을 지켜주세요.',
    description:
      '공연장 도착은 시작 30분 전, 객석입장은 10분 전에 완료해주세요. 원칙적으로 공연시작 이후 공연장 입장은 금지이나, 지연 관객을 위한 입장이 있다면 안내원의 안내에 따라 빈 좌석에 착석하여 주시고 휴식시간에 본 좌석으로 이동하여 주시기 바랍니다.',
  },
  {
    id: 2,
    title: '예매한 좌석에 착석해주세요.',
    description:
      '비어있는 좌석이라도 예매한 관객이 늦게 도착하는 것일 수 있어요. 공연 중 자리를 이동하는 행동은 다른 관객들의 관람에 방해가 될 수 있습니다. 공연 전후로 공연장 출입하실 때에는 반드시 입장권을 소지하시기 바랍니다.',
  },
  {
    id: 3,
    title: '휴대폰은 잠시 꺼두셔도 좋습니다.',
    description:
      '공연 시작 전 휴대폰 및 호출기 등의 전원을 확인해 주세요. 공연 도중 아주 작은 벨소리, 진동소리와 불빛도 출연자나 다른 관객들에게 큰 방해가 됩니다. 또한 공연장 내에서 통화를 하거나 통화를 위해 이동하는 행위는 금지되어 있습니다.',
  },
  {
    id: 4,
    title: '협의되지 않은 사진 촬영 및 녹음은 불가합니다.',
    description:
      '공연 중 촬영은 방해가 됨은 물론 권리를 침해하는 행동입니다. 공연 장면 뿐 아니라 무대 장치까지도 모두 저작권 보호 대상이랍니다. 셀카 촬영도 하실수 없어요.',
  },
  {
    id: 5,
    title: '공연장 내에서는 음식물 섭취는 곤란합니다.',
    description: '모든 일체의 음식물은 공연장 안으로 가져갈 수 없으니 공연 전 미리 드시거나, 물품보관소에 맡겨주세요.',
  },
  {
    id: 6,
    title: '공연 관람 중 옆사람과의 대화는 삼가주세요.',
    description:
      '아무리 작은 대화소리라도 공연장에서는 크게 들리는 경우가 많아, 출연자와 다른 관객들에게 피해가 될 수 있습니다. 특히 어린이와 함께 관람하는 경우 공연 중 작품설명, 움직임 등에 더욱 주의해 주세요. 또한 휴식시간에도 조용한 목소리로 대화해주세요.',
  },
  {
    id: 7,
    title: '공연 관람 중 과한 움직임이나 소리가나는 행동을 자제해 주세요.',
    description:
      '공연장 입장 후 겉옷을 미리 벗어둡니다. 기침과 재채기는 손으로 가리고 최대한 작게, 프로그램북 확인은 공연 전이나 휴식시간을 활용해 주세요.',
  },
  {
    id: 8,
    title: '공연에 방해가 되는 물품은 보관소에 맡겨주세요.',
    description: '부피가 크거나 부스럭거리는 소리가 나는 물품, 꽃다발 등은 물품보관소에 맡겨주세요.',
  },
];
