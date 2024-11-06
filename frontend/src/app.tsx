import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import { PaginaLogin } from "./pages/login/pagina-login"
import { PaginaInicial } from "./pages/home/pagina-inicial"


export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PaginaInicial />
    },
    {
      path: "/login",
      element: <PaginaLogin />
    },
  ])

  return (
    <div className="h-screen w-full">
      <RouterProvider router={router} />
    </div>
  )
}