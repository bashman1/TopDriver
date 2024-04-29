import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import {appColor} from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {filter} from '../../services/CommonService';
import {menu} from '../../intro-data';

const screenWidth = Dimensions.get("window").width;
const Home = (props: any) => { 

    const [items, setItems] = useState([])

    const goToDetailsPage=(element: { id: any; indicator?: string; type?: string; icon?: string; name?: string; }, direction: string)=>{
        if(direction=='details'){
            props.navigation.navigate("ItemList", { id: element.id, ind:element.param })
        }else if(direction == 'icons'){
            props.navigation.navigate("IconsPage", { id: element.id, ind:element.param })
        }else if(direction == 'quiz'){
            props.navigation.navigate("QuizList", { id: element.id, ind:element.param })
        }else if(direction == 'settings'){
            props.navigation.navigate("ItemList", { id: element.id, ind:element.param })
        }
    }


    const getHomeMenu=()=>{
        setItems(filter(menu, 'HOME_MENU'));
    }

    useEffect(() => {
        getHomeMenu();
    }, []);

    return (
        <ScrollView>
                    <View style={styles.gridContainer}>
                        {
                            items.map((element) => 
                                    <View style={[styles.item, styles.padding]}>
                                        <TouchableOpacity style={[styles.card, styles.minWidth, styles.itemCenter]} onPress={() => { goToDetailsPage(element, element.navigateTo) }}>
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
        </ScrollView>
    )
}
export default Home;