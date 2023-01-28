import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { api } from "../api"
import { PhotosType } from "../types/PhotosType"

export const PhotoSingle = () => {
    const [photoSingle, setPhotoSingle] = useState<PhotosType>()
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadPhotoSingle()
    }, [])

    const loadPhotoSingle = async () => {
        let json = await api.getPhotoSingle(params.id)
        setPhotoSingle(json)
    }

    const handleBackButton = () =>
        navigate(-1)

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button onClick={handleBackButton} style={{
                border: 'none', borderRadius: '10px', backgroundColor: '#396d7c', color: '#FFF', padding: '10px', width: '100px', marginBottom: '15px', cursor: 'pointer'
            }}
            >
                Voltar</button>
            {photoSingle?.title}
            <img style={{ width: '500px', marginTop: '15px' }} src={photoSingle?.thumbnailUrl} alt="" />
        </div>
    )
}