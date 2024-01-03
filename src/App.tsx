import './App.css'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import routes from "./routes.jsx";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
console.log(theme);

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  )
}

export default App
