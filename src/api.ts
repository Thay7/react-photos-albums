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
    catch (e) {
      alert('Erro na requisição')
    }
  },
  getInfoAlbum: async (id: any) => {
    try {
      let response = await http.get(`/albums/${id}`)
      return response.data
    } catch (e) {
      alert('Erro na requisição')
    }
  },
  getPhotos: async (id: any) => {
    try {
      let response = await http.get(`/albums/${id}/photos`)
      return response.data
    }
    catch (e) {
      alert('Erro na requisição')
    }
  },
  getPhotoSingle: async (id: any) => {
    try {
      let response = await http.get(`/photos/${id}`)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}

// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/albums/1
// https://jsonplaceholder.typicode.com/albums/1/photos
// https://jsonplaceholder.typicode.com/photos/1
