import React from 'react';
import { View, Text } from 'react-native';
import { utilityStyles } from '../../styles/utilityStyles';

export const BulletList = ({ items = [], compact }) => (
  <View style={utilityStyles.bulletList}>
    {items.map((item, index) => (
      <View key={`${item}-${index}`} style={utilityStyles.bulletRow}>
        <View style={[utilityStyles.bulletDot, compact && utilityStyles.bulletDotCompact]} />
        <Text style={[utilityStyles.bulletText, compact && utilityStyles.bulletTextCompact]}>{item}</Text>
      </View>
    ))}
  </View>
);
