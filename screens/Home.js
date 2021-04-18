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
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import{COLORS,SIZES,FONTS,icons,images, dummyData} from '../constants'
import {TopGain} from "../components";

const Home = () => {

    const [transactionHistory,setTransactionHistory]=React.useState(dummyData.transactionHistory)

    const image=[
        {thumbnail:require("../assets/images/slideShow/1.jpg")},
        {thumbnail:require("../assets/images/slideShow/2.jpg")},
        {thumbnail:require("../assets/images/slideShow/3.jpg")}
    ]

    const coin=[
        [
            {name:"bitCoin",price:"65000"},
            {name:"ripel",price:"0.8598"},
            {name:"BNB",price:"200"},
        ],
        [
            {name:"bitCoin",price:"65000"},
            {name:"rippel",price:"0.8598"},
            {name:"BNB",price:"2000"},
        ]   
       
           
        
        
    ]

    const newScrollX=React.useRef(new Animated.Value(0)).current;


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

    function renderCustomCoin() {
        return(
            <View style={{
                marginBottom: -5,
            }}>
                <Animated.FlatList
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={SIZES.width}
                    scrollEventThrottle={16}
                    decelerationRate={0}
                    data={coin}
                    keyExtractor={item=>`${item.id}`}
                    onScroll={Animated.event([
                        {nativeEvent:{contentOffset:{
                            x:newScrollX
                        }}}
                    ],{
                        useNativeDriver:false
                    })}
                    renderItem={({item,index})=>{
                        return(
                            
                            <TouchableWithoutFeedback>
                                <View style={{
                                    width:SIZES.width,
                                    justifyContent:"space-between",
                                    flexDirection: 'row',
                                    backgroundColor:COLORS.red,
                                    paddingVertical:20,
                                    paddingHorizontal:30
                                }}>
                                    {
                                        item.map((anObjectMapped,index)=>{
                                            return(
                                                <View style={{
                                                    justifyContent:"center",
                                                    alignItems:"center"
                                                }}>
                                                    <Text style={{
                                                        fontSize:18
                                                    }}>
                                                        {anObjectMapped.name}
                                                    </Text>
                                                    <Text style={{
                                                        fontSize:11
                                                    }}>
                                                        {anObjectMapped.price}
                                                    </Text>
                                                </View>
                                               
                                            )
                                            
                                        })
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }}
                ></Animated.FlatList>
                     {renderDots()}
            </View>
        )
    }

    function renderDots() {

        const dotPosition=Animated.divide(newScrollX,SIZES.width)
        return(
            <View style={{
                height:13,
                marginTop:-10,
            }}>
                <View style={{
                    flexDirection:"row",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {
                        coin.map((item,index)=>{
                            const opacity=dotPosition.interpolate({
                                inputRange:[index-1,index,index+1],
                                outputRange:[0.3,1,0.3],
                                extrapolate:'clamp'
                            })
                            const dotSize=dotPosition.interpolate({
                                inputRange:[index-1,index,index+1],
                                outputRange:[6,20,6],
                                extrapolate:'clamp'
                            })
                            const dotColor=dotPosition.interpolate({
                                inputRange:[index-1,index,index+1],
                                outputRange:[COLORS.gray,COLORS.white,COLORS.gray],
                                extrapolate:'clamp'
                            })

                            return(
                                <Animated.View key={`dot-${index}`}
                                    opacity={opacity}
                                    style={{
                                        borderRadius:SIZES.radius,
                                        marginHorizontal:6,
                                        width: dotSize,
                                        height: 6,
                                        backgroundColor:dotColor
                                    }}
                                />
                            )
                        })
                    }
                </View>
            </View>
        )
    }

    function renderTopGain() {
        return(
            <TopGain customContainerStyle={{...styles.shadow}} history={transactionHistory} headerName={"Top gain"}/>
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
                {renderCustomCoin()}
                {renderTopGain()}
            </ScrollView>
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
      },
      containerCustomCoin: {
        flex: 1,
        height:90,
        marginTop:20
      },
      slider: { backgroundColor: '#000', height: 150 },
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
      customSlideCoin: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      },
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

export default Home;
