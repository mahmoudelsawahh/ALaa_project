import logo from './logo.svg';
import './App.css';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Component/Home/Home';
import All from './Component/All/All';
import Navbar from './Component/Navbar/Navbar';
import Masterlayout from './Component/Masterlayout/Masterlayout';
import NotFound from './Component/NotFound/NotFound.jsx';
import Categories from './Component/Categories/Categories';
import Sortby from './Component/Sortby/Sortby';
import Platform from './Component/Platform/Platform';
import Register from './Component/Register/Register';

import Login from './Component/Login/Login';
import Gamedetails from './Component/Gamedetails/Gamedetails';






 
function App() {
  let Routers =  createBrowserRouter([
    {
      path :"/", element: <Masterlayout/> , errorElement:<NotFound/>, children: [
        
  {path:"/",element:<Home/>},

  {path:"home",element:<Home/>},
  {path:"gamedetils", element:<Gamedetails/>},
  {path:"all",element:<All/>},

  {path :"navbar", element: <Navbar/>},
  {path:"categories" , element: <Categories/>},
  {path:"sortby" , element: <Sortby/>},
  {path:"platform" , element: <Platform/>},

  {path:"register" , element: <Register/>},
  {path:"login" , element: <Login/>},
  {path:"*" , element: <NotFound/>},






  ]}
])
  return (
    <RouterProvider router={Routers} />
  );
}

export default App;

