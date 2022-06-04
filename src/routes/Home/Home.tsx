import SEO from 'components/SEO/SEO';

import RecommendPerformance from './RecommendPerformance/RecommendPerformance';
import RecommendFestival from './RecommendFestival/RecommendFestival';
import RecommendAward from './RecommendAwards/RecommendAward';

import styles from './home.module.scss';

const Home = () => {
  return (
    <section className={styles.home}>
      <SEO title='KPA Pedia - 홈' />
      <RecommendPerformance />
      <RecommendFestival />
      <RecommendAward />
    </section>
  );
};

export default Home;
