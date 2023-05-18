import { Box } from '@mui/material';
import Header from '../../components/header';
import BarChart from '../../components/barChart';

const Bar = () => {
  return (
    <Box m="20px">
      <Header title={'BarChart'} subtitle={'Simple Bar Chart'} />

      <Box height={'75vh'}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
