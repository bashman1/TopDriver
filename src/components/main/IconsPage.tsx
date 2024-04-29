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

    const [items, setItems] = useState([
        { id: 1, itemListId:1, type: 'community', icon: "car-key", name: "Road Signs", 
        data:[
            { id: 1, img: require("../../assets/mandatory_signs/compulsarycycletrack.png"), name: "Compulsory cycle track" },
            { id: 2, img: require("../../assets/mandatory_signs/compulsarypedestrianfootpath.png"), name: "Compulsory pedestrian footpath" },
            { id: 3, img: require("../../assets/mandatory_signs/compulsoryminimumspeed.png"), name: "Compulsory minimum speed" },
            { id: 4, img: require("../../assets/mandatory_signs/compulsoryparkingforthedisabled.png"), name: "Compulsory parking for disabled" },
            { id: 5, img: require("../../assets/mandatory_signs/compulsorytrackforcattle.png"), name: "Compulsory track for cattle" },
            { id: 6, img: require("../../assets/mandatory_signs/directiontobefollowed.png"), name: "Direction to be followed" },
            { id: 7, img: require("../../assets/mandatory_signs/dontdrinkanddrive.png"), name: "Don't drink and drive" },
            { id: 8, img: require("../../assets/mandatory_signs/dontparkonpavements.png"), name: "Don't park on pavement" },
            { id: 9, img: require("../../assets/mandatory_signs/donttextanddrive.png"), name: "Don't text and drive" },
            { id: 10, img: require("../../assets/mandatory_signs/drivingvehicleslessthandistanceshownisprohibited.png"), name: "Driving vehicle less than " },
            { id: 11, img: require("../../assets/mandatory_signs/endofcompulsoryminimumspeed.png"), name: "End of compulsory minimum speed" },
            { id: 12, img: require("../../assets/mandatory_signs/endofprohibitions.png"), name: "End of prohibitions" },
            { id: 13, img: require("../../assets/mandatory_signs/endofspeedlimit.png"), name: "End of speed limit" },
            { id: 14, img: require("../../assets/mandatory_signs/entryforbbidenformotorcycles.png"), name: "Entry forbidden to motorcycle" },
            { id: 15, img: require("../../assets/mandatory_signs/entryforbbidenforpoweroranimaldrivenvehicles.png"), name: "Entry forbidden for power" },
            { id: 16, img: require("../../assets/mandatory_signs/entryforbbidenforpoweroranimaldrivenvehicles.png"), name: "Entry forbidden for power" },
            { id: 17, img: require("../../assets/mandatory_signs/entryforbbidenforpoweroranimaldrivenvehicles.png"), name: "Entry forbidden for power" },
            { id: 18, img: require("../../assets/mandatory_signs/entryforbbidenforpoweroranimaldrivenvehicles.png"), name: "Entry forbidden for power" },
        ]},

        
    ])

    const goToDetails=(element)=>{
        // IconDetailsPage
        props.navigation.navigate("IconDetailsPage", { id: element.id })
    }

    const filterItems = () => {
        setSelectedItems(filter(iconImg, props.route.params.ind));
        // let index = items.findIndex(element => element.itemListId == id);
        // setSelectedItems(items[index].data);
    }

    useEffect(() => {
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
                                    <View style={{justifyContent:'center',alignItems:'center', width:"100%", height:160}}>
                                        
                                            <Image style={styles.homeScreenIconNew} key={i} source={element.img} />
                                            <Text style={{textAlign:'center', paddingBottom:20,fontSize:13,width:'100%'}}>{element.name}</Text>
                                       
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