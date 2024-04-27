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
        // {
        //     id: 1, icon: "", itemId: 1, data: [
        //         { id: 1, icon: "", name: "Mandatory Signs" },
        //         { id: 2, icon: "", name: "Warning Signs" },
        //         { id: 2, icon: "", name: "Information Signs" },
        //         { id: 2, icon: "", name: "Roadworks Signs" },
        //         { id: 2, icon: "", name: "Transerve Markings" },
        //         { id: 2, icon: "", name: "Other Road Markings" },
        //     ]
        // },
        // {
        //     id: 2, icon: "", itemId: 2, data: [
        //         { id: 1, icon: "", name: "Introduction to driving" },
        //         { id: 2, icon: "", name: "Basic Mechanics" },
        //         { id: 2, icon: "", name: "Defensive Driving" },
        //         { id: 2, icon: "", name: "Roadworks Signs" },
        //         { id: 2, icon: "", name: "Basic first aid" },
        //     ]
        // }
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
        <ScrollView>
            <View style={styles.padding}>
                <View>
                    {
                        selectedItems.map((element:any) => {
                            return (
                                <TouchableOpacity style={[styles.card, styles.marginBottom]} onPress={()=>{ navigateToNext(element)}}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[styles.fontWeightBold, styles.fontSize20]}>{element.name}</Text>
                                        <IonIcon name="arrow-forward" color={'000'} size={25}/>
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