import React, {useEffect, useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { marginLeft } from 'styled-system';
import Lista from './src/Lista';

export default function App(){
    const [newN1, setN1] = useState('');
    const [newN2, setN2] = useState('');
    const [newFalta, setFalta] = useState('');

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
        <View style={styles.home}>
            {/* bloco 01 */}
            <View style={styles.blocOneText}>
                <View style={styles.viewText}>
                    <Text style={styles.texto}>
                        Nome
                    </Text>
                    
                    <Text style={styles.texto}>
                        Curso
                    </Text>
                </View>

                <View style={styles.viewInput}>
                    <TextInput style={styles.input}
                        placeholder={'Nome do aluno'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.40)'}
                   
                    /> 
                    <TextInput style={styles.input}
                        placeholder={'Nome curso'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.40)'}
  
                    /> 
                </View>
                
            </ View>
            {/* bloco 02 */}
            <View style={[styles.blocOneText, {height: 241, marginTop: 10}]}>
                <View style={styles.viewText}>
                    <Text style={[styles.texto, {marginTop: 26}]}>Disciplina</Text>
                    <Text style={[styles.texto, {marginTop: 26}]}>N1</Text>
                    <Text style={[styles.texto, {marginTop: 26}]}>N2</Text>
                    <Text style={[styles.texto, {marginTop: 26}]}>QTD de Faltas</Text>
                </View>
                <View style={[styles.viewInput, {marginTop: 10, marginLeft: 10}]}>
                    <TextInput style={[styles.input, {width: 215, marginTop: 10}]}
                            placeholder={'Disciplina'}
                            placeholderTextColor={'rgba(0, 0, 0, 0.40)'}
                    />
                    <TextInput style={[styles.input, {width: 215, marginTop: 10}]}
                            placeholder={'N1'}
                            placeholderTextColor={'rgba(0, 0, 0, 0.40)'}
                            keyboardType={'numeric'}
                            onChangeText={setN1}
                    />
                    <TextInput style={[styles.input, {width: 215, marginTop: 10}]}
                            placeholder={'N2'}
                            placeholderTextColor={'rgba(0, 0, 0, 0.40)'}
                            keyboardType={'numeric'}
                            onChangeText={setN2}
                    />
                    <TextInput style={[styles.input, {width: 215, marginTop: 10}]}
                            placeholder={'Faltas'}
                            placeholderTextColor={'rgba(0, 0, 0, 0.40)'}
                            keyboardType={'numeric'}
                            onChangeText={setFalta}
                    />
                </ View>

            </ View>
            {/* Mostra o relatorio */}
            <View style={[styles.blocOneText, {marginTop: 10, justifyContent:'center'}]}>
                <TouchableOpacity 
                    style={[styles.button, {width: 100, marginTop: 0, marginLeft:5}]} 
                    onPress={calculaMedia}
                >
                    <Text style={[styles.texto, {marginTop:0}]}>
                        Verificar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.relatorio}>
                    <Text style={[styles.texto, { marginTop: 0}]}>
                        {newResultado}
                    </Text>
                </TouchableOpacity>
            </ View>
        
            {/* Button mostrar a lista */}

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={.6}
                onPress={mostraLista}
            >
                <Text style={[styles.texto, {marginTop:0}]}>
                    Listar Atividades
                </Text>
            </TouchableOpacity>
        
           <ScrollView style={[styles.blocOneText, {marginTop:10}]}>
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
        </ View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#3AAFAB',
        alignItems: 'center'
    },
    texto: {
        color: '#FFF',
        fontSize: 22,
        marginTop: 11
    },
    blocOneText: {
        backgroundColor: '#1E1E1E',
        width: 381,
        height: 95,
        flexWrap: 'wrap',
        borderRadius: 5,
        marginTop:15
    },
    viewInput: {
        marginTop: 5,
        marginLeft: 8
    },
    viewText: {
        marginLeft: 8,
    },
    input: {
        backgroundColor: '#DEDEDE',
        color: '#FFF',
        fontSize: 18,
        padding: 10,
        borderRadius: 7,
        width: 295,
        height: 40,
        marginBottom: 5,
        color: '#000'
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
    button: {
        backgroundColor: '#059862',
        width: 230,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
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