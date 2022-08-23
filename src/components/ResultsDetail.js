import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom: 5,
    },
    container:{
        marginLeft: 15,
    },
    name: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;