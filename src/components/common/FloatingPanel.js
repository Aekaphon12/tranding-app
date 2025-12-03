import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { componentStyles } from '../../styles/componentStyles';
import { BulletList } from './BulletList';

export const FloatingPanel = ({ panelKey, panelContent, onClose }) => {
  if (!panelKey || !panelContent[panelKey]) return null;
  const panel = panelContent[panelKey];

  return (
    <View style={componentStyles.panelOverlay}>
      <View style={componentStyles.panelCard}>
        <View style={componentStyles.panelHeader}>
          <View>
            <Text style={componentStyles.panelTitle}>{panel.title}</Text>
            <Text style={componentStyles.panelSubtitle}>{panel.subtitle}</Text>
          </View>
          <TouchableOpacity onPress={onClose} style={componentStyles.panelClose}>
            <Ionicons name="close" size={20} color="#9ea9c6" />
          </TouchableOpacity>
        </View>
        <BulletList items={panel.highlights} />
        <TouchableOpacity style={[componentStyles.panelCta, { backgroundColor: panel.accent || '#46e0a0' }]}>
          <Text style={componentStyles.panelCtaText}>{panel.cta}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
