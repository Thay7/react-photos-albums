import axios from "axios"

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  }) 

export const api = {
    getAlbums: async () => {
    try {
    let response = await http.get('/albums')
    return response.data
    }
    catch(e) {
      alert('erro')
    }
    },
   getAlbumSingle: async () => {
    try {
      let response = await http.get('/albums/1')
    return response.data
    }
    catch(e) {
      alert('erro')
    }
   }
   
} 
