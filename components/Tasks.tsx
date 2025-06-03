import { View, FlatList, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Task } from "./Task";
export const iniTialTasks: tasksitems[] = [
  { id: 1, title: "estudar React Native", completed: true },
  { id: 2, title: "estudar NextJs", completed: true },
  {
    id: 3,
    title: "Conseguir meu primeiro emprego como desenvolvedor",
    completed: false,
  },
];
type tasksitems = {
  id: number;
  title: string;
  completed: boolean;
};
export function Tasks({ tasks }: any) {
  return (
    <View>
      <FlatList
        style={style.flatList}
        data={tasks}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            title={item.title}
            inicialCompleted={item.completed}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const style = StyleSheet.create({
  flatList: {
    // width: "100%",
    // height: "50%",
    padding: 30,
  },
});
