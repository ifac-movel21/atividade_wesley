import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { TextoDosInput } from './Texto';

export function BoxText({nomeAluno, curso, disciplina, n1, n2, resultado}){
    return(
        <View style={styles.box}>
            <TextoDosInput color={"black"} upText={"Nome do Aluno"} />
            <TextoDosInput color={"black"} upText={nomeAluno} />
            <TextoDosInput color={"black"} upText={"Curso"} />
            <TextoDosInput color={"black"} upText={curso} />
            <TextoDosInput color={"black"} upText={"Disciplina"} />
            <TextoDosInput color={"black"} upText={disciplina} />
            <TextoDosInput color={"black"} upText={"N1"} />
            <TextoDosInput color={"black"} upText={n1} />
            <TextoDosInput color={"black"} upText={"N2"} />
            <TextoDosInput color={"black"} upText={n2} />
            
            <TextoDosInput color={"black"} upText={"Situação do aluno"} />
            <TextoDosInput color={"black"} upText={resultado} />

        </View>
    );
}


const styles = StyleSheet.create({
    box: {
        width: '98%',
        height: '90%',
        backgroundColor: '#D7DBDC',
        borderRadius: 15,
        padding: 15,
        alignItems: "center"
    }
})