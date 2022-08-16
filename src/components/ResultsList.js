import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({title, results}) => {
    return(
        <View>
            <Text style={styles.textStyle}>{title}</Text>
            <Text>{results.length}</Text>
            <FlatList
            horizontal={true}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return <Text>{item.name}</Text>;
            }}
            />
        </View>
    )
}

styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ResultsList;