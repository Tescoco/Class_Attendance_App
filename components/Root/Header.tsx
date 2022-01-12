import { ReactElement, useState, useEffect } from "react";
import { Text, View } from "../Themed";
import {
  StyleSheet,
  Modal,
  View as DefaultView,
  TouchableWithoutFeedback,
} from "react-native";

interface HeaderProps {
  reload: any;
  getCurrentWeek: any;
}

interface Props {
  week: number;
  weekContent: string;
}

function Header({ reload, getCurrentWeek }: HeaderProps): ReactElement {
  const [state, setState] = useState("This Week");
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };
  const handleClick = (weekContent: string, week: number) => {
    setState(weekContent);
    reload(week);
  };

  const WeekCards = ({ week, weekContent }: Props) => {
    return (
      <DefaultView
        onTouchStart={() => {
          handleClick(weekContent, week);
        }}
        style={styles.mCards}
      >
        <Text style={styles.mCardText}>{weekContent}</Text>
      </DefaultView>
    );
  };

  return (
    <View style={styles.container}>
      <Text onPress={handleModal} style={styles.text}>
        {state}
      </Text>
      <Modal animationType="fade" transparent={true} visible={open}>
        <TouchableWithoutFeedback
          onPress={() => {
            handleModal();
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContainerInner}>
              {[...Array(getCurrentWeek())].map((elem, index) => (
                <WeekCards
                  weekContent={`Week ${index + 1}`}
                  week={index + 1}
                  key={index}
                />
              ))}
              {/* <WeekCards
                week={getCurrentWeek()}
                weekContent={"This Week"}
                key={"This Week"}
              /> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  modalContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainerInner: {
    width: "95%",
    backgroundColor: "black",
    borderRadius: 10,
    opacity: 10,
    paddingLeft: 20,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mCards: {
    width: 90,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mCardsInner: {
    width: "90%",
    height: "80%",
    borderRadius: 10,
    backgroundColor: "white",
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
    alignContent: "center",
  },
  mCardText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
});
