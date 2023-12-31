import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Costumer from './Copmponents/costumer/Costumer.jsx'
import Admin from './Copmponents/Admin/Admin.jsx'
import ServicesTabs from './Copmponents/servicesTabs/ServicesTabs.jsx'
import Meetings from './Copmponents/meetings/Meetings.jsx'
import ServicesToAdmin from './Copmponents/servicesToAdmin/ServicesToAdmin.jsx'
const router = createBrowserRouter([

  {
    path: "/",
    element: <Costumer />,
    errorElement: <div>error</div>,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error</div>,
    children: [
      {
        path: '',
        element:<p></p>,
      },
      {
        path: 'services',
        element:<ServicesToAdmin/>,
        errorElement: <div>error</div>
      }
      ,{
        path: 'meetings',
        element:<Meetings/>,
        errorElement: <div>error</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
