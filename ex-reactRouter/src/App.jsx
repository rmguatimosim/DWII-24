import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Pag1 from './components/Pag1'
import Pag2 from './components/Pag2'
import RootLayout from './components/RootLayout'



const router = createBrowserRouter([
  {path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <Home /> },
      {path: '/pag1', element: <Pag1 />},
      {path: '/pag2', element: <Pag2/>},

    ]
  }
  
])

function App() {
  

  return (
    <>  
      <RouterProvider router={router}/>
    </>
  )
}

export default App
