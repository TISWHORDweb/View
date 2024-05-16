import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Auth/Login';
import Signup from '../Pages/Auth/Signup';
import Contact from '../Pages/Contact.js/Contact';
import View from '../Pages/Contact.js/View';
import ViewVideo from '../Pages/Video/ViewVideo';
// import { PrivateRoute } from '../Components/PrivateRoutes';


export const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: < Home />
    },
    {
      path: '/app',
      element: < Home />
    },
    {
      path: '/auth/login',
      element: < Login />
    },
    {
      path: '/auth/register',
      element: < Signup />
    },
    {
      path: '/app/contact',
      element: < Contact />
    },
    {
      path: '/app/video/view',
      element: < Login />
    },
    {
      path: '/app/contact/view/:id',
      element: < View />
    }
  ]);
};
