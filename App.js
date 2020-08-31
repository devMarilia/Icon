import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default function App() {
 return (
    <View style={styles.container}>
      <Icon name="home" size={40} color="#000"/>

      <TouchableOpacity style={styles.containerBtn}>
        <View style={styles.viewBtn}>
          <Icon 
            name="facebook"
            size={30}
            color="#fff"
          />
          <Text style={styles.textBtn}>Login Com o facebook</Text>
        </View>
      </TouchableOpacity>
    </View>

 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBtn: { 
    backgroundColor: '#3b5998',
    borderRadius: 10,
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 220,
    height: 50,
  },
  textBtn: {
    paddingLeft: 5,
    color: '#fff',
    fontSize: 17
  }
})