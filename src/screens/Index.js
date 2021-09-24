import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
}from 'react-native';
import { Botao } from '../components/Botao';
import HomeImg from '../image/home-img.png'

export function Index(){
    const navigation = useNavigation();

    function handleLogar(){
        navigation.navigate('PerfilAluno');
    }
    
    return(
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={HomeImg}
            />

            <Text style={styles.text}>
                Gestor Escolar
            </Text>

            <Botao 
                text={"Entrar"}
                cor={'#059862'}
                marginTop={100}
                onPress={handleLogar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7',
        alignItems: 'center'
    },
    text: {
        fontSize: 56,
        fontFamily: 'Nunito',
        fontWeight: "bold",
        color: '#008669',
        marginTop: -40
    },
    img: {
        marginTop: -60
    }
})