import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated, StatusBar, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../services/Context';
import { LoggedInUser, GenericInsert, GenericQueryAll } from '../../databases/allSchemas';
import { postToServer, postToServerWithToken } from '../../services/RemoteService';
import { useDispatch, useSelector,Provider } from 'react-redux';
import { addUserData } from '../../actions/UserData';

const SignIn = (props: any) => {

    useEffect(() => {
       
    });

    const goToHome = () => {
        props.navigation.navigate('Home');
    }

    return (
        <ScrollView style={styles.backgroundWhite}>
            <View style={[styles.padding]}>
            <View style={styles.marginBottom}>
                    <Text>Sign In</Text>
                </View>
     
                <View style={styles.marginBottom}>
                    <TouchableOpacity style={styles.touchableButton} onPress={goToHome}>
                        <Text style={styles.healthPalWhite}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.marginBottom, styles.itemCenter]}>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={styles.healthPalBlue}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignIn;