import { View, StyleSheet, Text, Alert } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveLaptoRest, updateLaptoRest } from "../rest_client/laptops";

export const LaptosForms = ({ navigation, route }) => {
  let laptoRetrieved = route.params.laptoParam;
  let isNew = true;
  if (laptoRetrieved != null) {
    isNew = false;
  }
  console.log("isNew: ", isNew);
  console.log("laptoRetrieved: ", laptoRetrieved);

  const [marca, setMarca] = useState(isNew ? null :laptoRetrieved.marca);
  const [procesador, setProcesador] = useState(isNew ? null :laptoRetrieved.procesador);
  const [memoria, setMemoria] = useState(isNew ? null :laptoRetrieved.memoria);
  const [disco, setDisco] = useState(isNew ? null :laptoRetrieved.disco);

  const showMessage = () => {
    Alert.alert("CONFIRMACIÓN", isNew ? "Lapto creada" : "Lapto actualizada");
    navigation.goBack();
  };
  const createLapto = () => {
    console.log("saveLapto");
    
    saveLaptoRest(
      {
        marca: marca,
        procesador: procesador,
        memoria: memoria,
        disco: disco,
      },
      showMessage
    );
  };

  const updateLapto = () => {
    console.log("Actualizando lapto");
    updateLaptoRest(
      {
        id: laptoRetrieved.id,
        marca: marca,
        procesador: procesador,
        memoria: memoria,
        disco: disco,
      },
      showMessage
    );
  };


  return (
    <View style={styles.container}>
      <Text>REGISTRO DE LAPTOS</Text>
      <Input
        value={marca}
        placeholder="Marca"
        onChangeText={(value) => {
          setMarca(value);
        }}
      />
      <Input
        value={procesador}
        placeholder="Procesador"
        onChangeText={(value) => {
          setProcesador(value);
        }}
      />
      <Input
        value={memoria}
        placeholder="Memoria"
        onChangeText={(value) => {
          setMemoria(value);
        }}
      />
      <Input
        value={disco}
        placeholder="disco"
        onChangeText={(value) => {
          setDisco(value);
        }}
      />
      <Button title="GUARDAR" onPress={isNew ? createLapto : updateLapto} />
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
