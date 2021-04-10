import React from "react";
import {
    View,
    Image,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import { Home } from "../screens"
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
                height: 100
            }
        }}>

            <Tab.Screen
                name="Home"
                component={Home}
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
                name="Portfolio"
                component={Home}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:"center",justifyContent:'center'}}>

                            <Image
                                source={icons.pie_chart}
                                resizeMode={'contain'}
                                style={{
                                    width: 30,
                                    height:30,
                                    tintColor:focused?COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{color:focused?COLORS.primary:COLORS.black,...FONTS.body5}}>PORTFOLIO</Text>

                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Transaction"
                component={Home}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:"center",justifyContent:'center'}}>
                            <Image
                                source={icons.transaction}
                                resizeMode={'contain'}
                                style={{
                                    width: 30,
                                    height:30,
                                    tintColor:COLORS.white
                                }}
                            />
                            <Text style={{color:focused?COLORS.primary:COLORS.black,...FONTS.body5}}>Transaction</Text>

                        </View>
                    ),

                }}

            />
            <Tab.Screen
                name="Prices"
                component={Home}
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
                            <Text style={{color:focused?COLORS.primary:COLORS.black,...FONTS.body5}}>PRICES</Text>

                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:"center",justifyContent:'center'}}>

                            <Image
                                source={icons.settings}
                                resizeMode={'contain'}
                                style={{
                                    width: 30,
                                    height:30,
                                    tintColor:focused?COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{color:focused?COLORS.primary:COLORS.black,...FONTS.body5}}>SETTINGS</Text>

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
