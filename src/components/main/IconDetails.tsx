import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import { appColor } from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {filter, findObjParam} from '../../services/CommonService';
import {menu, iconImg,  theories} from '../../intro-data';

const screenWidth = Dimensions.get("window").width;
const IconDetailsPage = (props: any) => {

    const [selectedItems, setSelectedItems] = useState({})
    const [items, setItems] = useState([])

    const filterItems = (items, id) => {
        setSelectedItems(findObjParam(iconImg, 'id', props.route.params.id));
    }

    useEffect(() => {
        props.navigation.setOptions({ title: props.route.params.header });
        filterItems(items, props.route.params.id)
    }, []);

    return (
        <ScrollView>
            <View style={styles.padding}>
                <View style={styles.marginBottom}>
                    <View style={[styles.cardNew,styles.iconDetails]}>
                        <Image style={styles.homeScreenIcon2} key={selectedItems.id} source={selectedItems.img} />
                        <Text style={{textAlign:'center', paddingBottom:10,fontSize:15,width:'100%', color:"black"}}>{selectedItems.name}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default IconDetailsPage;