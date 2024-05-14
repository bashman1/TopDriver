import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import { appColor } from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get("window").width;
const IconDetailsPage = (props: any) => {

    const [selectedItems, setSelectedItems] = useState({})
    const [items, setItems] = useState([
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
        // {
        //     id: 1, itemListId: 1, type: 'community', icon: "car-key", name: "Road Signs", data: [

        //     ]
        // },
    ])

    const filterItems = (items, id) => {
        let index = items.findIndex(element => element.id == id);
        setSelectedItems(items[index]);
        console.log()
    }

    useEffect(() => {
        props.navigation.setOptions({ title: props.route.params.header });
        filterItems(items, 1)
    });

    return (
        <ScrollView>
            <View style={styles.padding}>
                <View style={styles.marginBottom}>
                    <View style={[styles.card,styles.iconDetails]}>
                        <Image style={styles.homeScreenIcon} key={selectedItems.id} source={selectedItems.img} />
                        <Text style={{textAlign:'center', paddingBottom:10,fontSize:15,width:'100%', color:"black"}}>{selectedItems.name}</Text>
                    </View>
                    {/* <View style={styles.gridContainer}>
                        {
                            selectedItems.map((element, i) => {
                                return (
                                    <View style={[styles.item, styles.padding]}>
                                        <TouchableOpacity style={[styles.card, styles.minWidth, styles.itemCenter]} onPress={() => { props.navigation.navigate("IconsPage", { id: element.id }) }}>
                                            <Image style={styles.homeScreenIcon} key={i} source={element.img} />
                                            <Text style={[styles.healthPalBlue, styles.textWrap, styles.fontWeightBold]}>{element.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View> */}
                </View>
            </View>
        </ScrollView>
    )
}
export default IconDetailsPage;