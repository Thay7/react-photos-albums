import { useEffect, useState } from "react"

import { api } from "../api"
import { AlbumSingleType } from '../types/AlbumSingleType'

export const AlbumSingle = () => {
    const [albumSingle, setAlbumSingle] = useState<AlbumSingleType[]>([])

    const loadAlbumSingle = async () =>{
        const json = await api.getAlbumSingle()
        setAlbumSingle(json)
        
    }

    useEffect(() =>{
        loadAlbumSingle()
    }, [])

    console.log(albumSingle)

    return (
        <div>
            {albumSingle.length > 0 &&
             albumSingle.map((item, index) => (
                <p key={index}>{item.title}</p>
            ))}
        </div>
    )
}