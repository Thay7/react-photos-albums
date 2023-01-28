import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

import { api } from "../api"
import { PhotosType } from '../types/PhotosType'
import { AlbumsType } from "../types/AlbumsType"

export const Photos = () => {
    const [photos, setPhotos] = useState<PhotosType[]>([])
    const [InfoAlbum, setInfoAlbum] = useState<AlbumsType>()
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadPhotos()
        loadInfoAlbum()
    }, [])

    const loadPhotos = async () => {
        let json = await api.getPhotos(params.id)
        setPhotos(json)
    }

    const loadInfoAlbum = async () => {
        let json = await api.getInfoAlbum(params.id)
        setInfoAlbum(json)
    }

    const handleBackButton = () => {
        navigate(-1)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button onClick={handleBackButton} style={{
                border: 'none', borderRadius: '10px', backgroundColor: '#396d7c', color: '#FFF', padding: '10px', width: '100px', marginBottom: '15px', cursor: 'pointer'
            }}
            >
                Voltar</button>
            {InfoAlbum?.title}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '15px' }}>
                {photos.map((item, index) => (
                    <div key={index}>
                        <Link to={`/albums/photos/${item.id}`} style={{ color: '#000' }}>
                            <img style={{ border: '2px solid', padding: '5px' }} src={item.thumbnailUrl} alt={item.title} />
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    )
}