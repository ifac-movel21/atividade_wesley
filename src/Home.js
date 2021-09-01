import React, {useEffect, useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Botao } from './components/Botao';

import { InputText } from './components/InputText';
import Lista from './components/Lista';
import { TextoDosInput } from './components/Texto';

export function Home(){
    const [newN1, setN1] = useState('');
    const [newN2, setN2] = useState('');
    const [newFalta, setFalta] = useState('');
    const [newQuantidadeAulas, setQuantidadeAulas] = useState('');

    const [newResultado, setResultado] = useState('');

    const calculaMedia = () => {
        let n1 = parseFloat(newN1);
        let n2 = parseFloat(newN2);
        let falta = parseInt(newFalta);

        let media = ((n1 + n2) / 2 );

        if(media < 7){
            setResultado("Aluno reprovado por média")
        }
        if(media < 7 && falta >= 25){
            setResultado ("Aluno reprovado por média e faltas")
        }
        if(media > 7 && falta < 25){
            setResultado("Aluno aprovado!")
        }
        if(media > 7 && falta >= 25){
            setResultado("Aluno reporvado por faltas")
        }
    }
    
    const mostraLista = () => {
        
    }
    
    return(
        <ScrollView 
            style={styles.home}
            showsVerticalScrollIndicator={false}
        >
            {/* inicio do formulario */}
            <TextoDosInput 
                upText="Nome"
            />
            <InputText 
                placeHolder="Nome do aluno"
            />
            
            <TextoDosInput 
                upText="Curso"
            />
            <InputText
                placeHolder="Nome do curso"
            />

            <TextoDosInput 
                upText="Disciplina" 
            />
            <InputText 
                placeHolder="Disciplina" 
            />
            
            <TextoDosInput upText="N1" />
            <InputText 
                placeHolder="Ex.: 7.0" 
                keyboardType={'numeric'}
                onChangeText={setN1}    
            />
            
            <TextoDosInput upText="N2" />
            <InputText 
                placeHolder="Ex.: 7.0" 
                keyboardType={'numeric'}
                onChangeText={setN2}
            />

            <TextoDosInput upText="Quantidade de aulas" />
            <InputText 
                placeHolder="Ex.: 10"
                keyboardType={'numeric'}
                onChangeText={setQuantidadeAulas}
            />    

            <TextoDosInput upText="Quantidade de faltas" />
            <InputText 
                placeHolder="Ex.: 0"
                keyboardType={'numeric'}
                onChangeText={setFalta}
            />
            {/* Fim do formulario */}
            
            <Botao 
                text="Verificar"
                onPress={calculaMedia}
            />

            <TouchableOpacity style={styles.relatorio}>
                <Text style={[styles.texto, { marginTop: 0}]}>
                    {newResultado}
                </Text>
            </TouchableOpacity>

            {/* Button mostrar a lista */}
            <Botao 
                text="Listar atividades"
            />
        
           <ScrollView style={[styles.blocOneText, {marginTop:10, maxHeight: 400}]}>
            {Lista.map((item, index) => {
                return(
                    <TouchableOpacity style={styles.taskItem} key={index}>
                        <>
                            <Text style={[styles.texto, {marginLeft: 10, marginTop: 0, flex: 1}]}>
                                {item.task}
                            </Text>
                            
                            <View style={styles.checkButton}>

                            </View>
                        </>
                    </TouchableOpacity>
                );
            })}
           </ScrollView>
        </ ScrollView>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#3AAFAB',
        paddingHorizontal: 30
    },
    
    blocOneText: {
        backgroundColor: '#1E1E1E',
        width: 381,
        flexWrap: 'wrap',
        borderRadius: 5,
        marginTop:15
    },
    viewInput: {
        marginTop: 5,
        marginLeft: 8
    },
    relatorio: {
        borderRadius: 7,
        width: 257,
        height: 85,
        marginLeft: 10,
        borderStyle: 'solid',
        borderColor: '#FFF',
        borderWidth: 2,
        justifyContent: 'center',
        padding: 10,
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
    }
})