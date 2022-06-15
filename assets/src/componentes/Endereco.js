import React from "react";
import { View, Text } from "react-native";

export default function Endereco(props){
    return(
        <View>
            <Text>Logradouro: {props.logradouro}</Text>
            <Text>Bairro: {props.bairro}</Text>
            <Text>Cidade: {props.cidade}</Text>
        </View>
    )
}