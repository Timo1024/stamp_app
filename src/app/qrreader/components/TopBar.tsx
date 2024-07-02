import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import { NavigationProp, RouteProp } from '@react-navigation/native';

import { colors } from '../resources/constants/colors.json';

const TopBar = ({ title }: any) => {
    return (
      <View style={styles.top_bar_view}>
        <Text style={styles.top_bar_view_title}>{ title }</Text>
      </View>
    );
};

export default TopBar;

const styles = StyleSheet.create({
  top_bar_view : {
    width: '100%',
    height: 100,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
    top_bar_view_title : {
        color: '#FFFFFF',
        fontSize: 24
    }
});