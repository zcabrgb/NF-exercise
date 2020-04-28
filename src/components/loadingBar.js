import React, {useState} from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';

import useInterval from '../customHooks/useInterval';

const LoadingBar = () => {
  const [percentage, setPercentage] = useState(0);
  useInterval(() => {
    setPercentage((percentage + 1 / (600 / 250)) % 100);
  }, 250);
  return <ProgressBar variant="warning" now={percentage} />;
};

export default LoadingBar;
