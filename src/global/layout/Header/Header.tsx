import {AppBar, Badge, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type HeaderProps = {
  mobileSidebarOpen: boolean,
  onMobileSidebarToggle: () => void,
};

function Header(props: HeaderProps) {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack
          width="100%"
          direction="row"
          spacing={2}
          alignItems="center"
        >
          {mdDown ? (
            <IconButton onClick={() => props.onMobileSidebarToggle()}>
              {props.mobileSidebarOpen ? <CloseIcon/> : <MenuIcon/>}
            </IconButton>
          ) : (
            <RestaurantIcon/>
          )}
          <Typography
            flexGrow={1}
            textAlign="left"
          >
            Food Kiosk App
          </Typography>
          <Stack
            direction="row"
          >
            <IconButton>
              <Badge
                badgeContent="0"
                color="primary"
              >
                <ShoppingCartIcon/>
              </Badge>
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;