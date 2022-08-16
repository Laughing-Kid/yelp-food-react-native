import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterPriceByResults = (price) => {
        return results.filter( 
            result => {return result.price === price;})
    };

    return (
        <View>
            <SearchBar 
             term={term} 
             onTermChange={(newTerm) => setTerm(newTerm)}
             onTermSubmitted={() => searchApi(term)}
             />
            <Text>Search Bar</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList results={filterPriceByResults('$')} title='Cost Effective'/>
            <ResultsList results={filterPriceByResults('$$')} title='Bit Pricier'/>
            <ResultsList results={filterPriceByResults('$$$')} title='Big Spender'/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;