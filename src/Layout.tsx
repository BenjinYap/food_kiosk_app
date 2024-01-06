import {Stack} from "@mui/material";
import Header from "./global/layout/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import Sidebar from "./global/layout/Sidebar/Sidebar.tsx";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useState} from "react";
import {MockOrderApi} from "./global/api/MockOrderApi.tsx";

const sidebarWidth = 240;

let awd = new MockOrderApi();
console.log(awd.getCategories());

function Layout() {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
      <Header
        mobileSidebarOpen={mobileSidebarOpen}
        onMobileSidebarToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      />
      <Stack
        direction="row"
        sx={{height: '100%'}}
      >
        <Sidebar
          width={sidebarWidth}
          mdDown={mdDown}
          mobileSidebarOpen={mobileSidebarOpen}
          onMobileSidebarToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
        <div style={{
          width: '100%',
          overflow: 'auto',
        }}>
          <Outlet/>
        </div>
      </Stack>
    </>
  );
}

export default Layout;