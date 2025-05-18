import { Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterSchool from './pages/RegisterSchool';

import DashboardLayout from './components/DashboardLayout';
import Account from './pages/Account';
import CreateNewPost from './pages/CreateNewPost';
import ShowPosts from './pages/ShowPosts';
import PostDetails from './pages/PostDetails';
import Components from './pages/Components';





import NotFound from './pages/NotFound';


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'createNewPost', element: <CreateNewPost /> },
      { path: 'ShowPosts', element: <ShowPosts /> },
      { path: 'PostDetails', element: <PostDetails /> },


      /*{ path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
    */  { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/temp',
    element: <Components />,
   },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'registerSchool', element: <RegisterSchool /> },


      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
