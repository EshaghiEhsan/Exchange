import React from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View, Platform 
} from 'react-native';
import {DropdownSearchable} from "../components";
import{COLORS,SIZES,FONTS,icons,images, dummyData} from '../constants'



const Convert = () => {

    function renderDropdownSearchable() {
        return(
            <DropdownSearchable />
        )
    }
	
    return (
        <View style={{
            flex:1,

        }}>
            {renderDropdownSearchable()}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
   
  });
  
export default Convert;
