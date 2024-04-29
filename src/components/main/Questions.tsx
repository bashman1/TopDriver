import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import { appColor } from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {menu, quiz} from '../../intro-data';
import {filter} from '../../services/CommonService';

const screenWidth = Dimensions.get("window").width;
const Questions = (props: any) => {

    const [selectedItems, setSelectedItems] = useState({})
    const [items, setItems] = useState([
        {id:1, question:"Who is a driver?", answer:"A person who operates a vehicle with skills, has a valid license permit and follows the rules regulations of highway code",
         suggestions:[
            {id:1, option: "A person who operates a vehicle with skills, has a valid license permit and follows the rules regulations of highway code"},
            {id:2, option: "A person who knows how operates a vehicle on the road."},
            {id:3, option: "A person who is willing to learn how to operates a vehicle."},
            {id:4, option: "All of the above."},
         ]}
        // { id: 1, name: "Practice Quiz One (164 signs)", description: "Have you learnt all the different road signs and symbols, use this quiz to test yourself." },
        // { id: 2, name: "Practice Quiz Two A (70 qns)", description: "This quiz covers the general knowledge you should have as a licensed driver." },
        // { id: 2, name: "Practice Quiz Two B (70 qns)", description: "This quiz covers the general knowledge you should have as a licensed driver." },
        // { id: 2, name: "Practice Quiz Three A (32 qns)", description: "This quiz covers some of different traffic signals and signs that you will meet on the road." },
        // { id: 2, name: "Practice Quiz Three B (45 qns)", description: "This quiz covers some of different traffic signals and signs that you will meet on the road." },
    ])

    const filterItems = () => {
        setItems(filter(quiz, props.route.params.ind))
    }

    useEffect(() => {
        filterItems()
    }, []);

    return (
        <ScrollView>
            <View style={styles.padding}>
                {
                    items.map((element) => {
                        return (
                            <View>
                                <Text style={styles.fontSize15}>{element.question}</Text>
                                <Text style={styles.fontSize10}>Choose your answer from below</Text>

                                <View>
                                    {
                                        element.suggestions.map((obj)=>{
                                            return (
                                                <TouchableOpacity style={[styles.card, styles.marginBottom]} onPress={() => { props.navigation.navigate("IconsPage", { id: element.id }) }}>
                                                {/* <Text>{element.name}</Text> */}
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={[styles.fontWeightBold, styles.fontSize10]}>{obj.option}</Text>
                
                                                </View>
                                                {/* <Text style={[styles.fontWeightBold, styles.fontSize12]}>{element.description}</Text> */}
                                            </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                            </View>
              
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}
export default Questions;