import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Pastes from './component/Pastes';
import ViewPage from './component/ViewPage';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: '/pastes',
      element:
      <div>
        <Navbar/>
       <Pastes/>

      </div>
    },
    {
      path: '/pastes/:id',
      element:
      <div>
        <Navbar/>
        <ViewPage/>
      </div>
    },
  ]
);

function App() {


  return (
    <>
    <RouterProvider router ={router}></RouterProvider>
    </>
  )
}

export default App
