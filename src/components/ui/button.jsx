import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';

const Button = props => {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.title}>{props.title} </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  title: {
    color: AppColors.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});
