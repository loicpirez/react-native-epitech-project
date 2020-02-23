import { Navigation } from 'react-native-navigation';
import SplashScreen from '../../scenes/splash-screen';
import Home from '../../scenes/home';
import Photo from '../../scenes/photo';
import Profile from '../../scenes/profile';


export function registerScreens() {
  Navigation.registerComponent('SplashScreen', () => SplashScreen);
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Profile', () => Profile);
  Navigation.registerComponent('Photo', () => Photo);
}
