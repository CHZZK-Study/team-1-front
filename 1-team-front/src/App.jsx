/* eslint-disable */

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Auth from './pages/Auth';
import LogIn from './components/LogIn/LogIn';

const queryClient = new QueryClient();

const routesDifinition = createRoutesFromElements(
  <Route path="/auth" element={<Auth></Auth>}>
    <Route path="login" element={<LogIn></LogIn>}></Route>
  </Route>,
);

const router = createBrowserRouter(routesDifinition);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
