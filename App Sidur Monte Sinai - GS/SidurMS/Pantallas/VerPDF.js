import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import PdfReader from 'rn-pdf-reader-js'


const VerPDF = ({navigation}) => {
  const route = useRoute();
  console.log(route);

  return (
    <>
    {/* <View style={styles.container}>
    <SafeAreaView>
      <ScrollView> */}
  
  
   <PdfReader source =  {{uri: "http://cdn.ca9.uscourts.gov/datastore/uploads/cmecf/doc-cross-doc-hyperlinks.pdf"}}
   withScroll = {false} >   </PdfReader>
    <StatusBar style="auto" />
      {/* </ScrollView>
    </SafeAreaView>
  </View> */}
  </>
  )
  
}

export default VerPDF;

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
    fontFamily: 'Noto',

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
    fontFamily: "sans-serif",

  },

  nota: {
paddingVertical: 2,
fontSize: 10,
color: "white",



  },
});

  











