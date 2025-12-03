import React from 'react';
import { View, Text } from 'react-native';
import { sectionStyles } from '../../styles/sectionStyles';

export const InsightCards = ({ title, data = [], renderItem }) => (
  <View style={sectionStyles.section}>
    <Text style={sectionStyles.sectionTitle}>{title}</Text>
    {data.map((item) => (
      <View key={item.title || item.symbol} style={sectionStyles.sectionCard}>
        {renderItem(item)}
      </View>
    ))}
  </View>
);
