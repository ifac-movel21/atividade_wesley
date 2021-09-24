import { Center } from 'native-base';
import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { faBriefcase, faGraduationCap, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import { Card } from '../components/Card';
import SvgIcon from '../../assets/box.svg';

export function PerfilAluno(){
    return(
        <View style={styles.container}>
            {/*  */}
            <View style={styles.box}>
                
                <View height={'100%'} width={'100%'} alignItems={'center'}>
                    <SvgIcon width={'100%'} height={'100%'} marginTop={-10} position={'relative'} zIndex={-1} />
                    <Image 
                        style= {styles.picture}
                        source={{uri: 'https://github.com/leoncral.png'}}
                    />
                </View>
            </View>
            {/*  */}
            <View style={styles.points}>
                <View style={styles.status}>
                    <Text style={styles.text} >Tarefas</Text>
                    <Text style={styles.text} >Concluídas</Text>
                    <Text style={styles.number} >28</Text>
                </View>
                <View style={styles.status}>
                    <Text style={styles.text} >Média</Text>
                    <Text style={styles.text} >Geral</Text>
                    <Text style={styles.number} >73</Text>
                </View>
                <View style={styles.status}>
                    <Text style={styles.text} >Índice</Text>
                    <Text style={styles.text} >Acadêmico</Text>
                    <Text style={styles.number} >18</Text>
                </View>
            </View>
            {/*  */}
            <View style={styles.completeProfile}>
                <Text style={styles.completeProfileText}>
                    Perfil Completo
                </Text>
            </View>
            {/*  */}
            <View style={styles.cardProfileContainer}>
                <Card 
                    backgroundColor={'#8CCEC5'}
                    icone={faUserGraduate}
                    text={'Educação'}
                    number={2}
                />
                <Card 
                    backgroundColor={'#FFBB51'}
                    icone={faBriefcase}
                    text={'Profissional'}
                    number={4}
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
        paddingTop: 40
    },
    box: {
        width: '100%',
        height: 230,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    picture: {
        width: 130,
        height: 130,
        borderRadius: 40,
        zIndex: 999,
        marginTop: -130,
    },
    points: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    status: {
        alignItems: 'center'
    },
    completeProfile: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
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
        height: 200,
        paddingHorizontal: 15,
        paddingVertical: 15,
    }
})