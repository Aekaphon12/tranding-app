import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { sectionStyles } from '../../styles/sectionStyles';
import { dashboardStyles } from '../../styles/dashboardStyles';

export const QuickActionGrid = ({
  title = 'Quick Actions',
  actions = [],
  onOpenPanel,
  onOpenDetail,
  copy,
  language
}) => (
  <View style={sectionStyles.section}>
    <View style={sectionStyles.sectionHeader}>
      <Text style={sectionStyles.sectionTitle}>{title}</Text>
    </View>
    <View style={dashboardStyles.actionRow}>
      {actions.map((action) => {
        const label = (copy?.quickActions && copy.quickActions[action.labelKey]) || action.label;
        return (
          <TouchableOpacity
            key={action.id || action.label || action.labelKey}
            style={{ flexBasis: '48%' }}
            onPress={() => {
              if (action.detail && onOpenDetail) return onOpenDetail(action.detail);
              if (action.panel) return onOpenPanel(action.panel);
            }}
          >
            <LinearGradient colors={action.background} style={dashboardStyles.actionCard}>
              <Ionicons name={action.icon} color="#fff" size={22} />
              <Text style={dashboardStyles.actionText}>{label}</Text>
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);
