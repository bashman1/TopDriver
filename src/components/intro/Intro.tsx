import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity,StatusBar, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import introData from '../../intro-data';

const Intro = (props: any) => {
    const [selectedItems, setSelectedItems] = useState([])

    const [items, setItems] = useState(introData)

    useEffect(() => {
    });

   
const Card = ({item}:any) => {
    return (
      <View style={{flex:1, width:400,marginHorizontal:20}}>
        <Text style={[styles.title,{flex:1, textAlign:'center'}]}>{item.title}</Text>
        <Text style={{textAlign:'center',paddingHorizontal:50, paddingBottom:20,fontSize:16}}>{item.description}</Text>
        <Image style={{flex:1,resizeMode: 'contain',width: 400,height:470,marginBottom:30}}  source={item.img} />
      </View>
    );
  };

    return (
        <ScrollView style={{backgroundColor:'white'}}>
                    <StatusBar
                    animated={true}
                    backgroundColor="#fff"
                    barStyle={'dark-content'}
                    showHideTransition={'none'}
                    hidden={false} />
            <View style={styles.padding}>
                <ScrollView  horizontal={true}>
                    { items.map(item => <Card key={item.id} item={item}/>)}
                
                </ScrollView>
                <View style={styles.marginBottom}>
                    <TouchableOpacity style={styles.touchableButton} onPress={() => { props.navigation.navigate('GetStarted') }}>
                        <Text style={styles.healthPalWhite}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </ScrollView>
    )

}
export default Intro;