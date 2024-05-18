
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignIn from '../components/auth/SignIn'
import Home from '../components/main/Home';
import IconDetailsPage from '../components/main/IconDetails';
import QuizList from '../components/main/QuizList';
import Questions from '../components/main/Questions'
import ItemList from '../components/main/ItemList';
import ResultsScreen from '../components/main/ResultsScreen';
import Intro from '../components/intro/Intro';
import GetStarted from '../components/intro/GetStarted';
import QuizIcons from '../components/main/QuizIcons';

import IconsPage from '../components/main/IconsPage'
import { styles } from '../styles/Styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import LearnMore from '../components/intro/LearnMore';
import TheoryDetails from '../components/main/TheoryDetails'



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const navLayout = (header, navigation) => {
    return (
        {
            headerShown: true,
            title: header,
            headerStyle: {
                backgroundColor: '#800000',
                elevation: 0,
                shadowOpacity: 0
            },
            headerTintColor: '#F47421',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#F47421',
                width: '100%',
                textAlign: 'center',
            },
            // headerRight: () => badgedIcon(navigation)
        }
    )
}

export const badgedIcon = (props) => {

    return (
        <TouchableOpacity style={[styles.rows, styles.navIconStyle]} onPress={() => { props.navigate('Cart') }}>
            {/* <IonIcon size={25} color="#fff" name="cart" /> */}
            {/* <Badge styles={styles.badge}>0</Badge> */}
        </TouchableOpacity>
    )
}

export const IntroScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, navigationBarColor: '#fff' }}>
                <Stack.Screen initialRouteName='Intro' name="Intro" component={Intro} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export const AuthScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, navigationBarColor: '#fff' }}>
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="LearnMore" component={LearnMore} />
                <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
                <Drawer.Screen name="Home" component={Home} options={({ navigation })=>navLayout("Home", navigation)} />
                <Drawer.Screen name="ItemList" component={ItemList} options={({ navigation })=>navLayout("ItemList", navigation)} />
                <Stack.Screen name="IconsPage" component={IconsPage} options={({ navigation })=>navLayout("IconsPage", navigation)}/>
                <Stack.Screen name="IconDetailsPage" component={IconDetailsPage} options={({ navigation })=>navLayout("IconDetailsPage", navigation)}/>
                <Stack.Screen name="QuizList" component={QuizList} options={({ navigation })=>navLayout("QuizList", navigation)}/>
                <Stack.Screen name="Questions" component={Questions} options={({ navigation })=>navLayout("Questions", navigation)}/>
                <Stack.Screen name="TheoryDetails" component={TheoryDetails} options={({ navigation })=>navLayout("TheoryDetails", navigation)} />
                {/* <Stack.Screen name="ConsultMedicalWorker" component={Consultation}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export const MainScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, navigationBarColor: '#fff' }}>
                <Stack.Screen name="Home" component={Home} options={({ navigation }) => navLayout("Home", navigation)} />
                <Stack.Screen name="ItemList" component={ItemList} options={({ navigation }) => navLayout("ItemList", navigation)} />
                <Stack.Screen name="IconsPage" component={IconsPage} options={({ navigation }) => navLayout("IconsPage", navigation)} />
                <Stack.Screen name="IconDetailsPage" component={IconDetailsPage} options={({ navigation }) => navLayout("IconDetailsPage", navigation)} />
                <Stack.Screen name="QuizList" component={QuizList} options={({ navigation }) => navLayout("QuizList", navigation)} />
                <Stack.Screen name="Questions" component={Questions} options={({ navigation }) => navLayout("Questions", navigation)} />
                <Stack.Screen name="TheoryDetails" component={TheoryDetails} options={({ navigation }) => navLayout("TheoryDetails", navigation)} />
                <Stack.Screen name="QuizIcons" component={QuizIcons} options={({ navigation }) => navLayout("QuizIcons", navigation)} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


