import axios from 'axios'
const key = '6c36169f69f746ef8497de2dedbf52e6'
const axiosCreate = axios.create({
  baseURL: 'https://api.rawg.io/api'
})
const getGames = axiosCreate.get('/games?key=' + key)

export default {
  getGames,
}