/* eslint-disable */

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Auth from './pages/Auth';
import SignUp from './components/SignUp/SignUp';
import EmailAuth from './components/SignUp/EmailAuth';
import EmailConfirm from './components/SignUp/EmailConfirm';

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/auth" element={<Auth></Auth>}>
      <Route path="signup" element={<SignUp></SignUp>} />
      <Route path="email-auth" element={<EmailAuth></EmailAuth>} />
      <Route path="email-certified" element={<EmailConfirm></EmailConfirm>} />
    </Route>
  </Route>,
);

const router = createBrowserRouter(routeDefinitions);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
