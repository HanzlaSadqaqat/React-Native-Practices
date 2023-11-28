import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
// import { RouteProp } from '@react-navigation/native'

export type RouterParams = {
    Home: undefined;
    Details: undefined;
    DesignPage: undefined

};
export type navigationProp = BottomTabNavigationProp<RouterParams>
// export type routerProp = RouteProp<RouterParams>

export type props = {
    navigation: navigationProp
    // route: routerProp
}