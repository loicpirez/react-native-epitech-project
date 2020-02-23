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

export const goHome = () => {
  return Navigation.setRoot({
    root: {
      stack: {
        id: 'Stack.home',
        children: [
          {
            component: {
              id: 'Home',
              name: 'Home'
            }
          }
        ]
      }
    }
  });
};

/* Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Overview'
                }
              }
            ],
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Cours',
                iconColor: '#6d3599',
                selectedIconColor: '#6d3599',
                icon: CalendarLight,
                selectedIcon: Calendar
              },
              topBar: {
                visible: true,
                title: {
                  component: {
                    id: 'TopBarOverview',
                    name: 'TopBarOverview',
                    alignment: 'fill'
                  }
                }
              }
            }
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Overview'
                }
              }
            ],
            options: {
              bottomTab: {
                fontSize: 12, 
                text: 'Graphs',
                iconColor: '#6d3599',
                selectedIconColor: '#6d3599',
                icon: ContactLight,
                selectedIcon: Contact
              },
              topBar: {
                visible: true,
                title: {
                  component: {
                    id: 'TopBarOverview',
                    name: 'TopBarOverview',
                    alignment: 'fill'
                  }
                }
              }
            }
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Overview'
                }
              }
            ],
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Wallet',
                iconColor: '#6d3599',
                selectedIconColor: '#6d3599',
                icon: ChatLight,
                selectedIcon: Chat
              },
              topBar: {
                visible: true,
                title: {
                  component: {
                    id: 'TopBarOverview',
                    name: 'TopBarOverview',
                    alignment: 'fill'
                  }
                }
              }
            }
          }
        }
      ]
    }
  }
});*/
