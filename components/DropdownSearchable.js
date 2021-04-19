import React, { useEffect, useState } from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View, Platform 
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { COLORS } from '../constants';



function comp(a, b) {
    return a.toLowerCase().trim() === b.toLowerCase().trim();
}
  
function findCoins(query, coins) {
    if (query === '') {
      return [];
    }
  
    const regex = new RegExp(`${query.trim()}`, 'i');
    return coins.filter((coin) => coin.name.search(regex) >= 0);
}


  const DropdownSearchable = () => {

    const [allCoins, setAllCoins] = useState([]);
    const [query, setQuery] = useState('');
    const coins = findCoins(query, allCoins);

    const coin=[
        {name:"bitCoin"},
        {name:"ripel"},
        {name:"BNB"},
    ]

    useEffect(() => {
        setAllCoins(coin);
    }, []);
	
    return (
        <View style={styles.container}>
            <View style={styles.autocompleteContainer}>
                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    data={ coins.length === 1 && comp(query, coins[0].name) ? [] : coins}
                    value={query}
                    style={{
                      
                      marginStart:-1
                    }}
                    onChangeText={setQuery}
                    placeholder="Enter first coin!"
                    flatListProps={{
                        keyExtractor: (item) => item.episode_id,
                        renderItem: ({ item, i }) => (
                          <TouchableOpacity style={{paddingHorizontal:20,}} onPress={() => setQuery(item.name)} >
                              <Text style={styles.itemText}>{item.name}</Text>
                          </TouchableOpacity>
                        ),
                    }}
                />
            </View>
            <View style={styles.descriptionContainer}>
                {coins.length > 0 ? (
                <Text>  </Text>
                ) : (
                <Text style={styles.infoText}> </Text>
                )}
            </View>
        </View>
    )

  }

  const styles = StyleSheet.create({
    container: {
      alignItems:'center',
      justifyContent: "center",
      zIndex:1000,
      flex: 1,
      paddingTop: 50,
      ...Platform.select({
        web: {
          marginTop: 0
        },
        default: {
        }
      })
    },
    itemText: {
      fontSize: 15,
      margin: 2,
      marginLeft: -10,
      
    },
    descriptionContainer: {
      backgroundColor: '#F5FCFF',
      marginTop: 8,
    },
    infoText: {
      textAlign: 'center',
    },
    autocompleteContainer: {
      width:"60%",
      position:"absolute",
      flex: 1,
      zIndex: 1,
      padding: 5,
    },
  });

  export default DropdownSearchable;


