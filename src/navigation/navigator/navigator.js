// navigation.js
import {Navigation} from 'react-native-navigation';

export const goHome = () => {
  return Navigation.setRoot({
    root: {
      stack: {
        id: 'Stack.home',
        children: [
          {
            component: {
              id: 'Home',
              name: 'Home',
            },
          },
        ],
      },
    },
  });
};
