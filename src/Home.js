import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { Botao } from './components/Botao';
import { InputText } from './components/InputText';
import { TextoDosInput } from './components/Texto';
import { TaskList } from './components/ScrollList';
import { ModalView } from './components/Modal';
import { BoxText } from './components/BoxText';

export function Home(){
    const [newNomeAluno, setNomeAluno] = useState('');
    const [newNomeCurso, setNomeCurso] = useState('');
    const [newNomeDisciplina, setNomeDisciplina] = useState('');
    const [newN1, setN1] = useState(0);
    const [newN2, setN2] = useState(0);
    const [newFalta, setFalta] = useState(0);
    const [newQuantidadeAulas, setQuantidadeAulas] = useState(0);
    const [newResultado, setResultado] = useState(0);
    
    const [newSituacao, setSituacao] = useState('');
    
    const [modalVisible, setModalVisible] = useState(false);
    const [modalResultVisible, setModalResultVisible] = useState(false);
    
    function showListModal(){
        setModalVisible(!modalVisible)
    }
    function showResultModal(){
        setModalResultVisible(!modalResultVisible)
    }
    
    useEffect(() => {
        let n1 = parseInt(newN1);
        let n2 = parseInt(newN2);
        
        let media = ((n1 + n2) / 2)

            if(media < 7){
                setSituacao("Aluno reprovado por média")
            }
            if(media < 7 && newFalta >= 25){
                setSituacao ("Rep média e newFaltas")
            }
            if(media > 7 && newFalta < 25){
                setSituacao("Aluno aprovado!")
            }
            if(media > 7 && newFalta >= 25){
                setSituacao("Aluno reporvado por faltas")
            }

    }, [newFalta])
    

    return(
        <ScrollView 
            nestedScrollEnabled={true}
            style={styles.home}
            showsVerticalScrollIndicator={false}
        >
            {/* inicio do formulario */}
            <TextoDosInput 
                upText="Nome do aluno"
                
            />
            <InputText 
                placeHolder="Eduardo José"
                onChangeText={setNomeAluno}
            />
            
            <TextoDosInput 
                upText="Curso"
            />
            <InputText
                placeHolder="Filosofia"
                onChangeText={setNomeCurso}
            />

            <TextoDosInput 
                upText="Disciplina" 
            />
            <InputText 
                placeHolder="Introdução a Filosofia"
                onChangeText={setNomeDisciplina} 
            />
            
            <TextoDosInput upText="N1" />
            <InputText 
                placeHolder="7.0" 
                keyboardType={'numeric'}
                onChangeText={setN1}  
            />
            
            <TextoDosInput upText="N2" />
            <InputText 
                placeHolder="7.0" 
                keyboardType={'numeric'}
                onChangeText={setN2}
            />

            <TextoDosInput upText="Quantidade de aulas" />
            <InputText 
                placeHolder="10"
                keyboardType={'numeric'}
                onChangeText={setQuantidadeAulas}
            />    

            <TextoDosInput upText="Quantidade de faltas" />
            <InputText 
                placeHolder="0"
                keyboardType={'numeric'}
                onChangeText={setFalta}
            />
            {/* Fim do formulario */}
            <Botao
                cor={"#059862"} 
                text="Verificar"
                marginTop={5}
                onPress={ showResultModal }
                
            />
            {/* add o modal para mostrar os status do aluno */}
            <ModalView 
                    visible={modalResultVisible}
                >
                <BoxText 
                    nomeAluno={newNomeAluno}
                    curso={newNomeCurso}
                    disciplina={newNomeDisciplina}
                    n1={newN1}
                    n2={newN2}
                    resultado={newSituacao}

                />
                <Botao 
                    marginTop={10}
                    cor={"#FF4C57"}
                    text={"Fechar"}
                    onPress={showResultModal}
                />
            </ModalView>
            
            <Botao
                cor={"#059862"} 
                text="Mostrar tarefas"
                marginTop={10}
                onPress={showListModal}
            />
            {/* Modal task list */}
            <ModalView visible={modalVisible}>
           
                <InputText />
                
                <TaskList />
                
                <Botao 
                    marginTop={10}
                    cor={"#FF4C57"}
                    text={"Fechar"}
                    onPress={showListModal}
                />
            </ModalView>

            <View style={styles.footer} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#3AAFAB',
        paddingHorizontal: 30,
    },
    
    blocOneText: {
        backgroundColor: '#1E1E1E',
        width: '100%',
        borderRadius: 5,
        marginTop:15,
        maxHeight: 300,
        padding: 10,
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
    footer: {
        width: '100%',
        height: 10
    }
    
})