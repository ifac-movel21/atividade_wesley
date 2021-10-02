import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Index } from '../screens/Index';
import { PerfilAluno } from '../screens/Perfil';
import { PerfilEscola } from '../screens/PerfilEscola';
import { CadastroDeAtividade } from '../screens/CadAtividade';
import { ListaDeAtividade } from '../screens/ListaDeAtividade';

const { Navigator, Screen} = createStackNavigator();

export function RotaLogin(){
    return(
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen
                name="Index"
                component={Index}
            />
            <Screen 
                name="PerfilAluno"
                component={PerfilAluno}
            
            />
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="PerfilEscola"
                component={PerfilEscola}
            />
            <Screen 
                name="CadastrarAtividade"
                component={CadastroDeAtividade}
            />
            <Screen 
                name="ListaDeAtividade"
                component={ListaDeAtividade}
            />
        </Navigator>
    );
}
