import TopBar from './routes/global/topbar';
import Dashboard from './routes/dashboard';
import SideBar from './routes/global/sidebar';
import Team from './routes/team';
// import Invoice from './routes/invoice';
// import Contacts from './routes/dContacts';
// import Bar from './routes/bar';
// import Form from './routes/form';
// import Line from './routes/line';
// import Pie from './routes/pie';
// import FAQ from './routes/faq';
// import Geography from './routes/geography';
// import Calendar from './routes/calendar';

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
              <Route path="/" elements={<Dashboard />}></Route>
              <Route path="/team" elements={<Team />}></Route>
              {/* <Route path="/contacts" elements={<Contacts />}></Route> */}
              {/* <Route path="/invoice" elements={<Invoice />}></Route> */}
              {/* <Route path="/bar" elements={<Bar />}></Route> */}
              {/* <Route path="/pie" elements={<Pie />}></Route> */}
              {/* <Route path="/line" elements={<Line />}></Route> */}
              {/* <Route path="/faq" elements={<FAQ />}></Route> */}
              {/* <Route path="/geography" elements={<Geography />}></Route> */}
              {/* <Route path="/calendar" elements={<Calendar />}></Route> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
