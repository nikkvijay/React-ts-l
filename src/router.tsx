import { createBrowserRouter } from 'react-router-dom';
import LoginPage from "../pages/Login"  // Make sure this path is correct
import HomePage from "../pages/HomePage"

 const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);


export default router;