import { Box } from '@mui/material';
import Header from '../../components/header';
import LineChart from '../../components/lineChart';

const Line = () => {
  return (
    <Box m="20px">
      <Header title={'LineChart'} subtitle={'Simple Line Chart'} />

      <Box height={'75vh'}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
