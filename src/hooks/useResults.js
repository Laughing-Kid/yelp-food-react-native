import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const respose =await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        })
        setResults(respose.data.businesses);
    } catch(err) { 
        setErrorMessage('Something went wrong');
    }
    };

    useEffect(() => {searchApi('pizza');}, []);

    return [searchApi, results, errorMessage];
}