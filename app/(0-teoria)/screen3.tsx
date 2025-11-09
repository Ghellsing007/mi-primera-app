import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Screen3() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
    console.log("Volviendo a la pantalla anterior");
  };
  return (
    <View>
      <Text>Estas en la Screen 3!</Text>
      <Button title="Regresar" onPress={handleBack} />
    </View>
  );
}
