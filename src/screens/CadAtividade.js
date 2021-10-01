import React, {useState} from 'react'
import { View, StyleSheet} from 'react-native';

import { TextoDosInput } from '../components/Texto';
import { InputText } from '../components/InputText';
import { Botao } from '../components/Botao';

export function CadastroDeAtividade(){

    const [ newTarefa, setTarefa] = useState('')

    return(
        <View 
            style={styles.container}
        >
            {/* inicio do formulario */}
            <TextoDosInput 
                upText="Cadastrar um nova atividade"
            />
            
            <TextoDosInput upText="Nome da atividade" />
            <InputText 
                placeHolder="Atividade de inglês"
                onChangeText={setTarefa}
            />
            {/* Fim do formulario */}
            <Botao 
                FontSize={16}
                text={'Salvar'}
                cor={'#059862'}
                onPress={() => {}}
                marginTop={10}
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