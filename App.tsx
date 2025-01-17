import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AuthScreen, IntroScreen, MainScreen } from './src/navigation/Navigation';
import { AuthContext } from './src/services/Context';
import { LoggedInUser, System, GenericQueryAll, GenericQueryWhere } from './src/databases/allSchemas';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const initialLoginState = { isLoading: true, userToken: null, userName: null, isIntroDone: false }

  useEffect(() => {

    checkIntro();
    checkLogIn();
   
  }, []);

  const loginReducer = (prevState:any, action:any) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          isIntroDone: action.intro
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          userName: action.id,
          isLoading: false,
          isIntroDone: action.intro
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          userName: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.token,
          userName: action.id,
          isLoading: false,
        };
      case 'INTRO':
        return {
          isIntroDone: action.intro
        }
    }
  }

  const authContext = React.useMemo(() => ({
    signIn: () => {
      dispatch({ type: 'LOGIN', id: 'name', token: 'token' });
    },
    signOut: () => {
      dispatch({ type: 'LOGOUT', intro: true });
    },
    signUp: () => {

    },
    intro: () => {
      dispatch({ type: 'INTRO', intro: true });
    }
  }), []);

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState,);


    /**
   * check if the intro screen has been seen
   */
    const checkIntro = () => {
      GenericQueryWhere(System, 'key == "INTRO" AND done == true').then((results:any) => {
        if (results == undefined || results.length < 1) {
        } else {
          dispatch({type: 'INTRO', intro: results[0].done});
        }
      }).catch((error) => { });
    }

      /**
   * check if the user is logged in then go to home page
   */
  const checkLogIn = () => {
    GenericQueryAll(LoggedInUser).then((LoggedInUser:any) => {
      if (LoggedInUser == undefined || LoggedInUser.length < 1) {
      } else {
        updateAppStatus(LoggedInUser);
      }
    }).catch((error) => { })
  }

  const updateAppStatus = (LoggedInUser:any)=>{
    dispatch({ type: 'RETRIEVE_TOKEN', id: LoggedInUser[0].firstName, token: LoggedInUser[0].token, intro: true });
  }
  

  return (
    <AuthContext.Provider value={authContext} >
      {
        (loginState.userToken != null)?(
          <MainScreen />
        ):(loginState.isIntroDone == true)?(
          <AuthScreen />
        ):(
          <IntroScreen />
        )
      }
      {/* <IntroScreen/> */}
    </AuthContext.Provider>
//     <SafeAreaView>
//       <ScrollView>
// <Text>Testing</Text>
//       </ScrollView>
//     </SafeAreaView>
  );
}


export default App;
