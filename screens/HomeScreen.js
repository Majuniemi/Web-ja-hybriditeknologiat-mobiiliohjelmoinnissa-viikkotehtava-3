import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function HomeScreen() {
    return (
        <View style={style.container}>
            <Text style={style.text}>HomeScreen</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 16,
    },
});
