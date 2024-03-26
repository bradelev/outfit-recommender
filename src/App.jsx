import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


import Home from './pages/home/Home';
import OutfitRecommender from './pages/outfitRecommender/OutfitRecommender';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/choose-outfit',
      element: <OutfitRecommender />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
