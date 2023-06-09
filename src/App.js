import TopBar from './routes/global/topbar';
import Dashboard from './routes/dashboard';
import SideBar from './routes/global/sidebar';
import Team from './routes/team';
import Invoices from './routes/invoice';
import Contacts from './routes/contacts';
import Form from './routes/form';
import Calendar from './routes/calendar';
import FAQ from './routes/faq';
import Bar from './routes/bar';
import Pie from './routes/pie';
import Line from './routes/line';

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path={'/'} element={<Dashboard />} />
              <Route path={'/team'} element={<Team />} />
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoice" element={<Invoices />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/line" element={<Line />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
