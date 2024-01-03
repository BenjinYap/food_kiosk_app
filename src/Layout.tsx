import {Container, Stack} from "@mui/material";
import Header from "./global/layout/Header/Header.tsx";
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <>
      <Header/>
      <Stack spacing={2}>
        <Outlet/>
      </Stack>
    </>
  );
}

export default Layout;