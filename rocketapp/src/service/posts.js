import axios from 'axios'

const config = {
  baseURL: 'https://jsonplaceholder.typicode.com', //Endpoint fixo. 
  timeout: 1000
}

const protocolo = axios.create(config)

export function getPostagens () {
  const url = '/posts'
  return protocolo.get(url)
}