import { ErrorPage } from '@/pages/ErrorPage/ErrorPage'
import { HomePage } from '@/pages/HomePage/HomePage'
import App from '@/app/App'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { FavoritesPage } from '@/pages/FavoritesPage/FavoritesPage'
import { CharacterDetailPage } from '@/pages/CharacterDetailPage/CharacterDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/favorites/', element: <FavoritesPage /> },
      { path: '/character/:id', element: <CharacterDetailPage /> },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
