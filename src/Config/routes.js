import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Auth/Login';
import Signup from '../Pages/Auth/Signup';
import Contact from '../Pages/Contact.js/Contact';
import ViewVideo from '../Pages/Video/ViewVideo';
import Dashboard from '../Pages/Admin/Dashboard';
import User from '../Pages/Admin/User';
import Video from '../Pages/Admin/Video';
import Talent from '../Pages/Admin/Talent';
import VideoActions from '../Pages/Video/VideoActions';
import AllVideo from '../Pages/Video/AllVideo';
import LiveVideo from '../Pages/Video/LiveVideo';
import ViewTalent from '../Pages/Admin/ViewTalent';
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
      path: '/app/video/view/:id',
      element: < ViewVideo />
    },
    {
      path: '/app/video/all',
      element: < AllVideo />
    },
    {
      path: '/app/video/stream',
      element: < LiveVideo />
    },
    //**ADMIN */
    {
      path: '/admin',
      element: < Dashboard />
    },
    {
      path: '/admin/user',
      element: < User />
    },
    {
      path: '/admin/video',
      element: < Video />
    },
    {
      path: '/admin/video/view/:id',
      element: < VideoActions />
    },
    {
      path: '/admin/talent',
      element: < Talent />
    },
    {
      path: '/admin/talent/view/:id',
      element: < ViewTalent />
    }
  ]);
};
