import {Navigation} from 'react-native-navigation';
import SplashScreen from '../../scenes/splash-screen';
import Home from '../../scenes/home';

export function registerScreens() {
  Navigation.registerComponent('SplashScreen', () => SplashScreen);
  Navigation.registerComponent('Home', () => Home);
}
