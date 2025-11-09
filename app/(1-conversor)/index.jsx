import {router} from "expo-router";
import { styled } from "styled-components/native";

export default function Componente() {
  





  return (
    <Container>
      <Icon source="https://i.ibb.co/qL45NF9y/modista.png"/>
      <Title>Conversor</Title>
      <SubTitle>(cm) a (m)</SubTitle>
      <StartButton onPress={()=>router.push("/conversor")}>
        <ButtonText>Iniciar</ButtonText>
      </StartButton>
      `
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f7e7ce;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-weight: bold;
  padding: 5px;
  font-size: 50px;
  color: #614e3e;
`;

const SubTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
  color: #614e3e;
`;

const StartButton = styled.TouchableOpacity`
  background-color: #decf93;
  border-radius: 8px;
  padding: 15px 30px;
  margin-top: 15px;
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
