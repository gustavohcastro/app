import { createStackNavigator} from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';
import { createAppContainer } from 'react-navigation';


const Routes =  createStackNavigator({
        Main,
        Product
    },
    {
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#DA552f'
                },
                headerTintColor: '#fff'
            }
        }
    );

const AppContainer = createAppContainer(Routes);

export default AppContainer;