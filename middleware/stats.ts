import axios from 'axios'

export default function ({ route }) {
    console.log('middleware')
    return 'ok'
    // return axios.post('http://my-stats-api.com', {
    //     url: route.fullPath
    // })
}
