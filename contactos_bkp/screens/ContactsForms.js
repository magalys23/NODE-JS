import { View, StyleSheet,Text, Alert } from "react-native"
import {Input, Button} from "@rneui/base"
import { useState } from "react"
import { saveContactRest } from "../rest_client/contactos"

export const ContactsForm=({navigation})=>{
    const [name,setName]=useState();
    const [lastname, setLastName]=useState();
    const [phoneNumber, setPhoneNumber]=useState();

    const showMessage=()=>{
        Alert.alert("CONFIRMACIÓN", "Contacto creado");
    }
    const saveContact=()=>{
        console.log("saveContact");
        navigation.goBack();
        saveContactRest({
            name:name,
            lastname:lastname,
            phoneNumber:phoneNumber
        },
        showMessage
        );
    }
    return <View style={styles.container}>
        <Text>FORMULARIO DE CONTACTOS</Text>
        <Input
            value={name}
            placeholder="NOMBRE"
            onChangeText={(value)=>{
                setName(value);
            }}
        />
         <Input
            value={lastname}
            placeholder="APELLIDO"
            onChangeText={(value)=>{
                setLastName(value);
            }}
        />
         <Input
            value={phoneNumber}
            placeholder="CELULAR"
            onChangeText={(value)=>{
                setPhoneNumber(value);
            }}
        />
        <Button
            title="GUARDAR"
            onPress={saveContact}
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