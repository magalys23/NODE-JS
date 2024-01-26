import { View, StyleSheet, Text, Alert } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveContactRest, updateContactRest, deleteContactRest } from "../rest_client/contactos";

export const ContactsForm = ({ navigation, route }) => {
  let contactRetrieved = route.params.contactParam;
  let isNew = true;
  if (contactRetrieved != null) {
    isNew = false;
  }
  console.log("isNew: ", isNew);
  console.log("contactRetrieved: ", contactRetrieved);

  const [name, setName] = useState(isNew ? null : contactRetrieved.nombre);
  const [lastname, setLastName] = useState(
    isNew ? null : contactRetrieved.apellido
  );
  const [phoneNumber, setPhoneNumber] = useState(
    isNew ? null : contactRetrieved.celular
  );

  const showMessage = (message) => {
    Alert.alert("CONFIRMACIÓN", message);
    navigation.goBack();
  };
  const createContact = () => {
    console.log("saveContact");

    saveContactRest(
      {
        name: name,
        lastname: lastname,
        phoneNumber: phoneNumber,
      },
      showMessage
    );
  };

  const updateContact = () => {
    console.log("Actualizando contacto");
    updateContactRest(
      {
        id: contactRetrieved.id,
        name: name,
        lastname: lastname,
        phoneNumber: phoneNumber,
      },
      showMessage
    );
  };

  const confirmDelete = () => {
    Alert.alert("CONFIRMACIÓN", "¿Está seguro que deseas eliminar?", 
    [{
      text:"Si",
      onPress: (deleteContact)
    },
    {
      text:"Cancelar"
    },
  ]);
  };
  const deleteContact=()=>{
    deleteContactRest({
      id:contactRetrieved.id
    }, showMessage)
  }

  return (
    <View style={styles.container}>
      <Text>FORMULARIO DE CONTACTOS</Text>
      <Input
        value={name}
        placeholder="NOMBRE"
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <Input
        value={lastname}
        placeholder="APELLIDO"
        onChangeText={(value) => {
          setLastName(value);
        }}
      />
      <Input
        value={phoneNumber}
        placeholder="CELULAR"
        onChangeText={(value) => {
          setPhoneNumber(value);
        }}
      />
      <Button title="GUARDAR" onPress={isNew ? createContact : updateContact} />
      {isNew ? <View></View> : <Button title="ELIMINAR" onPress={confirmDelete} />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
