import React, {useEffect, useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import { Botao } from './components/Botao';
import { InputText } from './components/InputText';
import { TextoDosInput } from './components/Texto';
import Lista from './components/Lista';
import Task from './components/Task';

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
                upText="Nome do aluno"
            />
            <InputText 
                placeHolder="Eduardo José"
                
            />
            
            <TextoDosInput 
                upText="Curso"
            />
            <InputText
                placeHolder="Filosofia"
            />

            <TextoDosInput 
                upText="Disciplina" 
            />
            <InputText 
                placeHolder="Introdução a Filosofia" 
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
                text="Verificar"
                onPress={calculaMedia}
            />
            {/* add o modal para mostrar os status do aluno */}
            

            {/* Button mostrar a lista */}
            <Botao 
                text="Listar atividades"
            />
        
          
            <View>
                <FlatList style={[styles.blocOneText, {marginTop:10, maxHeight: 400}]}
                        showsVerticalScrollIndicator={true} 
                        data={Lista}
                        renderItem={({item}) => <Task  data = {item} />}
                        
                />
            </View>
           

        </ScrollView>
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
    
    
})