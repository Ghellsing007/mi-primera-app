/* import { Link, Stack } from "expo-router";
import { styled } from "styled-components/native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Página no encontrada" }} />
      <Container>
        <Title>Ups, esta pantalla no existe.</Title>
        <Description>
          Verifica la ruta o vuelve al inicio para continuar explorando la aplicación.
        </Description>
        <Link href="/" style={{ marginTop: 12 }}>
          <LinkText accessibilityRole="link">Volver al inicio</LinkText>
        </Link>
      </Container>
    </>
  );
}

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.large}px;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.medium}px;
  text-align: center;
  margin-top: 12px;
  max-width: 320px;
`;

const LinkText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.medium}px;
  text-decoration-line: underline;
  font-weight: 600;
`;

 */