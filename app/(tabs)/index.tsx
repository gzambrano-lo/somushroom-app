import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e8f0e6",
        padding: 24,
      }}
    >
      <Text style={{ fontSize: 34, fontWeight: "700", color: "#3f4a44" }}>
        🍄 SoMushroom
      </Text>

      <Text
        style={{
          marginTop: 10,
          fontSize: 16,
          color: "#586f6b",
          textAlign: "center",
        }}
      >
        where little ideas spread like spores
      </Text>
    </View>
  );
}