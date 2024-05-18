import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance, StatusBar } from 'react-native';
import { styles } from '../../styles/Styles';
import introData from '../../intro-data';
import { getStarted } from '../../intro-data';
import BootSplash from "react-native-bootsplash";


const GetStarted = (props: any) => {
    const [selectedItems, setSelectedItems] = useState([])

    const [items, setItems] = useState(introData)
    // const { signIn } = React.useContext(AuthContext);

    useEffect(() => {
        const init = async () => {};

        init().finally(async () => {
            await BootSplash.hide({ fade: true });
            console.log("BootSplash has been hidden successfully");
        });

    }, []);


    const onSuccessfulPayment=()=>{
        let userData = {
            age: 18,
            code: "paymentCode",
            contact: "0700000000",
            createdBy:1,
            createdOn: new Date(),
            email:"email@email.email",
            firstName: "John",
            lastName:"Doe",
            status:"Active",
            token:btoa(new Date().toISOString()),
            updatedBy: null,
            updatedOn: null,
            userType:"Premium User",
            tableId:Math.floor(Date.now() / 1000)
        };
        GenericInsert(LoggedInUser, userData).then((loggedInUser) => {
            // createAlert('Response', JSON.stringify(loggedInUser))
            signIn();
        }).catch((error) => {
            // createAlert('error', JSON.stringify(error))
        })

    }

   
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