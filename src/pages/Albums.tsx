import { useEffect, useState } from "react"
import { api } from "../api"
import { AlbumsType } from '../types/AlbumsType'
import { Link } from 'react-router-dom'

export const Albums = () => {
    const [albums, setAlbums] = useState<AlbumsType[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadAlbums()
    }, [])

    const loadAlbums = async () => {
        setLoading(true)
        let json = await api.getAlbums()
        setLoading(false)
        setAlbums(json)
    } 

    return (
        <div>
            {albums.map((item, index) => (
                <div style={{
                 border: '2px solid #000',
                 padding: '10px', 
                 marginBottom: '5px', 
                 cursor: 'pointer'}}>
                    <Link 
                     style={{textDecoration: 'none',
                     color: '#000'}} to="/albums/:slug">
                    {item.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}