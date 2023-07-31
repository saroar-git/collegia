import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Main from './layout/Main';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import AllCollege from './pages/College/AllCollege';
import Login from './pages/Authentication/Login';
import AuthProvider from './context/AuthProvider';
import CollegeDetail from './pages/College/CollegeDetail';
import PrivateRoute from './routes/PrivateRoute';
import Admission from './pages/Admission/Admission';
import Apply from './pages/Admission/Apply';
import MyColleges from './pages/Profile/MyColleges';
import AddReview from './pages/Profile/AddReview';
import Profile from './pages/Profile/Profile';
import Edit from './pages/Profile/Edit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error/>,
    children: [
     {path: '/', element:<Home/>},
      { path: '/college', element: <AllCollege /> },
      { path: '/details/:id', element: <PrivateRoute><CollegeDetail /></PrivateRoute>, loader: ({ params }) => fetch(`https://college-booking-server-seven.vercel.app/colleges/${params.id}`) },

      { path: '/admission', element: <Admission />, loader: () => fetch('https://college-booking-server-seven.vercel.app/colleges') },
      { path: '/apply/:id', element: <PrivateRoute><Apply /></PrivateRoute>, loader: ({ params }) => fetch(`https://college-booking-server-seven.vercel.app/colleges/${params.id}`) },

      { path: '/my-college', element: <PrivateRoute><MyColleges /></PrivateRoute> },
      { path: '/add-review/:id', element: <PrivateRoute><AddReview /></PrivateRoute>, loader: ({ params }) => fetch(`https://college-booking-server-seven.vercel.app/apply/${params.id}`) },

      { path: '/profile', element: <PrivateRoute><Profile /></PrivateRoute> },
      { path: '/edit/:id', element: <PrivateRoute><Edit /></PrivateRoute>, loader: ({ params }) => fetch(`https://college-booking-server-seven.vercel.app/edit/${params.id}`) },
      { path: '/login', element: <Login /> },
   ]
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <RouterProvider router={router} />
        </QueryClientProvider>        
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
);
