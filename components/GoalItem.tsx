import { StyleSheet, Text, View, Pressable } from "react-native";

type props = {
  text: string;
  id: string;
  onDeleteItem: (id:string)=>void;
};

function GoalItem(props: props) {
  return (
    <Pressable onPress={()=>props.onDeleteItem(props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
