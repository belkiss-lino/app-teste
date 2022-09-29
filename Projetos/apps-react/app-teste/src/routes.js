import React from 'react';
import { Icon } from 'react-native-gradient-icon';
import { StyleSheet, Text } from 'react-native';
import { FontAwesome5, Ionicons, Feather, MaterialCommunityIcons } from 'react-native-vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Calendario from './pages/calendario';
import Notificacoes from './pages/notificacoes';
import LancamentoPonto from './pages/ponto';
import Atestados from './pages/atestados';
import Relatorio from './pages/relatorio';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator 
            screenOptions ={{
                tabBarActiveTintColor: "#000",
                tabBarInactiveTintColor: "#958f8f",
                tabBarStyle: {
                    position: 'absolute',
                    height: 110,
                    padding: 10,
                },
                tabBarLabelStyle: {
                    marginBottom: 28,
                    fontSize: 11,
                    fontWeight: 'bold',
                }
            }}>
            
            <Tab.Screen name="Calendário"
                component={Calendario}
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return <Icon  style={style.icon}
                        size={30}
                        colors={[
                            {color:"#7ee46c",offset:"0",opacity:"1"},
                            {color:"#26a2a9",offset:"1",opacity:"1"},
                            {color:"#a9ede7",offset:"1",opacity:"1"},
                        ]}
                        name="calendar-alt" type="font-awesome-5" />  
                }
                }}
            />
            <Tab.Screen name="Notificações"
                component={Notificacoes}
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return <Icon  style={style.icon}
                        size={30}
                        colors={[
                            {color:"#7ee46c",offset:"0",opacity:"1"},
                            {color:"#67e0e6",offset:"1",opacity:"1"},
                            {color:"#a9ede7",offset:"1",opacity:"1"},
                        ]}
                        name="notifications" type="ionicon" />  
                }
                }}
            />

            <Tab.Screen name="Lançar Ponto" 
                component={LancamentoPonto} 
                options={{
                    headerShown: false,
                    title: 'Lançar Ponto',
                    tabBarLabelStyle: {
                    marginBottom: 70,
                    color: '#fff',
                    fontWeight: 'bold',
                    },
                    tabBarIcon: () => {
                        return <FontAwesome5 
                        style={style.iconPonto}
                        name="user-alt" size={28}
                        />
                    }
                }}
            />

                <Tab.Screen name="Atestados"
                component={Atestados}
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return <Icon  style={style.icon}
                        size={30}
                        colors={[
                            {color:"#7ee46c",offset:"0",opacity:"1"},
                            {color:"#67e0e6",offset:"1",opacity:"1"},
                            {color:"#a9ede7",offset:"1",opacity:"1"},
                        ]}
                        name="book" type="font-awesome-5" />  
                }
                }}
            />

            <Tab.Screen name="Relatório"
                component={Relatorio}
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return <Icon  style={style.icon}
                        size={30}
                        colors={[
                            {color:"#7ee46c",offset:"0",opacity:"1"},
                            {color:"#67e0e6",offset:"1",opacity:"1"},
                            {color:"#a9ede7",offset:"1",opacity:"1"},
                        ]}
                        name="signal-cellular-3" type="material-community" />  
                }
                }}
            />
            
        </Tab.Navigator> 
    )
}

const style = StyleSheet.create({
   
    icon: {
        color: '#62e1d6',
        backgroundColor: 'white',
        paddingTop: 10,
        marginLeft: 30,
    },
    iconPonto: {
        position: 'absolute',
        width: 90,
        height: 92,
        padding: 30,
        paddingTop: 12,
        borderRadius: 60,
        backgroundColor: '#62e1d6',
        color: 'white',
    }

})