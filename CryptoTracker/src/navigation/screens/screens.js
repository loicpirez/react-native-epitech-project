import {Navigation} from 'react-native-navigation';
import SplashScreen from '../../scenes/splash-screen';
import Login from '../../scenes/login';
import RegisterMail from '../../scenes/register/register-mail';
import RegisterPassword from '../../scenes/register/register-password';
import Home from '../../scenes/home';

export function registerScreens() {
  Navigation.registerComponent('SplashScreen', () => SplashScreen);
  Navigation.registerComponent('Login', () => Login);
  Navigation.registerComponent('RegisterMail', () => RegisterMail);
  Navigation.registerComponent('RegisterPassword', () => RegisterPassword);
  Navigation.registerComponent('Home', () => Home);
}
