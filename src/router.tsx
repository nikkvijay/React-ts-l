import { createBrowserRouter } from 'react-router-dom';
import LoginPage from "./pages/Login"  // Make sure this path is correct
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import DashboardLayout from"./Layouts/DashboardLayout";
import BooksPage from './pages/BooksPage';
import AuthLayout from './Layouts/AuthLayout';

 const router = createBrowserRouter([
    {
        path:'dashboard',
        element:<DashboardLayout/>,
        children:[
          {
            path:'home',
            element:<HomePage/>
          },
          {
            path:'books',
            element:<BooksPage/>
          }
        ]
        
    },
    {
      path: 'auth',
      element: <AuthLayout/>,
      children:[
        {
          path: 'login',
          element: <LoginPage />
        },
      
        {
          path: 'register',
          element:<RegisterPage/>
        },
      ]
      
    },


  
]);


export default router;