import {Stack} from "@mui/material";
import Header from "./global/layout/Header/Header";
import {Outlet} from "react-router-dom";
import Sidebar from "./global/layout/Sidebar/Sidebar";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useEffect, useState} from "react";
import {MockOrderApi} from "./global/api/MockOrderApi";
import {OrderApiInterface} from "./global/api/OrderApiInterface";

const sidebarWidth = 240;


function Layout() {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [categories, setCategories] = useState(undefined);

  useEffect(() => {
    const orderApi: OrderApiInterface = new MockOrderApi();
    orderApi.getCategories().then((resp) => setCategories(resp.data));
  }, []);

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
          categories={categories}
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