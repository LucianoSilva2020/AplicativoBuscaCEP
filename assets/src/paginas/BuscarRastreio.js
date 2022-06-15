import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


export default function BuscarRastreio(){   
    
    function buscarPorRastreio() {

    }



    return(
        <View style={styles.container}>
            <Text style={styles.title}>Busca por Rastreio</Text>
            <View style={styles.content}>
                <TextInput
                    onChangeText={texto => setCep(texto)}                    
                    style={styles.input}
                    placeholder='Digite o Nº do Rastreio' />
                <TouchableOpacity style={styles.btn}
                >
                    <Text style={styles.btnText}>GO</Text>
                </TouchableOpacity>
            </View>            
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2E6B3',
        alignItems: 'center',
        flex: 1,   
    },
    title: {
        fontSize: 36,
        color: '#F2A81D',
        textShadowColor: '#000',
        fontWeight: 'bold',
        textShadowRadius: 3,
        textShadowOffset: {
            width: 1,
            height: 1
        }
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 15 
    },
    input: {
        borderColor: '#D76B32',
        borderWidth: 2,
        height: 30,
        width: '60%'
    },
    btn: {
        backgroundColor: '#F2A81D',
        borderColor: '#D76B32',
        borderWidth: 1,
        width: '20%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: '#D76B32',
        shadowOffset: {
            width: 5,
            height: 5
        }
    },
    btnText: {
        fontWeight: 'bold'
    }
});