import * as React from 'react';
import './app.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ComponentsList } from './pages/CommentsList';

export function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<ComponentsList />} />,
        ),
      )}
    />
  );
}
