import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function TextoDosInput({upText, ...rest}){
    return(
        <Text style={[styles.texto, {...rest}]}>
            {upText}
        </Text>
    );
}

const styles = StyleSheet.create({
    texto: {
        color: '#FFF',
        fontSize: 22,
        marginTop: 5,
        marginBottom: 5,
        fontFamily: 'Nunito-Bold'
    },
})