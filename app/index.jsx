import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { styled } from "styled-components/native";

const projects = [
  {
    id: "0-teoria",
    name: "Proyecto 0 - Teoria",
    description: "Fundamentos de React Native, hooks y navegación básica.",
    href: "/(0-teoria)",
    icon: "school",
  },
  {
    id: "1-conversor",
    name: "Proyecto 1 - Conversor",
    description: "Conversor de centímetros a metros usando styled-components.",
    href: "/(1-conversor)",
    icon: "straighten",
  },
];

export default function Componente() {
  return (
    <Container>
      <Title>Menu Proyectos React Native</Title>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ width: "100%", paddingBottom: 32 }}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <Link href={item.href} asChild>
            <ProjectCard>
              <CardLeft>
                <MaterialIcons name={item.icon} size={32} color="#fff" />
                <CardTextWrapper>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardTextWrapper>
              </CardLeft>
              <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
            </ProjectCard>
          </Link>
        )}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #f5f5f5;
  padding: 32px 24px 0;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 24px;
  text-align: center;
`;

const ProjectCard = styled.Pressable`
  background-color: #333;
  border-radius: 16px;
  padding: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CardLeft = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const CardTextWrapper = styled.View`
  flex: 1;
  margin-left: 12px;
`;

const CardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

const CardDescription = styled.Text`
  color: #f0f0f0;
  font-size: 14px;
  margin-top: 4px;
`;

const Separator = styled.View`
  height: 16px;
`;
