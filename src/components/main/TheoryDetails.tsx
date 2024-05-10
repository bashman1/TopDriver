import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import {appColor} from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {filter, findObj} from '../../services/CommonService';
import {menu, iconImg,  theories} from '../../intro-data';
const screenWidth = Dimensions.get("window").width;
import { useFocusEffect } from '@react-navigation/native';

const TheoryDetails = (props: any) => {

    const [selectedItems, setSelectedItems] = useState({})


    const goToDetails=(element)=>{
        props.navigation.navigate("IconDetailsPage", { id: element.id })
    }

    const filterItems = () => {

        setSelectedItems(findObj(theories, props.route.params.ind));
    }

    useEffect(() => {
        console.log(props.route.params.ind)
  
       
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            filterItems();
            return () => {
            };
        }, [])
    );

    return (
        <ScrollView style={[styles.backgroundWhite]}>
            <View style={styles.padding}>
                <View style={[styles.marginBottom, styles.cardTheories]}>
                    {
                       selectedItems.theory && selectedItems.theory.map((obj)=>{
                            return (
                                <View>
                                {obj.element=="header" && <Text style={[styles.healthPalBlue, styles.fontWeightBold, styles.fontSize20, styles.marginBottom]} key={obj.content}>{obj.content}</Text>}
                                {obj.element=="image" &&  <Image style={{flex:1,resizeMode: 'contain',width: "96%",height:250, borderRadius:10, marginHorizontal:"1.5%"}} key={obj.content} source={obj.content} />}
                                {obj.element=="paragraph" && <Text style={[ styles.fontSize25, styles.marginBottom, styles.textColor, styles.marginTop10]} key={obj.content}>{obj.content}</Text>}
                                {obj.element=="bullets" && obj.content.map((data)=> { return (<Text style={[styles.fontSize25, styles.marginBottom10]} key={data}><IonIcon name="ellipse-outline" color={'#000'} size={12}/>   {data}</Text>)})}
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}
export default TheoryDetails;