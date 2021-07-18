import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './src/srceens/SignIn';
import Welcom from './src/srceens/Welcom';
import {Provider} from 'react-redux'; 
import { store } from './Redux/store';

 const navigator = createStackNavigator(
  {
   signin: SignIn,
   welcome: Welcom
   
  },
  {
    initialRouteName: 'signin',
    defaultNavigationOptions: {
       title: ' Welcome',
    },
  }

);
const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
      </Provider>
  );
};

// import React from 'react';
// import { View, Text } from 'react-native';

// export default function App() {
//     return(
//     <View>
//       <Text>tyufghjkrtyui</Text>
//     </View>
//     )
// }

