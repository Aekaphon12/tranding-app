import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { sectionStyles } from '../styles/sectionStyles';
import { insightsStyles as styles } from '../styles/insightsStyles';
import { InsightCards } from '../components/common/InsightCards';

export const InsightsScreen = ({ data, copy }) => {
  const { watchlist, campaigns, learning, insightsPosts } = data;

  return (
    <>
      <LinearGradient colors={['#141828', '#070910']} style={{ borderRadius: 24, padding: 20, marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <View style={{ backgroundColor: '#0f141f', padding: 12, borderRadius: 16 }}>
            <Ionicons name="sparkles" color="#46e0a0" size={20} />
          </View>
          <View>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>{copy?.insights?.heroTitle || 'FISG Pulse'}</Text>
            <Text style={{ color: '#c8d4ff' }}>{copy?.insights?.heroSubtitle}</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={sectionStyles.section}>
        <View style={sectionStyles.sectionHeader}>
          <Text style={sectionStyles.sectionTitle}>{copy?.insights?.pulseTitle || 'Pulse Feed'}</Text>
          <Text style={sectionStyles.sectionAction}>{copy?.insights?.pulseAction || 'Live'}</Text>
        </View>
        {insightsPosts.map((post) => (
          <View key={post.title} style={styles.postCard}>
            <Text style={styles.postTag}>{post.tag}</Text>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postSummary}>{post.summary}</Text>
            <Text style={styles.postTime}>{post.time}</Text>
          </View>
        ))}
      </View>
      <InsightCards
        title={copy?.insights?.marketsTitle || 'Markets Watch'}
        data={watchlist}
        renderItem={(item) => (
          <View style={styles.watchItem}>
            <View>
              <Text style={styles.price}>{item.symbol}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <Text style={item.change.startsWith('+') ? styles.changePositive : styles.changeNegative}>
              {item.change}
            </Text>
          </View>
        )}
      />
      <InsightCards
        title={copy?.insights?.campaignsTitle || 'Campaigns & Rewards'}
        data={campaigns}
        renderItem={(item) => (
          <LinearGradient colors={['#1b2735', '#05080f']} style={styles.campaign}>
            <Text style={styles.campaignTitle}>{item.title}</Text>
            <Text style={styles.campaignDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.campaignButton}>
              <Text style={styles.campaignButtonText}>{item.cta}</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
      />
      <InsightCards
        title={copy?.insights?.academyTitle || 'Academy'}
        data={learning}
        renderItem={(item) => (
          <View style={styles.learningCard}>
            <Text style={styles.learningTitle}>{item.title}</Text>
            <View style={styles.learningMeta}>
              <Ionicons name="time" color="#9ea9c6" size={14} />
              <Text style={styles.learningMetaText}>{item.minutes}</Text>
              <View style={styles.levelBadge}>
                <Text style={styles.levelText}>{item.level}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </>
  );
};
