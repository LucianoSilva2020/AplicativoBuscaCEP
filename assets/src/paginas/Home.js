import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Super Busca
            </Text>

            <View style={styles.content}>
                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.navigate('BuscaCep')}>
                    <Text>Cosultar Cep</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.navigate('BuscarRastreio')}>
                    <Text>
                        Buscar Rastreio
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

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
        alignItems: 'center',
        flex: 1,
        width: '100%'
        
    },
    btn: {
        backgroundColor: '#F2A81D',
        borderColor: '#D76B32',
        borderWidth: 1,
        width: '60%',
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
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