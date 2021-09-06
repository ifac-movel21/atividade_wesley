import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';

export function Botao({text, ...rest}){
    return(
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.texto}>
                {text}
            </Text>
        </TouchableOpacity>       

    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#059862',
        width: 200,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        marginTop: 10,
        borderRadius: 10,
    },
    texto: {
        color: '#FFF',
        fontSize: 22,
    },
})