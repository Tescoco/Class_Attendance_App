import { ReactElement } from "react";
import { View, Text } from "../Themed";
import { StyleSheet } from "react-native";

interface Props {
  content: number;
  title: string;
}

function Card({ title, content }: Props): ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.r1}>
        <Text>{title}</Text>
      </View>
      <View style={styles.r2}>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.content2}>Students</Text>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "45%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  r1: {
    width: "90%",
    height: "25%",
  },
  r2: {
    width: "90%",
    height: "50%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  content: {
    fontSize: 34,
    color: "green",
  },
  content2: {
    paddingLeft: 8,
    fontSize: 12,
  },
});
