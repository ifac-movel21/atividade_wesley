import React from 'react';
import { StyleSheet, FlatList} from 'react-native';

import Lista from './Lista';
import Task from './Task';

export function TaskList(...rest){
    return(
        
        <FlatList style={styles.blocOneText}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={true} 
            data={Lista}
            renderItem={({item}) => <Task  data = {item} />}
        />
    );
}

const styles = StyleSheet.create({
    blocOneText: {
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        maxHeight: '85%',
        maxWidth: '100%'
    },
})