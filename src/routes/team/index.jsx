import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../components/header';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: '이름',
      flex: 1,
      cellClassname: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: '나이',
      haederAlign: 'left',
      align: 'left',
      cellClassname: 'name-column--cell',
    },
    {
      field: 'phone',
      headerName: '휴대전화',
      flex: 1,
      cellClassname: 'name-column--cell',
    },
    {
      field: 'email',
      headerName: 'E-Mail',
      flex: 1,
      cellClassname: 'name-column--cell',
    },
    {
      field: 'access',
      headerName: 'Access Level',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width={'60%'}
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === 'admin'
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius={'4px'}
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle={'Managing the Team Members'}></Header>
      <Box
        m="40px 0 0 0 "
        height={'75vh'}
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
