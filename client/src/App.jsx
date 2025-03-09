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
          element:<AdminDashboard/>,
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
    <RouterProvider router={router}/>
     
  )
}

export default App
