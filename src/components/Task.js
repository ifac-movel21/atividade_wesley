import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


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
        width: 350,
        height: 40,
        marginTop: 10,
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 7,
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
        marginTop: 5,
        marginBottom: 5,
        fontWeight: "bold"
    },
})