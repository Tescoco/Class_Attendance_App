import { ReactElement } from "react";
import { View } from "../Themed";
import { StyleSheet, Text } from "react-native";

interface TopCategoriesProps {
  data: Array<Type>;
}
interface Type {
  student_first_name: string;
  student_last_name: string;
  // attendance: number;
  attendance: number;
}

function Table({ data }: TopCategoriesProps): ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.name}>
              <Text style={styles.text}>Name</Text>
            </View>
            <View style={styles.attendance}>
              <Text style={styles.text}>Status</Text>
            </View>
          </View>
          {data.map((student, i) => (
            <View key={i} style={styles.tableContent}>
              <View style={styles.name}>
                <Text style={styles.contentText}>
                  {student.student_first_name} {student.student_last_name}
                </Text>
              </View>
              <View style={styles.attendance}>
                {student.attendance === 0 ? (
                  <Text style={styles.present}>present</Text>
                ) : (
                  <Text style={styles.absent}>absent</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default Table;

const styles = StyleSheet.create({
  container: {
    width: "110%",
    backgroundColor: "#e4e4e4",
    display: "flex",
    alignItems: "center",
    paddingBottom: 200,
  },
  containerInner: {
    width: "93%",
    paddingBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    display: "flex",
    alignItems: "center",
  },
  table: {
    width: "90%",
    paddingTop: 10,
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
  },
  name: {
    width: "70%",
  },
  attendance: {},
  tableContent: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "darkgreen",
    fontSize: 16,
    fontWeight: "bold",
  },
  contentText: {
    color: "green",
    fontSize: 16,
  },
  present: {
    color: "green",
    fontSize: 16,
  },
  absent: {
    color: "red",
    fontSize: 16,
  },
});
