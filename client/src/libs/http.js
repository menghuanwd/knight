import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN_KEY, setToken } from './util'

axios.defaults.baseURL = '/'

axios.interceptors.request.use(
    function (config) {
        const token = Cookies.get(TOKEN_KEY)
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        if (error.response) {
            if (/^401$/.test(error.response.status)) {
                setToken('')
                // router.replace('/login')
                this.props.history.push('/login')
            } else if (/^4.*/.test(error.response.status)) {
                console.log(error.response.data.message)
            } else {
                console.log(error.response.data.message)
            }
        }
        return Promise.reject(error.response)
    }
)
