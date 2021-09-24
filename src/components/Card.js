import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { alignSelf, marginBottom, marginLeft, marginTop } from 'styled-system';

export function Card({backgroundColor, icone, text, number, ...rest}){

    const [newNumber, setNumber] = useState('');

    useEffect(() => {
        let x = parseInt(number);
        if(number > 1){
            setNumber('Atividades')
        }else{
            setNumber('Atividade')
        }

    },[number])

    return(
        <View style={[styles.cardContainer, {backgroundColor: backgroundColor}]}>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={icone} size={30} style={styles.icon} />
            </View>
            <Text style={styles.text}> {text} </Text>
            <Text style={styles.textPassos}> { number } {newNumber} </Text>
            <Text style={styles.textPassos}> Faltando </Text>
            <View style={styles.line} />
            <FontAwesomeIcon icon={faArrowRight} style={styles.arrow} size={25} onPress={() => {}} />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 155,
        height: 190,
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
    icon: {
        color: '#8CCEC5',
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