import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState('');

    const searchApi = async () => {
       const respose =await yelp.get('/search', {
        params: {
            limit: 50,
            term: term,
            location: 'san jose'
        }
       })
       setResults(respose.data.businesses);
    };

    return (
        <View>
            <SearchBar 
             term={term} 
             onTermChange={(newTerm) => setTerm(newTerm)}
             onTermSubmitted={() => searchApi()}
             />
            <Text>Search Bar</Text>
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;