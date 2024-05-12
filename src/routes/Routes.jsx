import { createBrowserRouter } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyQueries from '../pages/MyQueries';
import Queries from '../pages/Queries';
import QueriesDetails from '../pages/QueriesDetails'
import MyRecommendation from '../pages/MyRecommendation';
import QueriesUpdate from '../pages/QueriesUpdate';
import ErrorPage from '../ErrorPage/ErrorPage';
import AddQueries from '../components/AddQueries';
import RecommendationMe from '../pages/RecommendationMe';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Layouts></Layouts>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/login",
            element: <Login></Login>,
          },
          {
            path: "/register",
            element: <Register></Register>,
          },
          {
            path: "/queries",
            element: <Queries></Queries>,
            // loader: () => fetch(`${import.meta.env.VITE_API_URL}/queriesCount`)
          },
          {
            path: "/queries/:id",
            element: <QueriesDetails></QueriesDetails>,
            loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`)
          },
          {
            path: "/UpdateQueries/:id",
            element: <QueriesUpdate></QueriesUpdate>,
            loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`)
          },
          {
            path: "/addQueries",
            element: <AddQueries></AddQueries>,
          },
          {
            path: "/myqueries",
            element: <MyQueries></MyQueries>,
          },
          {
            path: "/myrecommendation",
            element: <MyRecommendation></MyRecommendation>,
          },
          {
            path: "/recommendationsMe",
            element: <RecommendationMe></RecommendationMe>,
             
          },
      ],
    },
  ]);

  export default router