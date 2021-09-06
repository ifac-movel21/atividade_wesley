import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { marginLeft } from 'styled-system';


export default (props) => {
    return(
        <TouchableOpacity 
            style={styles.taskItem} 
            onPress={() => {} } activeOpacity={.1}
        >
            <>
                <Text style={styles.texto}>
                    {props.data.task}
                </Text>
                
                <View style={styles.checkButton}>

                </View>
            </>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    taskItem: {
        flex: 1,
        backgroundColor: '#333',
        width: '100%',
        height: 40,
        marginBottom: 10,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    checkButton: {
        width: 20,
        height: 20,
        borderRadius: 50,
        borderStyle: 'solid',
        borderColor: '#FFF',
        borderWidth: 5,
        marginEnd: 10
    },
    texto: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 10
    },
})