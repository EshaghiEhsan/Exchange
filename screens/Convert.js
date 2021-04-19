import React from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View, Image 
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
        <View style={styles.container}>
            <View style={{
               
            }}>
                {renderDropdownSearchable()}
                <View style={{
                    justifyContent:"center",
                    alignItems:"center",
                    marginVertical:60
                }}>
                     <TouchableOpacity style={{
                        width:50,
                        height:50,
                        borderRadius:30,
                        backgroundColor:COLORS.gray,
                        alignItems:"center",
                        justifyContent:"center"
                        }}>
                        <Image 
                            source={icons.right_arrow}
                            resizeMode='cover'
                            style={{
                                width:25,
                                height:25,
                            }}/>
                        </TouchableOpacity>
                </View>

                {renderDropdownSearchable()}
               
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
    },
   
  });
  
export default Convert;
