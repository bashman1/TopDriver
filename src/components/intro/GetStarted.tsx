import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance, StatusBar } from 'react-native';
import { styles } from '../../styles/Styles';
import introData from '../../intro-data';
import { getStarted } from '../../intro-data';
const GetStarted = (props: any) => {
    const [selectedItems, setSelectedItems] = useState([])

    const [items, setItems] = useState(introData)

    useEffect(() => {
    });

   
const Card = () => {
    return (
      <>
        {getStarted.map(item =>
            <View style={{flex:1, width:'100%'}}>
                <Text style={[styles.title,{flex:1, textAlign:'center'}]}>{item.title}</Text>
                <Text style={{textAlign:'center',paddingHorizontal:50, paddingBottom:20,fontSize:16}}>{item.description}</Text>
                <View>
                {
                    item.details.map(obj =>     
                        <View style={{flex:1}}>
                             <Text style={{textAlign:'center',paddingHorizontal:50, paddingBottom:20,fontSize:16,marginTop:40}}>{obj.detailsTitle}</Text>
                             
                             <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                                {obj.iconsDescription.map(iconDes => 
                                    <View style={{justifyContent:'center',alignItems:'center',flex:1, rowGap:10}}>
                                        <Image style={{flex:1,resizeMode: 'contain',width: 100,height:100}}  source={iconDes.img} />
                                        <Text style={{flex:1,textAlign:'center', paddingBottom:20,fontSize:12,width:'100%'}}>{iconDes.text}</Text>
                                    </View>
                            )}
                            </View>
                           
                        </View>
                    )
                }
                </View>
            </View>
         )}
      </>
    );
  };

    return (
        <ScrollView style={{backgroundColor:'white'}}>
  
            <View style={styles.padding}>
                <ScrollView>
                <Card/>
                </ScrollView>
                <View style={styles.marginBottom}>
                        <TouchableOpacity style={styles.touchableButton} onPress={() => { props.navigation.navigate('LearnMore') }}>
                        <Text style={styles.healthPalWhite}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </ScrollView>
    )

}
export default GetStarted;