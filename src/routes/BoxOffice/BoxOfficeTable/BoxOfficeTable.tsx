import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { IBoxOfficeListType } from 'types/types';

import { TABLE_HEADER_WIDTH } from 'models/models';

import styles from './boxOfficeTable.module.scss';

interface IBoxOfficeDataType {
  boxOfficeData: IBoxOfficeListType[];
}

const BoxOfficeTable = ({ boxOfficeData }: IBoxOfficeDataType) => {
  const navigate = useNavigate();

  const tableBody = useMemo(() => {
    const goToDetail = (mt20id: string) => {
      navigate(`/${mt20id}`);
    };

    return boxOfficeData.map((item: IBoxOfficeListType) => {
      const { rnum, cate, prfnm, prfplcnm, prfpd, area, seatcnt, mt20id } = item;

      return (
        <tr key={`${rnum}-${prfnm}`} className={styles.tableRows}>
          <td className={styles.tableData}>{rnum}</td>
          <td className={styles.tableData}>{cate}</td>
          <td className={styles.tableData}>{prfnm}</td>
          <td className={styles.tableData}>{prfplcnm}</td>
          <td className={styles.tableData}>{prfpd}</td>
          <td className={styles.tableData}>{area}</td>
          <td className={styles.tableData}>{seatcnt}</td>
          <td>
            <button type='button' className={styles.detailBtn} onClick={() => goToDetail(mt20id)}>
              자세히 보기
            </button>
          </td>
        </tr>
      );
    });
  }, [boxOfficeData, navigate]);

  const tableTitle = useMemo(() => {
    return TABLE_HEADER_WIDTH.map(({ category }) => (
      <th key={category} className={styles.tableHead}>
        {category}
      </th>
    ));
  }, []);

  return (
    <div className={styles.tableWrap}>
      <h1 className={styles.tableMainTitle}>박스오피스 TOP50</h1>
      <table className={styles.table}>
        <colgroup>
          {TABLE_HEADER_WIDTH.map(({ id, tdWidth }) => (
            <col key={id} width={tdWidth} />
          ))}
        </colgroup>
        <thead className={styles.tableHeader}>
          <tr className={styles.tableRows}>{tableTitle}</tr>
        </thead>
        <tbody className={styles.tableBody}>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default BoxOfficeTable;
