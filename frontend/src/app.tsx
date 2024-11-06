import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import { PaginaLogin } from "./pages/login/pagina-login"


export function App() {
  const router = createBrowserRouter([
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