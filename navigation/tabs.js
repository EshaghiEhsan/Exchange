import React from "react";
import {
    View,
    Image,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import * as Screen from "../screens"
import { COLORS, FONTS, icons } from "../constants"

const Tab = createBottomTabNavigator()


const Tabs = () => {
    return(
        <Tab.Navigator tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                elevation: 0,
                backgroundColor:COLORS.white,
                borderTopColor:'transparent',
                height: 80
            }
        }}>

            <Tab.Screen
                name="Home"
                component={Screen.Home}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:"center",justifyContent:'center'}}>

                            <Image
                                source={icons.home}
                                resizeMode={'contain'}
                                style={{
                                    width: 30,
                                    height:30,
                                    tintColor:focused?COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{color:focused?COLORS.primary:COLORS.black,...FONTS.body5}}>HOME</Text>

                        </View>
                    )
                }}
            />

            <Tab.Screen
                name="market"
                component={Screen.Market}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:"center",justifyContent:'center'}}>

                            <Image
                                source={icons.market}
                                resizeMode={'contain'}
                                style={{
                                    width: 30,
                                    height:30,
                                    tintColor:focused?COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{color:focused?COLORS.primary:COLORS.black,...FONTS.body5}}>MARKET</Text>

                        </View>
                    )
                }}
            />


            <Tab.Screen
                name="Convert"
                component={Screen.Convert}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:"center",justifyContent:'center'}}>

                            <Image
                                source={icons.right_arrow}
                                resizeMode={'contain'}
                                style={{
                                    width: 30,
                                    height:30,
                                    tintColor:focused?COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{color:focused?COLORS.primary:COLORS.black,...FONTS.body5}}>Convert</Text>

                        </View>
                    )
                }}
            />



            <Tab.Screen
                name="order"
                component={Screen.Order}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:"center",justifyContent:'center'}}>
                            <Image
                                source={icons.order}
                                resizeMode={'contain'}
                                style={{
                                    width: 30,
                                    height:30,
                                    tintColor:focused?COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{color:focused?COLORS.primary:COLORS.black,...FONTS.body5}}>ORDER</Text>

                        </View>
                    ),

                }}

            />
            <Tab.Screen
                name="Detail"
                component={Screen.Detail}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:"center",justifyContent:'center'}}>

                            <Image
                                source={icons.line_graph}
                                resizeMode={'contain'}
                                style={{
                                    width: 30,
                                    height:30,
                                    tintColor:focused?COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{color:focused?COLORS.primary:COLORS.black,...FONTS.body5}}>DETAIL</Text>

                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Screen.Profile}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:"center",justifyContent:'center'}}>

                            <Image
                                source={icons.profile}
                                resizeMode={'contain'}
                                style={{
                                    width: 30,
                                    height:30,
                                    tintColor:focused?COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{color:focused?COLORS.primary:COLORS.black,...FONTS.body5}}>PROFILE</Text>

                        </View>
                    )
                }}
            />


        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;
