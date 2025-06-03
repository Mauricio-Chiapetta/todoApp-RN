import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
interface Taskprops {
  id: number | string;
  title: string;
  inicialCompleted?: boolean;
}
export function Task({ id, title, inicialCompleted }: Taskprops) {
  const [completed, setCompleted] = useState(inicialCompleted);
  return (
    <View style={style.rowContainer}>
      <Pressable onPress={() => setCompleted(!completed)}>
        <AntDesign
          name="checkcircleo"
          size={30}
          color={completed ? colors.primary : colors.falseCompleted}
        />
      </Pressable>
      <Text style={style.items}>
        {id} - {title}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  items: {
    fontWeight: "bold",
    color: "#010101",
    marginLeft: 8,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
