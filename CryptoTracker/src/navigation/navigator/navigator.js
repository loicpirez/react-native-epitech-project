// navigation.js
import { Navigation } from 'react-native-navigation';

export const goAuth = () => {
  return Navigation.setRoot({
    root: {
      stack: {
        id: 'Stack.auth',

        children: [
          {
            component: {
              id: 'Login',
              name: 'Login',
              options: {
                topBar: {
                  visible: true,
                  title: {
                    text: 'Connexion',
                    alignment: 'center'
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
};

export const goHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Stack.home',
        children: [
          {
            component: {
              id: 'Home',
              name: 'Home',
              options: {
                topBar: {
                  visible: true,
                  title: {
                    text: 'Home',
                    alignment: 'center'
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
