import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import Task from './Task';

export function TaskList(){

    const [newTarefa, setTarefa] = useState([]);

    useEffect(() => {
        const taskCollection = firestore().collection('atividade').onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                list.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setTarefa(list);
        });
        //console.log(newTarefa)
    }, [])

    return(
        <FlatList style={styles.blocOneText}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={true} 
            data={newTarefa}
            keyExtractor={(item) => item.id}
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

