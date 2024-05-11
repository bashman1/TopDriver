import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import { appColor } from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { menu } from '../../intro-data';
import { filter } from '../../services/CommonService';

const screenWidth = Dimensions.get("window").width;
const QuizList = (props: any) => {

    const [selectedItems, setSelectedItems] = useState({})
    const [items, setItems] = useState([

    ])

    const filterItems = () => {
        setItems(filter(menu, props.route.params.ind));
    }

    useEffect(() => {
        props.navigation.setOptions({ title: props.route.params.header });
        filterItems();
    }, []);

    return (
        <ScrollView>
            <View style={styles.padding}>
                {
                    items.map((element) => {
                        return (
                            <TouchableOpacity style={[styles.card, styles.marginBottom]} onPress={() => { props.navigation.navigate("Questions", { ind: element.param, header:element.name }) }}>
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