import React, { useEffect } from 'react';
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
    TouchableHighlight
} from 'react-native';
import ImageSlider from 'react-native-image-slider';

import{COLORS,SIZES,FONTS,icons,images, dummyData} from '../constants'


const Home = () => {

    const image=[
        {id:1,thumbnail:require("../assets/images/slideShow/1.jpg")},
        {id:2,thumbnail:require("../assets/images/slideShow/2.jpg")},
        {id:3,thumbnail:require("../assets/images/slideShow/3.jpg")}
    ]

    //const newScrollX=React.useRef(new Animated.Value(0)).current;


    function renderHeader(){
        return(
            <View style={{
                flexDirection: 'row',
                justifyContent:"space-between",
                alignItems:"center",
                paddingHorizontal:SIZES.padding
            }}>
                {/* {Profile} */}
                <TouchableOpacity style={{
                    alignItems:"center",
                    justifyContent:"center",
                    width:50,
                    height:50
                }}
                onPress={()=>console.log("sdcsdc")}>
                    <Image source={images.ripple}
                        style={{width:40,height:40,borderRadius:20}}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    alignItems:"center",
                    justifyContent:"center",
                    width:50,
                    height:50
                }}
                onPress={()=>console.log("sdcsdc")}>
                    <Image source={images.bitcoin}
                        style={{width:25,height:25,}}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    function renderSwipper(){
        return(
            <SafeAreaView style={styles.container}>
                <ImageSlider
                    loopBothSides
                    autoPlayWithInterval={3000}
                    images={image}
                    customSlide={({ index, item, style, width }) => (
                        // It's important to put style here because it's got offset inside
                        <View key={index} style={[style, styles.customSlide]}>
                            <ImageBackground
                                source={item.thumbnail}
                                resizeMode="cover"
                                style={{
                                    width:SIZES.width,
                                    height:150,
                                    justifyContent:"flex-end"
                                }}
                                >
                            </ImageBackground>
                        </View>
                    )}
                    customButtons={(position, move) => (
                        <View style={styles.buttons}>
                        {image.map((image, index) => {
                            return (
                            <TouchableHighlight
                                key={index}
                                underlayColor="#ccc"
                                onPress={() => move(index)}
                                style={styles.button}
                            >
                                <Text style={position === index && styles.buttonSelected}>
                                    {index + 1}
                                </Text>
                            </TouchableHighlight>
                            );
                        })}
                        </View>
                    )}
                />
            </SafeAreaView>
        )
    }


    return (
        <SafeAreaView style={{
            flex:1,

        }}>
            {renderHeader()}

            <ScrollView contentContainerStyle={{
                paddingBottom:100
            }}>
                {renderSwipper()}

            </ScrollView>
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
      },
      slider: { backgroundColor: '#000', height: 350 },
      buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      button: {
        margin: 3,
        width: 15,
        height: 15,
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonSelected: {
        opacity: 1,
        color: 'red',
      },
      customSlide: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default Home;
