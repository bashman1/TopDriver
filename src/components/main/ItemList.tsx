import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
// import IonIcon from 'react-native-vector-icons/Ionicons';

import {filter} from '../../services/CommonService';
import {menu, iconImg} from '../../intro-data';

const screenWidth = Dimensions.get("window").width;
const ItemList = (props: any) => {
 
    const [items, setItems] = useState([

    ]);
    const [selectedItems, setSelectedItems] = useState([])

    const filterItems = () => {
        setSelectedItems(filter(menu, props.route.params.ind));
    }

    const navigateToNext=(element)=>{
        if(element.component == 'ItemList'){
            props.navigation.push(element.component, { ind:element.param });
        }else{
            props.navigation.navigate(element.component, { id: element.id, ind:element.param })
        }
    }

    useEffect(() => {
        filterItems()
    }, []);

    return (
        <ScrollView style={[styles.backgroundWhite]}>
            <View style={styles.padding}>
                <View>
                    {
                        selectedItems.map((element:any) => {
                            return (
                                <TouchableOpacity style={[styles.cardItemsList, styles.marginBottomItemList]} onPress={()=>{ navigateToNext(element)}}>
                                    <View style={[styles.questCardContainer]}>
                                        <Text style={[styles.fontWeightBold, styles.fontSize20,styles.textColor]}>{element.name}</Text>
                                        <IonIcon name="arrow-forward" color={'black'} size={25}/>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>


            </View>

        </ScrollView>
    )
}
export default ItemList;