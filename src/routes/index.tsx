import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/Default'
import Home from './pages/Home'
import About from './pages/About'
import Leetcode from './pages/Leetcode'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/leetcode',
        element: <Leetcode />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
