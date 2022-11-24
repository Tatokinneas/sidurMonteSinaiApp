import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useFonts} from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Home = ({navigation})=> {
return (
    <View style={styles.container}>
    <SafeAreaView>
      <ScrollView>
  
  
    <Text style ={styles.titulo}>SIDUR MONTE SINAI</Text>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Shajrit")}><Text style ={styles.textoDeLosBotones}>Shajrit</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Minja") }><Text style ={styles.textoDeLosBotones}>Minja</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Arbit")}><Text style ={styles.textoDeLosBotones}>Arbit</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Noche Shabat")}><Text style ={styles.textoDeLosBotones}>Noche Shabat</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Día Shabat")}><Text style ={styles.textoDeLosBotones}>Día Shabat</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Rosh Jodesh")}><Text style ={styles.textoDeLosBotones}>Rosh Jodesh</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Shalosh Regalim")}><Text style ={styles.textoDeLosBotones}>Shalosh Regalim</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Perashot")}><Text style ={styles.textoDeLosBotones}>Perashot*</Text></Pressable>
    <Pressable style ={styles.button} onPress = {()=> navigation.navigate("Otros")}><Text style ={styles.textoDeLosBotones}>Otros...</Text></Pressable>
    <Text style={styles.nota}> *Solo Cohen, Levy e Israel </Text>
    <Text style={styles.donadores}> Donado Leiluy Nishmat Eliahu Ben Yemile </Text>
    <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  </View>
  )





}
export  default Home;






const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BB0D32',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
    backgroundColor: "#860008",
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 110,
    marginVertical: 8,
    alignItems: 'center',
    borderRadius: 5,   
    },
    titulo: {
      textAlign: 'center',
      fontSize: 32,
      color: "#1A0D6B",
      fontFamily: 'Arial-BoldMT',
  
    },
    textoDeLosBotones: {
  
      color: 'white',
      fontFamily: "Noto",
      fontSize: 15,
      
    },
  
    donadores: {
      textAlign: 'center',
      fontSize: 30,
      color: "#1A0D6B",
      fontFamily: "Noto",
  
    },
  
    nota: {
  paddingVertical: 2,
  fontSize: 10,
  color: "white",
  
  
  
    },
  });
  