import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
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
        <>
            <SearchBar 
             term={term} 
             onTermChange={(newTerm) => setTerm(newTerm)}
             onTermSubmitted={() => searchApi(term)}
             />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text style={{marginLeft:15}}>We have found {results.length} results</Text> */}
            <ScrollView>
            <ResultsList results={filterPriceByResults('$')} title='Cost Effective'/>
            <ResultsList results={filterPriceByResults('$$')} title='Bit Pricier'/>
            <ResultsList results={filterPriceByResults('$$$')} title='Big Spender'/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;