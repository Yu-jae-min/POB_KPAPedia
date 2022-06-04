import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './boxOfficeTable.module.scss';

const BoxOfficeTable = ({ boxOfficeData }: any) => {
  const navigate = useNavigate();

  const tableBody = useMemo(() => {
    const goToDetail = (mt20id: string) => {
      navigate(`/${mt20id}`);
    };

    return boxOfficeData.map((item: any) => {
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
    return dataStructure.map(({ category }) => (
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
          {dataStructure.map(({ id, tdWidth }) => (
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

const dataStructure = [
  { id: 1, category: '순위', tdWidth: '10%' },
  { id: 2, category: '장르', tdWidth: '10%' },
  { id: 3, category: '공연명', tdWidth: '15%' },
  { id: 4, category: '공연장', tdWidth: '15%' },
  { id: 5, category: '공연기간', tdWidth: '20%' },
  { id: 6, category: '지역', tdWidth: '10%' },
  { id: 7, category: '좌석수', tdWidth: '10%' },
  { id: 8, category: '자세히 보기', tdWidth: '10%' },
];
