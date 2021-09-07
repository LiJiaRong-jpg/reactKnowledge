import Bus from "../dome/Bus";
import Cart from "../dome/Cart";
import Sandwiches from "../dome/Sandwiches";
import Tacos from "../dome/Tacos";

const routes = [
  {
    path: "/Sandwiches",
    component: Sandwiches,
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus,
      },
      {
        path: "/tacos/cart",
        component: Cart,
      },
    ],
  },
];

export default routes;
