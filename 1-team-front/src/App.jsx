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
import FindPassword from './components/FindPassword/FindPassword';

const queryClient = new QueryClient();

const routesDifinition = createRoutesFromElements(
  <Route path="/auth" element={<Auth></Auth>}>
    <Route path="login" element={<LogIn></LogIn>}></Route>
    <Route path="find-password" element={<FindPassword></FindPassword>}></Route>
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
