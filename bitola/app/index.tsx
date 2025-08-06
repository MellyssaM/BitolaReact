import { useState } from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffffff",
  },
  title: {
    fontSize: 26,
    color: "#de0cfaff",
    fontWeight: "bold",
  },
  title2: {
    fontSize: 24,
    color: "#ff8ff9ff",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#121212",
  },
  input: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff"
  }
});

export default function Index() {

  const [distancia, setDistancia] = useState("");
  const [corrente, setCorrente] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularBitola = () => {
    const distanciaValue = parseFloat(distancia.replace(",", "."));
    const correnteValue = parseFloat(corrente.replace(",", "."));
    if (!distanciaValue|| !correnteValue) {
      setResultado("Preencha todos os campos corretamente.");
      return;
    }
    const bitola110 = (2 * correnteValue * distanciaValue) / 294.64;
    const bitola220 = (2 * correnteValue * distanciaValue) / 510.4;
    setResultado(
      `Bitola para 110V: ${bitola110.toFixed(2)} mm² 
Bitola para 220V: ${bitola220.toFixed(2)} mm²`
    );
  };

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Eletríca residencial cabos de cobre</Text>
      <Text style={styles.title2}>Distância em metros:</Text>
      <TextInput
        placeholder="Digite a distância:"
        style={styles.input}
        value={distancia}
        onChangeText={setDistancia}
      />
      <Text style={styles.title2}>Corrente:</Text>
      <TextInput
        placeholder="Digite a corrente em amperes:"
        style={styles.input}
        value={corrente}
        onChangeText={setCorrente}
      />
      <Button
        title="Calcular"
        onPress={calcularBitola}
      />
      {resultado !== "" && (
        <Text style={styles.text}>{resultado}</Text>
      )}
    </View>
  );
}