import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Applayout from './layout/layout.jsx'
import Homepage from "./pages/Homepage.jsx"
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminHomepage from './pages/AdminHomepage.jsx'
import PropertyListing from './pages/PropertyListing.jsx'
import OurServices from './pages/OurServices.jsx'
import Contactus from './pages/Contactus.jsx'
import ProtectedRoutes from "./components/ProtectedRoutes.jsx"

import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

function App() {

  const router = createBrowserRouter([

    {
      element:<Applayout/>,
      children:[
        {
          path:'/',
          element:<Homepage/>,
        },
        { 
          path:'/adminhome',
          element:<AdminHomepage/>, 

        },
        {
          path:'/admin/login',
          element:<AdminLogin/>,
        },
        {
          path:'/admin/dashboard',
          element:
          <ProtectedRoutes>
              <AdminDashboard/>,
          </ProtectedRoutes>
        
        },
        {
          path:'/propertylisting',
          element:<PropertyListing/>,
        },
        {
          path:'/Our-Services',
          element:<OurServices/>
        },
        {
          path:'/contact-us',
          element:<Contactus/> 
        }
      ]
    }
  

      
  ])


  return (
   <>
    <RouterProvider router={router}/>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
     
   </>
  )
}

export default App
