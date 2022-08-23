import axios from "axios";
import Config from "react-native-config";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: ''
    }
})