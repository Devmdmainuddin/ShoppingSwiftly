import { createBrowserRouter } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import Home from '../pages/Home';
import Login from '../pages/Login';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Layouts></Layouts>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/login",
            element: <Login></Login>,
          },
      ],
    },
  ]);

  export default router