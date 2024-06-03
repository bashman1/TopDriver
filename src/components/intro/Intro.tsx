import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity,StatusBar, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import introData from '../../intro-data';
import { AuthContext } from '../../services/Context';
import { LoggedInUser, System, GenericInsert, GenericQueryAll, GenericQueryWhere } from '../../databases/allSchemas';

import BootSplash from "react-native-bootsplash";

const Intro = (props: any) => {
    const [selectedItems, setSelectedItems] = useState([])
    const [items, setItems] = useState(introData)

    const { intro } = React.useContext(AuthContext);

    useEffect(() => {

      const init = async () => {};
  
      init().finally(async () => {
        await BootSplash.hide({ fade: true });
        console.log("BootSplash has been hidden successfully");
      });
    }, []);


    const introDone=()=>{

      let systemData = {
        id:Math.floor(Date.now()/1000),
        key: 'INTRO',
        description: 'Introduction screens already seen.',
        status: 'Active',
        done: true,
        createdOn: new Date(),
      };

      GenericInsert(System, systemData).then((result)=>{
        intro()
      }).catch((error)=>{alert(JSON.stringify(error))})
      // props.navigation.navigate('GetStarted')
    }

   
const Card = ({item}:any) => {
    return (
      <View style={{flex:1, width:400,marginHorizontal:20, justifyContent:"center", alignItems:"center", paddingTop:20}}>
        <Text style={[styles.title,{flex:1, textAlign:'center', color:'#808080'}]}>{item.title}</Text>
        <Text style={{textAlign:'center',paddingHorizontal:40, paddingBottom:20,fontSize:16, color:'#808080'}}>{item.description}</Text>
        <Image style={{flex:1,resizeMode: 'contain',width: 400,height:470,marginBottom:30}}  source={item.img} />
      </View>
    );
  };

    return (
        <ScrollView style={{backgroundColor:'white', height:"100%"}}>
                  <StatusBar
                    animated={true}
                    backgroundColor="#fff"
                    barStyle={'dark-content'}
                    showHideTransition={'none'}
                    hidden={false} />
                <ScrollView  horizontal={true} style={{marginLeft:-20}}>
                    { items.map(item => <Card key={item.id} item={item}/>)}
                </ScrollView>
                <View style={{paddingHorizontal:10}}>
                    <TouchableOpacity style={styles.touchableButton} onPress={() => { introDone() }}>
                        <Text style={styles.healthPalWhite}>Get Started</Text>
                    </TouchableOpacity>
                </View>


        </ScrollView>
    )

}
export default Intro;