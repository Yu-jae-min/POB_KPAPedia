import TestOne from './TestOne/TestOne';
import TestTwo from './TestTwo/TestTwo';
import TestThree from './TestThree/TestThree';

import styles from './Routes.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <TestOne />
      <TestTwo />
      <TestThree />
    </div>
  );
};

export default App;
