import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Animated,
    StyleSheet,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';
import {TopGain} from "../components";
import{COLORS,SIZES,FONTS,icons,images, dummyData} from '../constants'


const Market = () => {

    const [transactionHistory,setTransactionHistory]=React.useState(dummyData.transactionHistory)





    function renderTopGain() {
        return(
            <TopGain customContainerStyle={{...styles.shadow}} history={transactionHistory} headerName={"Market"}/>
        )
    }
	



    return (
        <SafeAreaView style={{
            flex:1,

        }}>

            <ScrollView contentContainerStyle={{
                paddingBottom:100
            }}>
                {renderTopGain()}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    
      shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

})

export default Market;
