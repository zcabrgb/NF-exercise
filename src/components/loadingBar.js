import ProgressBar from 'react-bootstrap/ProgressBar';
import useInterval from '../customHooks/useInterval';
import React, {useState} from 'react';

const LoadingBar = () => {
  const [percentage, setPercentage] = useState(0);
  useInterval(() => {
    // Your custom logic here
    setPercentage((percentage + 1 / (600 / 250)) % 100);
  }, 250);
  // console.log('adasd', props.percentage);
  return <ProgressBar variant="warning" now={percentage} />;
};

export default LoadingBar;
