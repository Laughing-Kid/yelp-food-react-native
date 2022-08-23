import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmitted}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
             autoCapitalize="none"
             autoCorrect={false} 
             placeholder="Search"
             style={styles.inputStyle}
             value={term}
             onChangeText={newTerm => onTermChange(newTerm)}
             onEndEditing={onTermSubmitted}//The line and this both are of same syntax

             />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#E3E0e0',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },

});

export default SearchBar;