import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login.jsx'
import Join from '@/pages/Join.jsx'
import NotFound from '@/pages/NotFound.jsx'
import Main from '@/pages/Main.jsx'
import Proof from '@/pages/watering/Proof.jsx'
import ReadPage from '@/pages/watering/ReadPage.jsx'
import WritePage from '@/pages/watering/WritePage.jsx'
import CheckMember from '@/pages/check/CheckMember';
import Participant from '@/pages/participant/participant';
import MyGarden from '@/pages/mygarden/MyGarden';

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
            path: 'watering/:postId', 
            element: <ReadPage /> 
        },
        { 
            path: 'watering/write', 
            element: <WritePage /> 
        },
        { 
            path: 'laydown', 
            element: <CheckMember /> 
        },
        { 
            path: 'farmer', 
            element: <Participant /> 
        },
        { 
            path:'mygarden', 
            element: <MyGarden /> 
        },
        { 
            path: '*', 
            element: <NotFound /> 
        },
      ],
    },
  ]);