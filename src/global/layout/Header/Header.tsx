import {AppBar, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {Link as RouterLink} from "react-router-dom";

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
              <ShoppingCartIcon/>
            </IconButton>
            <RouterLink to="/">
              <IconButton>
                <QuestionMarkIcon/>
              </IconButton>
            </RouterLink>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;