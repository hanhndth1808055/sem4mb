import * as React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
// import Forgot from '../screens/Forgot';
// import Explore from '../screens/Explore';
// import Browse from '../screens/Browse';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';

import { theme } from '../constants';

const screens = createStackNavigator({
    Welcome,
    Login,
    SignUp,
    // Forgot,
    // Explore,
    // Browse,
    // Product,
    // Settings,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            height: theme.sizes.base * 4,
            backgroundColor: theme.colors.white, // or 'white
            borderBottomColor: "transparent",
            elevation: 0, // for android only
        },
        headerBackImage: <Image source={require('../assets/icons/back.png')} />,
        headerBackTitle: null,
        headerLeftContainerStyle: {
            alignItems: 'center',
            marginLeft: theme.sizes.base,    //for iOS multiply the value by 2
            paddingRight: theme.sizes.base,
        },
        headerRightContainerStyle: {
            alignItems: 'center',
            paddingRight: theme.sizes.base,
        },
    }
});

Welcome.defaultProps = {
    illustrations: [
        { id: 1, source: require('../assets/images/illustration_1.png') },
        { id: 2, source: require('../assets/images/illustration_2.png') },
        { id: 3, source: require('../assets/images/illustration_3.png') },
    ],
};

export default createAppContainer(screens);
