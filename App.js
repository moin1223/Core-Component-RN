
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, Text, ScrollView,Pressable } from 'react-native';





export default function App() {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <ScrollView>
        <View style={{ height: 50, backgroundColor: 'red' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'gray', padding: 10 }}>This is a text</Text>
        </View>
        <View style={{ height: 50, backgroundColor: 'green' }}>
          <Text>This is a text</Text>
        </View>
        <Pressable onPress={() => {
          alert("Pressd")
        }}>
          <View style={{ height: 50, width: 50, backgroundColor: 'red' }}>
            <Text>This is a text</Text>
          </View>
        </Pressable>



        <Text>
          The Battle of Heraklion was fought during World War II on the island of Crete between 20 and 29 May 1941. British, Australian and Greek forces defended the port and the airfield of Heraklion against a German paratrooper attack. The German assault was launched without direct air support, and drops occurred over several hours rather than simultaneously. German units dropping near Heraklion (pictured) suffered very high casualties; those dropping further away were severely hampered by Cretan part
        </Text>
      </ScrollView>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
