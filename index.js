/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import configureStore from './src/Store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const store = configureStore();

const DrivingSchool=()=>    
<Provider store={store}>
   
    <GestureHandlerRootView style={{ flex: 1 }}>
        <App />
    </GestureHandlerRootView>
</Provider>

AppRegistry.registerComponent(appName, () => DrivingSchool);
