import React, {useState} from 'react'
import { View, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { TextoDosInput } from '../components/Texto';
import { InputText } from '../components/InputText';
import { Botao } from '../components/Botao';

export function CadastroDeAtividade(){

    const [ newTarefa, setTarefa] = useState('');
    
    const ref = firestore().collection('atividade');

    async function addTarefe(){
        if (newTarefa === '') {
            alert('Por favor, digite algo! Por exemplo: Atividade de inglês.')
        } else
        await ref.add({
                alunoId: '1',
                title: newTarefa,
                status: true,
            });
            setTarefa('')
    }

    return(
        <View 
            style={styles.container}
        >
            {/* inicio do formulario */}
            <TextoDosInput 
                upText="Cadastre as suas atividades!"
                color={'#000'}
            />
            
            <TextoDosInput 
                upText="Nome da atividade" 
                color={'#000'}
            />
            <InputText 
                placeHolder="Ex.: Atividade de inglês"
                onChangeText={setTarefa}
                value={newTarefa}
            />
            {/* Fim do formulario */}
            <Botao 
                FontSize={16}
                text={'Salvar'}
                colorText={'#FFF'}
                fontWeight={'600'}
                width={'50%'}
                cor={'#059862'}
                marginTop={10}
                onPress={addTarefe}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#8CCEC5',
        alignItems: 'center',
        justifyContent: 'center'
    }
})