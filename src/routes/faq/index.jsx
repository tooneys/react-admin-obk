import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import Header from '../../components/header';
import ExpandMore from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title={'FAQ'} subtitle={'Question'} />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            자주 묻는 질문? 0
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          diam a ipsum eleifend euismod. Nullam convallis,
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            자주 묻는 질문? 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          diam a ipsum eleifend euismod. Nullam convallis,
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            자주 묻는 질문? 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          diam a ipsum eleifend euismod. Nullam convallis,
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            자주 묻는 질문? 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          diam a ipsum eleifend euismod. Nullam convallis,
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
