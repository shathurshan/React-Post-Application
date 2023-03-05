import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';


import './index.css';
import Posts, { Loader as postLoader } from './routes/Posts';
import NewPost, { action as addPostAction } from './routes/NewPost';
import RouteRoute from './routes/RootRoute';
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails';

const router = createBrowserRouter([
  {
    path: '/', element: <RouteRoute />, children: [
      {
        path: '/', element: <Posts />, loader: postLoader, children: [
          { path: '/create-post', action: addPostAction, element: <NewPost /> },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader }
        ],
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


