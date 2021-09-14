import React from "react";
import { Modal, StyleSheet, View } from "react-native";

export function ModalView({children, visible ,...rest}){
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            {...rest}
        >
            <View style={styles.overlay}>
                <View style={styles.modal}>
                
                    {children}
                    
                </View>
            </View>
           
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        alignSelf: 'center',
        backgroundColor: "#F0F0F0",
        width: '98%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 15,
        alignItems: "center",
    },
})