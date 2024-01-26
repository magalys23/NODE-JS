import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList,TouchableHighlight } from "react-native";
import { Button, ListItem,FAB } from "@rneui/base";
import { getAllLaptos } from "../rest_client/laptops";
import { useEffect } from "react";

export const LaptosList = ({navigation}) => {
  const [laptopsList, setLaptopsList] = useState([]);
  
  useEffect(()=>{
        
    getAllLaptos(fnRefreshList);
},[]);

  const ContactItem = ({ lapto }) => {
    return <TouchableHighlight onPress={()=>{
      navigation.navigate("LaptosFormNav",{laptoParam:lapto});
  }}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{lapto.marca}</ListItem.Title>
          <ListItem.Subtitle>
            {lapto.procesador} {lapto.memoria} {lapto.disco}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      </TouchableHighlight>
    
  };

  const fnRefreshList = (laptops) => {
    setLaptopsList(laptops);
  };

  return (
    <View style={styles.container}>
      
      <FlatList
        data={laptopsList}
        renderItem={({ item }) => {
          return <ContactItem lapto={item} />;
        }}
        
      />
      <FAB
            title="+"
            onPress={()=>{navigation.navigate("LaptosFormNav",{})}}
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