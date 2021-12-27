import { ReactElement } from "react";
import { View, Text } from "../Themed";
import { StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

interface Props {}

function DoughNut({}: Props): ReactElement {
  const count = 80;

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={220}
        width={20}
        fill={count}
        tintColor="green"
        backgroundColor="rgb(219, 219, 219)"
        duration={2000}
        tintColorSecondary="lightgreen"
        rotation={0}
        lineCap={"round"}
      >
        {() => (
          <>
            <Text style={styles.textStyles}>{count}%</Text>
            <Text style={styles.textStyles2}>Attendance</Text>
          </>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

export default DoughNut;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyles: {
    color: "green",
    fontSize: 45,
  },
  textStyles2: {
    fontSize: 18,
  },
});
