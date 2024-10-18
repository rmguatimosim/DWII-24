import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Pag1 from './components/Pag1'
import Pag2 from './components/Pag2'


const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/pag1', element: <Pag1 />},
  {path: '/pag2', element: <Pag2/>},
])

function App() {
  

  return (
    <>  
      <RouterProvider router={router}/>
    </>
  )
}

export default App
