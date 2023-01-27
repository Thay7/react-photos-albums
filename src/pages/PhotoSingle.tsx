import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../api"

import { PhotosType } from "../types/PhotosType"

export const PhotoSingle = () => {
    const [photoSingle, setPhotoSingle] = useState<PhotosType[]>([])
    const params = useParams()

    useEffect(() => {
        loadPhotoSingle()
    }, [])

    const loadPhotoSingle = async () => {
        let json = await api.getPhotoSingle(params.id)
        setPhotoSingle(json)
    }

    return (
        <div>
            {photoSingle.map((item, index) => (
                <div key={index}>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    )
}