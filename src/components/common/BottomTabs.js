import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { componentStyles } from '../../styles/componentStyles';

export const BottomTabs = ({ tabs, activeTab, onChange, copy, language }) => (
  <View style={componentStyles.bottomNav}>
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab.key}
        style={[componentStyles.navButton, activeTab === tab.key && componentStyles.navButtonActive]}
        onPress={() => onChange(tab.key)}
      >
        <Ionicons
          name={tab.icon}
          size={20}
          color={activeTab === tab.key ? '#46e0a0' : '#7c859f'}
        />
        <Text style={[componentStyles.navLabel, activeTab === tab.key && componentStyles.navLabelActive]}>
          {(copy?.tabs && copy.tabs[tab.labelKey]) || tab.label || tab.labelKey || language}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
