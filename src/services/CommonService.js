import React from 'react';
import { View, Text, Alert, StatusBar, Platform } from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';
// import PushNotification from "react-native-push-notification";
// import NetInfo from "@react-native-community/netinfo";
// import Toast from 'react-native-toast-message';


export const createAlert = (title, message) =>
    Alert.alert(
        title,
        message,
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );

export const mailValidation = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) == false) {
        return false;
    } else {
        return true
    }
}

export const validatePhone = (phone) => {
    let reg = /^(\d{10}|\d{12})$/;
    if (reg.test(phone) == false) {
        return false
    } else {
        return true
    }
}

export const setStatusBar = (backgroundColor, contentColor, translucent, hidden,) => {
    return (
        <StatusBar
            animated={true}
            backgroundColor={backgroundColor}
            barStyle={contentColor}    //['default', 'dark-content', 'light-content'];
            showHideTransition={'fade'}
            translucent={translucent}
            hidden={hidden} />
    )
}

export const formatText = (text) => {
    return text.replace(/[^+\d]/g, '');
};

export const logout = (props) => {
    return props.navigation.navigate('SignIn')
}


export const appColor=()=>{
    return '#800000';
}

export const filter=(array, filter)=>{
    return array.filter(element => element.indicator == filter);
}

export const findObj=(array, filter)=>{
    return array.find(element => element.indicator == filter);
}