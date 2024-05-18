import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StatusBar, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import { appColor } from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { filter } from '../../services/CommonService';
import { menu } from '../../intro-data';
import carRacer from '../../assets/vehicle-360-exterior.png'
import BootSplash from "react-native-bootsplash";

const screenWidth = Dimensions.get("window").width;
const Home = (props: any) => {

    const [items, setItems] = useState([])

    const goToDetailsPage = (element: { id: any; indicator?: string; type?: string; icon?: string; name?: string; }, direction: string) => {
        if (direction == 'details') {
            props.navigation.navigate("ItemList", { id: element.id, ind: element.param, header:element.name })
        } else if (direction == 'icons') {
            props.navigation.navigate("IconsPage", { id: element.id, ind: element.param, header:element.name })
        } else if (direction == 'quiz') {
            props.navigation.navigate("QuizList", { id: element.id, ind: element.param, header:element.name })
        } else if (direction == 'settings') {
            props.navigation.navigate("TheoryDetails", { id: element.id, ind: element.param, header:element.name })
        }
    }


    const getHomeMenu = () => {
        setItems(filter(menu, 'HOME_MENU'));
    }

    useEffect(() => {
        const init = async () => {
            props.navigation.setOptions({ title: 'Home' })
            getHomeMenu();
        };
    
        init().finally(async () => {
          await BootSplash.hide({ fade: true });
          console.log("BootSplash has been hidden successfully");
        });

    });

    return (
        <ScrollView style={{backgroundColor:"white"}}>
            <StatusBar
                animated={true}
                backgroundColor={appColor()}
                barStyle={'light-content'}
                showHideTransition={'none'}
                hidden={false} />
            <View style={styles.padding}>
                <View style={styles.marginBottom}>
                    <View style={{flex:1, alignContent:"center", justifyContent:"center", marginBottom:10}}>
                        <Image style={{flex:1,resizeMode: 'cover',width: "96%",height:190, borderRadius:10, marginHorizontal:"1.5%"}}  source={carRacer } />
                    </View>
                    <View style={styles.gridContainerHome}>
                        {
                            items.map((element, i) =>
                                <View style={[styles.itemHome]}>
                                    <TouchableOpacity style={[styles.cardHome, styles.minWidthHome, styles.itemCenter]} onPress={() => { goToDetailsPage(element, element.navigateTo) }}>
                                        {element.type == 'ionic' ? (
                                            <IonIcon name={element.icon} color={appColor()} size={60} />
                                        ) : (
                                            <Icon name={element.icon} size={60} color={appColor()} />
                                        )}
                                        <Text style={[styles.healthPalBlue, styles.fontWeightBold, styles.fontSize15]}>{element.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default Home;