export const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
    timeout: 10000
})

export const myapi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/aaronpeet/todos',
    timeout: 10000
})