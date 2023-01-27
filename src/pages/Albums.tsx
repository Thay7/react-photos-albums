import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import { api } from "../api"
import { AlbumsType } from '../types/AlbumsType'

export const Albums = () => {
    const [albums, setAlbums] = useState<AlbumsType[]>([])

    const loadAlbums = async () => {
        let json = await api.getAlbums()
        setAlbums(json)
    }

    useEffect(() => {
        loadAlbums()
    }, [])

    return (
        <div>
            {albums.map((item, index) => (
                <Link to={`/albums/${item.id}`}
                    style={{
                        textDecoration: 'none',
                        color: '#000', fontWeight: 'bold'
                    }}
                >
                    <div key={index} style={{
                        border: '1px solid #000',
                        borderRadius: '10px',
                        padding: '10px',
                        marginBottom: '5px',
                        cursor: 'pointer',
                    }}>
                        {item.title}
                    </div>
                </Link>
            ))}
        </div>
    )
}