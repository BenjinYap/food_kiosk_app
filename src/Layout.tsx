import {Stack} from "@mui/material";
import Header from "./global/layout/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import Sidebar from "./global/layout/Sidebar/SIdebar.tsx";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const sidebarWidth = 240;

function Layout() {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Header/>
      <Stack
        direction="row"
        sx={{height: '100%'}}
      >
        <Sidebar width={sidebarWidth}/>
        <div style={{
          width: '100%',
          paddingLeft: mdDown ? sidebarWidth : 0,
          overflow: 'auto',
        }}>
          <Outlet/>
        </div>
      </Stack>
    </>
  );
}

export default Layout;