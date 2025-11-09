import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import { styled } from "styled-components/native";

export default function Componente() {
  const [centrimetro, setCentrimetro] = useState("");
  const [result, setResult] = useState(null);

  const calcular = () => {
    if (!centrimetro) {
      Alert.alert("Error", "Por favor ingrese un valor");
      return; // solo se ejecuta si el campo está vacío
    }
  
    const metros = parseFloat(centrimetro) / 100;
    setResult(metros);
  };
  

  return (
    <Container>
      <Input
        value={centrimetro}
        onChangeText={setCentrimetro}
        placeholder="centimetros (cm)"
        keyboardType="numeric"
      ></Input>
      <CalcularButton onPress={calcular}>
        <ButtonText>Calcular</ButtonText>
      </CalcularButton>
      <Resultado>Resultado: {result !==null ? `${result} metros` : "-"} </Resultado>
      <StartButton onPress={() => router.back()}>
        <ButtonText>VOLVER</ButtonText>
      </StartButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f7e7ce;
  align-items: center;
  justify-content: center;
`;

const StartButton = styled.TouchableOpacity`
  background-color: #decf93;
  border-radius: 8px;
  padding: 15px 30px;
  margin-top: 20px;
`;

const CalcularButton = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px 30px;
  margin-top: 15px;
`;

const Resultado = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #614e3e;
  margin-top: 30px;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #000000;
`;

const Icon = styled.Image`
  width: 120px;
  height: 100px;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  background-color: #ffff;
  border-radius: 8px;
  padding: 15px 50px;
  margin-top: 15px;
  font-size: 20px;
  color: #000000;
`;
