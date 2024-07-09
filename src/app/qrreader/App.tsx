/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SQLite from 'react-native-sqlite-storage';

import { initializeDatabase, closeDatabase } from './services/database';

import CameraComponent from './components/CameraComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TitleScreen from './components/TitleScreen';
import ScannerScreen from './components/ScannerScreen';
import DBDebugScreen from './components/DBListScreen';

// import resources
import { colors } from './resources/constants/colors.json';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createStackNavigator();

function App(): React.JSX.Element {

  useEffect(() => {
    let db: SQLite.SQLiteDatabase | undefined;

    const setupDatabase = async () => {
      db = await initializeDatabase();
    };

    setupDatabase();

    return () => {
      closeDatabase(db);
    };
  }, []);

  return (
    <NavigationContainer theme={{
      dark: true,
      colors: {
        background: colors.primary,
        primary: '',
        card: '',
        text: '',
        border: '',
        notification: ''
      },
    }}>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <Stack.Navigator initialRouteName="Title" >
        <Stack.Screen name="Title" component={TitleScreen} options={{headerShown: false}} />
        <Stack.Screen name="Scanner" component={ScannerScreen} options={{headerShown: false}} />
        <Stack.Screen name="DBList" component={DBDebugScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }
});

export default App;
