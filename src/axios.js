import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-mernstack.herokuapp.com"
})

export default instance;