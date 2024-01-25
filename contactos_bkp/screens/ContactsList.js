import { View,Text, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { Button, FAB, ListItem } from "@rneui/base";
import { getAllContacts } from "../rest_client/contactos";
import { useState } from "react";

export const ContactsList=({navigation})=>{
    const [contactsList, setContactsList]=useState([]);

    const ContactItem=({contact})=>{
        return <TouchableHighlight onPress={()=>{
            navigation.navigate("ContactsFormNav",{contactParam:contact});
        }}>
        <ListItem>
            <ListItem.Content>
                <ListItem.Title>{contact.nombre} {contact.apellido}</ListItem.Title>
                <ListItem.Subtitle>{contact.celular}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
        </TouchableHighlight>
    }

    fnRefreshList=(contacts)=>{
        setContactsList(contacts);
    }
    return <View style={styles.container}>
        <Text>LISTA DE CONTACTOS</Text>
        <Button
            title="Consultar"
            onPress={()=>{
                getAllContacts(fnRefreshList);
            }}
        />
        <FlatList
            data={contactsList}
            renderItem={({item})=>{
                return <ContactItem contact={item}/>
            }}
        />
        <FAB
            title="+"
            onPress={()=>{navigation.navigate("ContactsFormNav",{})}}
        />

        
    </View>
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column',//eje principal es el vertical
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    }
});