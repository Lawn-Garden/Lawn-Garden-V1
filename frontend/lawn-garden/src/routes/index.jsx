import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login.jsx'
import Join from '@/pages/Join.jsx'
import NotFound from '@/pages/NotFound.jsx'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {   
            index: true, 
            element: <Login /> 
        },
        {   
            path: 'join', 
            element: <Join /> 
        },
        { 
            path: '*', 
            element: <NotFound /> 
        },
      ],
    },
  ]);