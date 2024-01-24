import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, ListItem,FAB } from "@rneui/base";
import { getAllLaptos } from "../rest_client/laptops";

export const LaptosList = ({navigation}) => {
  const [laptopsList, setLaptopsList] = useState([]);

  const ContactItem = ({ lapto }) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{lapto.marca}</ListItem.Title>
          <ListItem.Subtitle>
            {lapto.procesador} {lapto.memoria} {lapto.disco}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  const fnRefreshList = (laptops) => {
    setLaptopsList(laptops);
  };

  return (
    <View style={styles.container}>
      <Text>LISTA DE COMPUTADORAS</Text>
      <Button
        title="Consultar"
        onPress={() => {
          getAllLaptos(fnRefreshList);
        }}
      />
      <FlatList
        data={laptopsList}
        renderItem={({ item }) => {
          return <ContactItem lapto={item} />;
        }}
        
      />
      <FAB
            title="+"
            onPress={()=>{navigation.navigate("LaptosFormNav")}}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',//eje principal es el vertical
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});