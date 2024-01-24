import { View, StyleSheet,Text, Alert } from "react-native"
import {Input, Button} from "@rneui/base"
import { useState } from "react"
import { saveLaptoRest } from "../rest_client/laptops";

export const LaptosForms=({navigation})=>{
    const [marca,setMarca]=useState();
    const [procesador, setProcesador]=useState();
    const [memoria, setMemoria]=useState();
    const [disco, setDisco]=useState();
    
    const showMessage=()=>{

        Alert.alert("CONFIRMACIÓN", "Lapto creada");
    }
    const saveLapto=()=>{
        console.log("saveLapto");
        navigation.goBack();
        saveLaptoRest({
            marca:marca,
            procesador:procesador,
            memoria:memoria,
            disco:disco
        },
        showMessage
        );
    }
    return <View style={styles.container}>
        <Text>REGISTRO DE LAPTOS</Text>
        <Input
            value={marca}
            placeholder="Marca"
            onChangeText={(value)=>{
                setMarca(value);
            }}
        />
        <Input
            value={procesador}
            placeholder="Procesador"
            onChangeText={(value)=>{
                setProcesador(value);
            }}
        />
         <Input
            value={memoria}
            placeholder="Memoria"
            onChangeText={(value)=>{
                setMemoria(value);
            }}
        />
         <Input
            value={disco}
            placeholder="disco"
            onChangeText={(value)=>{
                setDisco(value);
            }}
        />
        <Button
            title="GUARDAR"
            onPress={saveLapto}
        />
    </View>
       
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});