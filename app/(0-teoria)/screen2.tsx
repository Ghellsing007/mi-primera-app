import { Button, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { styled, ThemeProvider } from "styled-components/native";
import { lightTheme, darkTheme } from "@/styles/theme";
import { useState } from "react";



export default function Screen2() {
  const router = useRouter();
  /* const data = useLocalSearchParams(); */

  const handleBack = () => {
    router.back();
    console.log("Volviendo a la pantalla anterior");
  };

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  const [name, SetName] = useState("");
  const [curso, SetCurso] = useState("");

  return (
    <ThemeProvider theme={currentTheme}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <Button title="Cambiar tema" onPress={toggleTheme} />

          <br></br>

          <Input
            value={name}
            onChangeText={SetName}
            placeholder="Escribe un nombre"
          ></Input>
          <Input
            value={curso}
            onChangeText={SetCurso}
            placeholder="Escribe un curso"
          ></Input>

          <Title >
            Estas en la Screen 2 del curso {curso} para {name}
          </Title>

          {/* <Imagen source={require(")} /> */}

          <Button title="Regresar" onPress={handleBack} />
        </Container>
      </ScrollView>
    </ThemeProvider>
  );
}

const Input = styled.TextInput`
  width: 50%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.text};
`;
const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.large}px;
  font-weight: bold;
  text-align: center;
`;

const Imagen = styled.Image`
  width: 200;
  height: 200;/*  */
`;

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;
