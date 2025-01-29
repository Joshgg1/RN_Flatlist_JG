import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";

type dataType = {
  id: string; // UID(unique identifier) for each element in list
  title: string; // what you want to display
}

export default function Index() {
  const DATA: dataType[] = [
    { id: "1", title: "First Item" },
    { id: "2", title: "Second Item" },
    { id: "3", title: "Third Item" },
    { id: "4", title: "Fourth Item" },
  ]

  const [selectedId, setSelectedId] = useState<string>("");

  // create simple function to call when item is selected
  // pass a parameter of the item selected
  const selectedList = (item: dataType) => {
    console.log("Click on item: ", item.title);
    setSelectedId(item.id);
  }

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            renderItem = {({ item }) => (
              <TouchableOpacity onPress={() => selectedList(item)}>
                <View style={[styles.titleContainer,{
                  backgroundColor: selectedId === item.id ? colors.primary : colors.secondary
                }]}>
                  <Text style={[defaultStyles.title,{
                    color: selectedId === item.id ? colors.text.light : colors.text.dark
                  }]}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
