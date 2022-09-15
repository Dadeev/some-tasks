import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const RequestsAPI = {
    createCheck(isChecked: boolean) {
        return instance.post('auth/test', {success: isChecked})
    }
}