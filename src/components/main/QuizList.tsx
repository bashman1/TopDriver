import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import { appColor } from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get("window").width;
const QuizList = (props: any) => {

    const [selectedItems, setSelectedItems] = useState({})
    const [items, setItems] = useState([
        {id: 1, name:"Practice Quiz One (164 signs)", description:"Have you learnt all the different road signs and symbols, use this quiz to test yourself."},
        {id: 2, name:"Practice Quiz Two A (70 qns)", description:"This quiz covers the general knowledge you should have as a licensed driver."},
        {id: 2, name:"Practice Quiz Two B (70 qns)", description:"This quiz covers the general knowledge you should have as a licensed driver."},
        {id: 2, name:"Practice Quiz Three A (32 qns)", description:"This quiz covers some of different traffic signals and signs that you will meet on the road."},
        {id: 2, name:"Practice Quiz Three B (45 qns)", description:"This quiz covers some of different traffic signals and signs that you will meet on the road."},
    ])

    const filterItems = (items, id) => {
        let index = items.findIndex(element => element.id == id);
        setSelectedItems(items[index]);
        console.log()
    }

    useEffect(() => {
        filterItems(items, 1)
    });

    return (
        <ScrollView>
            <View style={styles.padding}>

            {
                        items.map((element) => {
                            return (
                                <TouchableOpacity style={[styles.card, styles.marginBottom]} onPress={()=>{ props.navigation.navigate("Questions", { id: element.id })}}>
                                    {/* <Text>{element.name}</Text> */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[styles.fontWeightBold, styles.fontSize15]}>{element.name}</Text>
                                        
                                    </View>
                                    <Text style={[styles.fontWeightBold, styles.fontSize12]}>{element.description}</Text>
                                </TouchableOpacity>
                            )
                        })
            }

            </View>
        </ScrollView>
    )
}
export default QuizList;