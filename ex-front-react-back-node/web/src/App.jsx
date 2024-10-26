import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Rootlayout from './components/Rootlayout'
import CursosRootLayout from './components/cursos/CursosRootLayout'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Index, {getCursos} from './components/cursos/Index'
import New from './components/cursos/New'
import Show, {getCurso} from './components/cursos/Show'
import Edit from './components/cursos/Edit'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home />},
        {path: 'cursos',
          element: <CursosRootLayout />,
          children: [
            {index: true, element: <Index />, loader: getCursos},
            {path: ':id', 
            id: 'cursoDetail',
            loader: getCurso, 
            children: [
              {index: true, element: <Show />},
              {path: 'edit', element: <Edit />}
            ]},
            {path: 'new', element: <New />}
          ]
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
