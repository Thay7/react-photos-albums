import { useRoutes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { AlbumsList } from '../pages/AlbumsList'
import { Photos } from '../pages/Photos'
import { PhotoSingle } from '../pages/PhotoSingle'
import { NotFound } from '../pages/NotFound'

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/albums/', element: <AlbumsList /> },
        { path: '/albums/:id', element: <Photos /> },
        { path: '/albums/photos/:id', element: <PhotoSingle /> },
    ])
}
