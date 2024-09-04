import {View} from 'react-native';
import React from 'react';

import Toast from 'react-native-toast-message';
import Navigation from './Src/Navigations';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Navigation />
      <Toast />
    </View>
  );
};

export default App;
