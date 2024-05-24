import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import {appColor} from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {filter} from '../../services/CommonService';
import {menu, iconImg} from '../../intro-data';

const screenWidth = Dimensions.get("window").width;
const IconsPage = (props: any) => {

    const [selectedItems, setSelectedItems] = useState([])

    const [items, setItems] = useState([])

    const goToDetails=(element)=>{
        props.navigation.navigate("IconDetailsPage", { id: element.id, header:element.name })
    }

    const filterItems = () => {
        setSelectedItems(filter(iconImg, props.route.params.ind));
    }

    useEffect(() => {
        props.navigation.setOptions({ title: props.route.params.header });
        filterItems();
    }, []);

    return (
        <ScrollView>
            <View style={styles.padding}>
                <View style={styles.marginBottom}>
                    <View style={{flexDirection:'row',flex:1,alignItems:'center', flexWrap:'wrap', justifyContent:'center', columnGap:10, rowGap:10}}>
                        {
                            selectedItems.map((element:any, i) => 
                                <TouchableOpacity style={[styles.cardNew,styles.gridItemNew]} onPress={() => {goToDetails(element)}}>
                                    <View style={{justifyContent:'center',alignItems:'center', width:"100%", height:160, columnGap:10}}>
                                            <Image style={styles.homeScreenIconNew} key={i} source={element.img} />
                                            <Text style={{textAlign:'center', paddingBottom:10,fontSize:15,width:'100%', color:"black", lineHeight:23, maxWidth:"80%"}}>{element.name}</Text>  
                                    </View>
                                    </TouchableOpacity>
                            )
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default IconsPage;