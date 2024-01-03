import {Button, Container, Stack, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function Home() {
  return (
    <Container>
      <Typography>I find self-checkout and fast food kiosks very interesting because I always notice when the UI for a
        restaurant or grocery store is particularly good or bad.</Typography>
      <Typography>This is my attempt at creating a UI that combines all the best examples I've encountered.</Typography>
      <Stack
        direction="row"
      >
        <RouterLink to="/order">
          <Button>Go to Demo</Button>
        </RouterLink>
        <RouterLink to="https://github.com/BenjinYap/food_kiosk_app">
          <Button>View on GitHub</Button>
        </RouterLink>
      </Stack>
    </Container>
  );
}

export default Home;