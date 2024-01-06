import Home from "./pages/home/Home.tsx";
import OrderLayout from "./pages/order/OrderLayout.tsx";
import Featured from "./pages/order/featured/Featured.tsx";
import Layout from "./Layout.tsx";

const routes = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "/order",
        element: <OrderLayout/>,
        children: [
          {
            path: "",
            element: <Featured/>,
          },
        ],
      }
    ],
  },
];

export default routes;