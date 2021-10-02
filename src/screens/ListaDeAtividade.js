import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text} from 'react-native';
import { TaskList } from "../components/ScrollList";

import firestore from '@react-native-firebase/firestore';

export function ListaDeAtividade() {

    return(
        <View style={styles.container}>
            <TaskList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 15
    }
})