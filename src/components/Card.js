import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


export function Card({backgroundColor, arrowIcon, iconSize,
    icone, textTitle, iconColor, navScreen, textSecondDescription, textFirstDescription, ...rest}){

    

    return(
        <TouchableOpacity 
            style={[styles.cardContainer, {backgroundColor: backgroundColor}]}
            activeOpacity={.7}
            {...rest}
        >
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={icone} size={30} color={iconColor} />
            </View>
            <Text style={styles.text}> {textTitle} </Text>
            <Text style={styles.textPassos}> { textFirstDescription } </Text>
            <Text style={styles.textPassos}> { textSecondDescription } </Text>
            <View style={styles.line} />
          
            <FontAwesomeIcon 
                icon={arrowIcon} 
                style={styles.arrow} 
                size={iconSize}  
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '46%',
        height: '100%',
        borderRadius: 15,
        padding: 10,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#FFF'
    },
    text: {
        fontSize: 17,
        fontWeight: '600',
        color: '#456360',
        marginTop: 15,
        marginBottom: 15
    },
    textPassos: {
        fontSize: 17,
        fontWeight: '900',
        color: '#4F412A',
    },
    line: {
        width: 65,
        height: 2,
        backgroundColor: '#4F412A',
        marginLeft: 5,
        marginTop: 5
    },
    arrow: {
        alignSelf: 'flex-end',
        marginTop: -20
    }
})