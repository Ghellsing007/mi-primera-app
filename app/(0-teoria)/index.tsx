import { darkTheme, lightTheme } from "@/styles/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button } from "react-native";
import { styled, ThemeProvider } from "styled-components/native";

export default function Index() {
  const router = useRouter();

  const data = {
    name: "John",
    curso: "React Native",
  };

  const handlePress = () => {
    router.push({
      pathname: "/(0-teoria)/screen2",
      params: data,
    });
  };

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  const [count, setCount] = useState(0);

  const handleCountP = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleCountM = () => {
    if (count <= 0) return;
    setCount((prevCount) => prevCount - 1);
  };

  const handleCountR = () => {
    setCount((prevCount) => (prevCount = 0));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Title>Hola Mundo!</Title>
        <Button title="Ir a Screen 2" onPress={handlePress} />
        <Button title="Ir a Screen 3" onPress={()=>router.push("/(0-teoria)/screen3")} />
        <Button title="Cambiar tema" onPress={toggleTheme} />

        <Title>Contador: {count}</Title>

        <Button title="Aumentar contador" onPress={handleCountP} />
        <Button title="Disminuir contador" onPress={handleCountM} />
        <Button title="Reset contador" onPress={handleCountR} />
      </Container>
    </ThemeProvider>
  );
}

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.large}px;
  font-weight: bold;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;
