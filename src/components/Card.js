import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

export function Card({backgroundColor, icone, text, number, iconColor, navScreen, ...rest}){

    const [newNumber, setNumber] = useState('');

    useEffect(() => {
        let x = parseInt(number);
        if(number > 1){
            setNumber('Atividades')
        }else{
            setNumber('Atividade')
        }

    },[number])

    const navigation = useNavigation();

    function handleAtividade(){
        navigation.navigate(navScreen);
    }

    return(
        <View style={[styles.cardContainer, {backgroundColor: backgroundColor}]}>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={icone} size={30} color={iconColor} />
            </View>
            <Text style={styles.text}> {text} </Text>
            <Text style={styles.textPassos}> { number } {newNumber} </Text>
            <Text style={styles.textPassos}> Faltando </Text>
            <View style={styles.line} />
            <FontAwesomeIcon icon={faArrowRight} style={styles.arrow} size={25} onPress={handleAtividade} />
        </View>
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