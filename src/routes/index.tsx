import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../shared/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "*",
    element: <NotFound />, 
  },
]);

export default routes;
