import { RouterProvider } from 'react-router-dom';
// import MyCombinationCard from '@components/UI/MyCombinationCard';
import router from './router';

export default function App() {
  console.log(router);

  return <RouterProvider router={router} />;
  // return <MyCombinationCard />;
}
