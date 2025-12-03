import React from 'react';
import { View, Text } from 'react-native';
import { utilityStyles } from '../../styles/utilityStyles';

export const MetaInfo = ({ label, value }) => (
  <View style={utilityStyles.meta}>
    <Text style={utilityStyles.metaLabel}>{label}</Text>
    <Text style={utilityStyles.metaValue}>{value}</Text>
  </View>
);
