import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './Componentes/Header';
import Arbit from "./Pantallas/Arbit";
import Ayunos from "./Pantallas/Ayunos";
import Boda from "./Pantallas/Boda";
import BritMila from "./Pantallas/Brit Mila";
import DiaShabat from "./Pantallas/DiaShabat";
import Home from "./Pantallas/Home";
import Izkor from "./Pantallas/Izkor";
import Januca from "./Pantallas/Januca";
import Minja from "./Pantallas/Minja";
import NocheShabat from "./Pantallas/NocheShabat";
import Otros from "./Pantallas/Otros";
import Perashot from "./Pantallas/Perashot";
import RoshJodesh from "./Pantallas/Rosh Jodesh";
import ShabatonimDiferentes from "./Pantallas/Shabatonim Diferentes";
import Shajrit from "./Pantallas/Shajrit";
import ShaloshRegalim from "./Pantallas/Shalosh Regalim";
import PDF from "./Pantallas/VerPDF";


const Stack = createNativeStackNavigator();
export default function App() {
  let [Fonts] = useFonts(
    {
'Oswald': require ('./assets/Oswald-VariableFont_wght.ttf'),
'Noto': require ('./assets/NotoSans-ExtraBold.ttf'),

    }
  )
  return (
    <SafeAreaProvider>
    <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name = "Home"
  options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}} component ={Home} />
  <Stack.Screen name = "Shajrit" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {Shajrit} />
  <Stack.Screen name = "Minja" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {Minja}/>
  <Stack.Screen name = "Arbit" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {Arbit}/>
  <Stack.Screen name = "Noche Shabat" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {NocheShabat}/>
  <Stack.Screen name = "Día Shabat" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {DiaShabat} />
  <Stack.Screen name = "Rosh Jodesh" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {RoshJodesh}/>
  <Stack.Screen name = "Shalosh Regalim" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {ShaloshRegalim}/>
  <Stack.Screen name = "Perashot" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {Perashot}/>
  <Stack.Screen name = "Otros" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {Otros}/>
  <Stack.Screen name = "Januca" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {Januca}/>
  <Stack.Screen name = "Boda" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {Boda}/>
  <Stack.Screen name = "Brit Mila" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {BritMila}/>
  <Stack.Screen name = "Ayunos" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {Ayunos}/>
  <Stack.Screen name = "Izkor" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {Izkor}/>
  <Stack.Screen name = "PDF" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {PDF}/>
  <Stack.Screen name = "Shabatonim Diferentes" options = {{headerTitle: ()=> <Header> </Header>, headerStyle: {backgroundColor:'#BB0D32', borderBottomWidth: 0}}}
  component = {ShabatonimDiferentes}/>
   
</Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  
  );
}

