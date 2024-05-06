import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance, Alert } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import { appColor } from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {quiz} from '../../intro-data';
import {filter} from '../../services/CommonService';

const screenWidth = Dimensions.get("window").width;
const Questions = (props: any) => {

    const [selectedItems, setSelectedItems] = useState({})
    const [items, setItems]:any = useState([])
    const [nextQtnIndex, setNextQtnIndex] = useState(0);
    const filterItems = () => {
        setItems(filter(quiz, props.route.params.ind))
    }

    useEffect(() => {
        filterItems()
    }, []);
    const showNextQtn = () => {
        setNextQtnIndex(nextQtnIndex => nextQtnIndex + 1)
        
        if(nextQtnIndex === (items[0].qtnsList.length - 1 )){
            setNextQtnIndex(0)
        }
        
    }
    return (
        <ScrollView>
            <View style={styles.padding}>
                {
                    items.map((element:any) => {
                        return (
                            <View>
                                        <View>
                                            <Text style={element.qtnsList[nextQtnIndex].symbol ? styles.qtn15 :styles.qtn  }>{element.qtnsList[nextQtnIndex].qtnNo + ' ' + element.qtnsList[nextQtnIndex].question}</Text>
                                            <View style={{flex:1,justifyContent:'center', alignItems:"center"}}>
                                                {element.qtnsList[nextQtnIndex].symbol && <Image style={{flex:1,resizeMode: 'contain',width: "50%",height:200}}  source={element.qtnsList[nextQtnIndex].symbol } />}
                                            </View>
                                            
                                            <Text style={styles.qtnChoose}>Choose your answer from below</Text>

                                            {element.qtnsList[nextQtnIndex].suggestions.map((sug:any) => 
                                                <TouchableOpacity style={[styles.card, styles.marginBottom]} onPress={() => {showNextQtn()} }>
                                                
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={[styles.fontWeightBold, styles.fontSize15]}>{sug.option}</Text>
        
                                                </View>
                                            </TouchableOpacity>)}
                                            
                                        </View>
                                    
                            </View>
              
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}
export default Questions;