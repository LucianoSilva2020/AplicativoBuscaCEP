import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Endereco from '../componentes/Endereco';


export default function BuscaCEP(){

    const [cep, setCep] = useState('')
    const [resultado, setResultado] = useState(null);
    function buscarPorCEP() {
        fetch('https://api.postmon.com.br/v1/cep/' + cep)
        .then(response => response.json())
        .then(result => {
            setResultado(result);
            console.log(result);
        })
    }

    const exibeEndereco = () => {
        if(resultado == null){
            return <></>
        }else{
            return (
                <Endereco
                logradouro={resultado.logradouro}
                bairro={resultado.bairro}
                cidade={resultado.cidade}/>
            )
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Busca por CEP</Text>
            <View style={styles.content}>
                <TextInput
                    value={cep}
                    onChangeText={texto => setCep(texto)}
                    
                    style={styles.input}
                    placeholder='Digite o CEP' />
                <TouchableOpacity style={styles.btn}
                onPress={()=> buscarPorCEP()}
                >
                    <Text style={styles.btnText}>GO</Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    exibeEndereco()
                }
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