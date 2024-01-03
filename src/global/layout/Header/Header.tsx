import {AppBar, Badge, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack
          width="100%"
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <RestaurantIcon/>
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