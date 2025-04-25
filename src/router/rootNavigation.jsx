import {Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, MYNOTES, NOTEDETAIL} from '../utils/router';
import MyNote from '../screens/myNote';
import AddNote from '../screens/addNote';
import NoteDetail from '../screens/noteDetail';
import HeaderRight from '../components/ui/headerRight';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNote}
      />
      <Stack.Screen
        options={{
          headerRight: () => <HeaderRight />,
        }}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
