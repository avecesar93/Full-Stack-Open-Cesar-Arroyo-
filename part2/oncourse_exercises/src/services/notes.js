import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  const request = axios.get(baseUrl)

  return request.then(response => {
    return response.data
  })
}

//Para error de la nota

// const getAll = () => {
//   const request = axios.get(baseUrl)
//   const nonExisting = {
//     id: 10000,
//     content: 'This note is not saved to server',
//     important: true,
//   }
//   return request.then(response => response.data.concat(nonExisting))
// }

//Para error de la nota

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// Como las variables y las etiqeutas son las mismas, se pueden exportar directamente

// export default { 
//   getAll: getAll, 
//   create: create, 
//   update: update 
// }
export default { getAll, create, update }