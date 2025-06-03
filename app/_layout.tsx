import { Pressable, Text, View, Image, TextInput, Alert } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { iniTialTasks, Tasks } from "@/components/Tasks";
import { useState } from "react";
export default function RootLayout() {
  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState([...iniTialTasks]);

  const addTask = () => {
    if (textInput.trim() === "") {
      Alert.alert("digite uma tarefa antes de adicionar!");
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      title: textInput.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTextInput("");
  };

  return (
    <>
      <View style={{ backgroundColor: "black", height: 45 }}></View>
      <View style={style.mainContainer}>
        <View style={style.rowContainer}>
          <Image
            source={require("../assets/images/react-logo.png")}
            style={style.image}
          />
          <Text style={style.title}>Minhas Tarefas</Text>
        </View>
        <View style={style.rowContainer}>
          <TextInput
            value={textInput}
            onChangeText={(textInput) => setTextInput(textInput)}
            style={style.input}
            placeholder="Adicionar nova tarefa"
            placeholderTextColor={"gray"}
          />
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? colors.hoverPrimary : colors.primary,
              },
              style.addButton,
            ]}
            onPress={addTask}
          >
            <Text style={style.pressableText}>+</Text>
          </Pressable>
        </View>
        <Tasks tasks={tasks} />
      </View>
    </>
  );
}

export const style = StyleSheet.create({
  rowContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  mainContainer: {
    backgroundColor: colors.background,
    paddingTop: 10,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    color: colors.primary,
    fontSize: 30,
  },
  input: {
    padding: 10,
    borderRadius: 20,
    borderColor: colors.primary,
    borderWidth: 1,
    width: "70%",
  },
  addButton: {
    padding: 5,
    borderRadius: 22,
    marginLeft: 10,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  pressableText: {
    color: "white",
    fontSize: 20,
  },
});
