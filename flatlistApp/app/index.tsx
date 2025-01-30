import { Text, View, StyleSheet, FlatList } from "react-native";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";
import { DATA, dataType } from "@/data/appData";
export default function Index() {
  const [selectedId, setSelectedId] = useState<string>("");

  // create simple function to call when item is selected
  // pass a parameter of the item selected
  const selectedList = (item: dataType) => {
    console.log("Click on item: ", item.title);
    setSelectedId(item.id);
  };

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Flatlist -- Joshua George</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            extraData={selectedId}
            ItemSeparatorComponent={() => <ListItemSeparator />}
            renderItem={({ item }) => (
              // <TouchableOpacity onPress={() => selectedList(item)}>
              //   <View
              //     style={[
              //       styles.titleContainer,
              //       {
              //         backgroundColor:
              //           selectedId === item.id
              //             ? colors.primary
              //             : colors.secondary,
              //       },
              //     ]}
              //   >
              //     <Text
              //       style={[
              //         defaultStyles.title,
              //         {
              //           color:
              //             selectedId === item.id
              //               ? colors.text.light
              //               : colors.text.dark,
              //         },
              //       ]}
              //     >
              //       {item.title}
              //     </Text>
              //   </View>
              // </TouchableOpacity>
              <ListItem
                item={item}
                isSelected={selectedId === item.id}
                onPress={selectedList}
              />
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
