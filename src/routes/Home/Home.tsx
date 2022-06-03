import SEO from 'components/SEO/SEO';
import styles from './home.module.scss';
import RecommendPerformance from './RecommendPerformance/RecommendPerformance';
import RecommendFestival from './RecommendFestival/RecommendFestival';
import RecommendAward from './RecommendAwards/RecommendAward';

const Home = () => {
  return (
    <div className={styles.home}>
      <SEO title='KPA Pedia - 홈' />
      <RecommendPerformance />
      <RecommendFestival />
      <RecommendAward />
    </div>
  );
};

export default Home;
