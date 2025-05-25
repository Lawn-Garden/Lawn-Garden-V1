import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login.jsx'
import Join from '@/pages/Join.jsx'
import NotFound from '@/pages/NotFound.jsx'
import Main from '@/pages/Main.jsx'
import Proof from '@/pages/Proof.jsx'

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
            path: 'main',
            element: <Main />
        },
        { 
            path: 'watering', 
            element: <Proof /> 
        },
        { 
            path: '*', 
            element: <NotFound /> 
        },
      ],
    },
  ]);