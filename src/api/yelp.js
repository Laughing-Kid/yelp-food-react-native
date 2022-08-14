import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer eScCMfpG0jO_tV_Hl4tDmin9V-_yXw62ZlwxI6Bm4omJt0uWoMuRpOw2Cz6n5VWV4RHMzL3O1RjC_VNqcIwiTMDOyhnFsuWqGenB8EHIxAxu5Pu76JCsqqJo9035YnYx'
    }
})