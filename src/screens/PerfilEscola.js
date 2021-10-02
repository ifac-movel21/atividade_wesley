import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { faDotCircle, faProjectDiagram, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

import { Card } from '../components/Card';

export function PerfilEscola(){
    
    const navigation = useNavigation();

    function handleNavigateProjetos(){
        navigation.navigate('Projetos');
    }
    function handleNavigateEsportes(){
        navigation.navigate('Esportes');
    }
   

    return(
        <View style={styles.container}>
            {/*  */}
            <View style={styles.box}>
                <Image 
                    style={styles.picture}
                    source={require('../image/ifac.jpg')}
                />
            </View>
            {/*  */}
            <View style={styles.points}>
                <View style={styles.status}>
                    <Text style={styles.text}> Alunos</Text>
                    <Text style={styles.text}> Matriculados</Text>
                    <Text style={styles.number}> 1080</Text>
                </View>
            </View>
            {/*  */}
            <View style={styles.completeProfile}>
                <Text style={styles.completeProfileText}>
                    Institucional
                </Text>
            </View>
            {/*  */}
            <View style={styles.cardProfileContainer}>
                <Card 
                    backgroundColor={'#8CCEC5'}
                    icone={faProjectDiagram}
                    textTitle={'Projetos'}
                    textFirstDescription={'Projetos'}
                    textSecondDescription={'em análise'}
                    iconColor={'#8CCEC5'}
                    arrowIcon={faDotCircle}
                    iconSize={-1}
                    onPress={()=>{}}
                />
                <Card 
                    backgroundColor={'#FFBB51'}
                    icone={faTrophy}
                    textTitle={'Esportes'}
                    textFirstDescription={'Jogos'}
                    textSecondDescription={'Escolares'}
                    iconColor={'#FFBB51'}
                    arrowIcon={faDotCircle}
                    iconSize={-1}
                    onPress={()=>{}}
                />
            </View>
               
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 30,
    },
    box: {
        width: '100%',
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
    },
    picture: {
        width: '100%',
        height: '100%',
    },
    points: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        marginTop: '5%'
    },
    status: {
        alignItems: 'center'
    },
    completeProfile: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%'
    },
    completeProfileText: {
        fontWeight: '600',
        fontSize: 25
    },
    number: {
        fontWeight: '900',
        fontSize: 20,
    },
    text: {
        fontSize: 18,
        color: '#909090',
    },
    cardProfileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '32%',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: '2%',
    },
})