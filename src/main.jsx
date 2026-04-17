import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import router from './Routes/route.jsx';
import FriendProvider from './Context/FriendContext.jsx';
import { ToastContainer } from 'react-toastify';




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <FriendProvider>

      <RouterProvider router={router} ></RouterProvider>
      <ToastContainer />
    </FriendProvider>
    


  </StrictMode>,
)
