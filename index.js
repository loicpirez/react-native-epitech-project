import {Navigation} from 'react-native-navigation';
import registerScreens from './src/navigation/screens';
//import configureAxios from './src/utils/axios/configure-axios';

registerScreens();
//configureAxios();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'SplashScreen',
      },
    },
  });
});
