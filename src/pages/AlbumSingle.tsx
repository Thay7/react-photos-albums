import { useParams, useNavigate } from 'react-router-dom'  

import { useEffect, useState } from "react"
import { api } from "../api"
import { AlbumSingleType } from '../types/AlbumSingleType'

export const AlbumSingle = () => {
    const params = useParams()
    const navigate = useNavigate()


    const [albumSingle, setAlbumSingle] = useState<AlbumSingleType[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadAlbumSingle()
    }, [])


    const loadAlbumSingle = async () => {
        setLoading(true)
        let json = await api.getAlbumSingle()
        setLoading(false)
        setAlbumSingle(json)
    } 

    return (
        <div>
            {albumSingle.map((item, index) => (
                <div>
                    {item.title}
                </div>

            ))}
        </div>
    )
}