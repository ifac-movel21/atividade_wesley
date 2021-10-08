import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';

export function Botao({cor, text, colorText, fontWeight, width, ...rest}){
    return(
        <TouchableOpacity
            activeOpacity={.6} 
            style={[styles.button, {backgroundColor: cor, width: width, ...rest}]} 
            {...rest}
        >
            <Text style={[styles.texto, {color: colorText, fontWeight: fontWeight }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:"#FF4C57",
        width: 200,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        borderRadius: 10,
    },
    texto: {
        color: '#FFF',
        fontSize: 26,
    },
})