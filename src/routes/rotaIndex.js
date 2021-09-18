import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RotaLogin } from './logar.routes';

export function Routes(){
    return(
        <NavigationContainer>
            <RotaLogin />
        </NavigationContainer>
    );
}