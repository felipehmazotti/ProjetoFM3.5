// App.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import TarefasScreen from './apptarefas';
import CalendarioScreen from './appcalendario';
import LoginScreen from './AppLogin';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'Tarefas') {
              iconName = 'list';
            } else if (route.name === 'Calendário') {
              iconName = 'date-range';
            } else if (route.name === 'Login') {
              iconName = 'login';
            }

            return <MaterialIcons name={iconName} size={24} color={color} />;
          },
          tabBarLabel: () => null,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: [
            {
              display: 'flex'
            },
            null
          ]
        })}
      >
        <Tab.Screen name="Tarefas" component={TarefasScreen} />
        <Tab.Screen name="Calendário" component={CalendarioScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
