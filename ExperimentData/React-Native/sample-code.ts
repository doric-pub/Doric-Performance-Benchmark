/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useRef } from 'react';
 import {
   Dimensions,
   SafeAreaView,
   ScrollView,
   View,
   TouchableWithoutFeedback,
   ToastAndroid,
 } from 'react-native';
 
 let rowIndex = -1
 let index = -1
 
 const App = () => {
   const target = useRef(null)
   const [selected, setSelected] = useState(false)
 
   const range = (start, end) => Array.from({ length: (end - start) }, (v, k) => k + start)
 
   let rows = range(0, 500).map(() => {
     rowIndex ++
     
     let columns = range(0, 10).map(() => {
       let id = index++
   
       if (index == 500) {
         return (
           <TouchableWithoutFeedback
             onPress={() => {
               ToastAndroid.show("====" + id + "====", 1000)
               setSelected(true)
             }}>
             <View
               ref={target}
               style={{
                 width: (Dimensions.get('window').width - 45) / 10,
                 height: (Dimensions.get('window').width - 45) / 10,
                 backgroundColor: selected ? '#ff0000' : '#00ff00'
               }}>
             </View>
           </TouchableWithoutFeedback>
         )
       } else {
         return (
           <View
             ref={target}
             style={{
               width: (Dimensions.get('window').width - 45) / 10,
               height: (Dimensions.get('window').width - 45) / 10,
               backgroundColor: '#ff0000'
             }}>
           </View>
         )
       }
     })
 
     return (
       <View
         style={{
           flexDirection: 'row',
           justifyContent: 'space-between',
           marginBottom: 5,
         }}>
         {columns}
       </View>
     )
   })
 
   ToastAndroid.show("====" + rowIndex + "====" + index, 1000)
 
   return (
     <SafeAreaView>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic">
         {rows}
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 export default App;