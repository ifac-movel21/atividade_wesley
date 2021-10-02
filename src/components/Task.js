import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default (props) => {
    return(
        <TouchableOpacity 
            style={styles.taskItem} 
            onPress={() => {} } activeOpacity={.6}
        >
            <>
                <Text style={styles.texto}>
                    {props.data.title}
                </Text>
                
                <View style={styles.checkButton} />
            </>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    taskItem: {
        flex: 1,
        backgroundColor: '#3AAFAB',
        width: '100%',
        height: 50,
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