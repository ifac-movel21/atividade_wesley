import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
}from 'react-native';
import { marginLeft, marginTop } from 'styled-system';
import { Botao } from '../components/Botao';

export function Index(){
    const navigation = useNavigation();

    function handleLogar(){
        navigation.navigate('PerfilAluno');
    }
    return(
        <View style={styles.container}>
            
            <View style={styles.textContainer}>
                <Text style={styles.textGestor}>
                    Gestor
                </Text>
                <Text style={styles.textEscola}>
                    Escolar
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Botao 
                    text={"Entrar"}
                    colorText={'#000'}
                    fontWeight={'700'}
                    cor={'#8CCEC5'}
                    marginTop={100}
                    width={'70%'}
                    onPress={handleLogar}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8CCEC5',
        alignItems: 'center'
    },
    textGestor: {
        fontSize: 49,
        fontWeight: "400",
        color: '#FFF',
    },
    textEscola: {
        fontSize: 60,
        fontWeight: "700",
        color: '#FFF',

        marginTop: -15,
        marginLeft: 1
    },
    textContainer: {
        width: '90%',
        height: '50%',
        alignItems: 'flex-start',
        marginTop: 60
    },
    buttonContainer: {
        backgroundColor: '#FFF',
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
})