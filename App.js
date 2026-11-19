import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SectionList, TouchableOpacity, Button, Alert } from 'react-native';
import { FontAwesome6 } from "@expo/vector-icons";

const datasource = [
  {
    title: "Psychic",
    bgcolor: '#C3B1E1',
    icon: 'brain',
    data: [
      { key: 'Deoxys', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/paradox-rift/en-us/SV04_EN_74-2x.png' },
      { key: 'Reuniclus', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/temporal-forces/en-us/SV05_EN_72-2x.png' },
    ]
  },
  {
    title: "Fairy",
    bgcolor: '#FFB6C1',
    icon: 'wand-magic-sparkles',
    data: [
      { key: 'Alcremie', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/stellar-crown/en-us/SV07_EN_65-2x.png' },
      { key: 'Togepi', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/obsidian-flames/en-us/SV03_EN_83-2x.png' },
    ]
  }
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity
          style={styles.opacityStyle}
          onPress={() => Alert.alert(item.key)}
      >
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image source={{uri: item.image}} style={styles.imageStyle} />
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>Pokemon Cards</Text>
        <Button title="Add Pokemon" onPress={() => Alert.alert("Add Pokemon")} color="#A7C7E7" />
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            contentContainerStyle={{padding: 10}}
            renderSectionHeader={({section: {title, bgcolor, icon}}) => (
                <View style={[styles.headerView, {backgroundColor: bgcolor}]}>
                  <FontAwesome6 name={icon} size={18} color="white" />
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
  },
  opacityStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: 'white',
    paddingLeft: 5,
  },
  textStyle: {
    fontSize: 16,
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  imageStyle: {
    width: 150,
    height: 200,
    margin: 8,
    borderRadius: 8,
    resizeMode: 'contain',
  }
});