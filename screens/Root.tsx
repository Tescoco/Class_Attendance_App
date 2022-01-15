import { StyleSheet } from "react-native";
import Card from "../components/Root/Card";
import DoughNut from "../components/Root/DoughNut";
import Header from "../components/Root/Header";
import Table from "../components/Root/Table";
import { View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAttendance } from "../api/attendance";
import { useEffect, useState } from "react";

export default function RootScreen({}: RootStackScreenProps<"Root">) {
  const [data, setData] = useState([]);
  const [presentLength, setPresentLength] = useState(0);
  const [count, setCount] = useState(0);

  const getCurrentWeek = () => {
    let current_timestamp = Date.now();
    const startWeek = 1636498800000;

    //week in milliseconds
    const week = 604800000;

    //compute the number of weeks form this week stored as one
    const result = Math.round((current_timestamp - startWeek) / week) + 1;

    if (result < 13) {
      return result;
    } else {
      return 12;
    }
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("data");
      if (value !== null) {
        return JSON.parse(value).token;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    retrieveData().then((data) =>
      getAttendance({
        token: data,
        week: getCurrentWeek(),
      }).then((data) => {
        setData(data.message.rows);
        setPresentLength(
          data.message.rows.filter(function (el: any) {
            return el.attendance === 0;
          }).length
        );
        const studentPresent = data.message.rows.filter(function (el: any) {
          return el.attendance === 0;
        }).length;
        setCount((studentPresent / data.message.rows.length) * 100);
      })
    );
  }, []);

  const handleChange = (week: number) => {
    setData([]);
    retrieveData().then((data) =>
      getAttendance({
        token: data,
        week: week,
      }).then((data) => {
        setData(data.message.rows);
        const studentPresent = data.message.rows.filter(function (el: any) {
          return el.attendance === 0;
        }).length;
        setPresentLength(
          data.message.rows.filter(function (el: any) {
            return el.attendance === 0;
          }).length
        );
        setCount((studentPresent / data.message.rows.length) * 100);
      })
    );
  };

  return (
    <View style={styles.container}>
      <Header getCurrentWeek={getCurrentWeek} reload={handleChange} />
      <DoughNut count={count} />
      <View style={styles.viewContainer}>
        <Card title={"Class Total"} content={40} />
        <Card title={"Total Present"} content={presentLength * 8} />
      </View>
      <Table data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  viewContainer: {
    display: "flex",
    width: "110%",
    backgroundColor: "#e4e4e4",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 130,
    alignItems: "center",
  },
});
