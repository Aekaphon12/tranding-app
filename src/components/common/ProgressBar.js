import React from 'react';
import { View } from 'react-native';
import { utilityStyles } from '../../styles/utilityStyles';

export const ProgressBar = ({ value }) => (
  <View style={utilityStyles.progressTrack}>
    <View style={[utilityStyles.progressValue, { width: `${value}%` }]} />
  </View>
);
