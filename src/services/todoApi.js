import axios from 'axios'


const todoApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export const getAllTodos = async params => {
 const data = await todoApi.get('/todos', {
    params: {
        _limit: 3,
        ...params,
    },
 })
 return data
}


