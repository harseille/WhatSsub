import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './pages/RootLayout';

import Home from './pages/Home';
import Test from './pages/Test';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/test" element={<Test />}></Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
