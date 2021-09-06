import React from 'react';
import { 
    StyleSheet,
    TextInput, 
} from 'react-native';

export function InputText({placeHolder, ...rest}){
    return(
        <TextInput style={styles.input}
            placeholder={placeHolder}
            placeholderTextColor={'rgba(0, 0, 0, 0.30)'}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
        color: '#FFF',
        fontSize: 18,
        padding: 10,
        borderRadius: 7,
        width: '100%',
        height: 50,
        marginBottom: 5,
        color: '#000'
    },
})

