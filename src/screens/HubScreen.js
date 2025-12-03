import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { hubStyles as styles } from '../styles/hubStyles';
import { sectionStyles } from '../styles/sectionStyles';
import { ProgressBar } from '../components/common/ProgressBar';

export const HubScreen = ({ hubContent, onOpenPanel, onOpenDetail }) => {
  const { center, discoverTopics, communityRooms, learningTracks, missions, notifications, quickSignals } = hubContent;

  return (
    <>
      <LinearGradient colors={['#141828', '#070910']} style={styles.miniHero}>
        <View style={styles.miniHeroIcon}>
          <Ionicons name="people-circle" color="#46e0a0" size={20} />
        </View>
        <View>
          <Text style={styles.miniHeroTitle}>Community Hub</Text>
          <Text style={styles.miniHeroSubtitle}>เรียนรู้ เชื่อมต่อ ทำภารกิจ</Text>
        </View>
      </LinearGradient>
      <View style={sectionStyles.section}>
        <LinearGradient colors={['#141e30', '#0a0e18']} style={styles.centerCard}>
          <View style={styles.centerHead}>
            <Text style={styles.centerTitle}>{center.title}</Text>
            <Text style={styles.centerSubtitle}>{center.subtitle}</Text>
          </View>
          <View style={styles.centerMetrics}>
            {center.metrics.map((metric) => (
              <View key={metric.label} style={styles.centerMetric}>
                <Text style={styles.centerMetricValue}>{metric.value}</Text>
                <Text style={styles.centerMetricLabel}>{metric.label}</Text>
              </View>
            ))}
          </View>
        </LinearGradient>
      </View>
      <View style={sectionStyles.section}>
        <Text style={sectionStyles.sectionTitle}>Discover</Text>
        {discoverTopics.map((topic) => (
          <TouchableOpacity
            key={topic.title}
            style={styles.topicCard}
            onPress={() => (onOpenDetail ? onOpenDetail('hubMission') : onOpenPanel('hubMission'))}
          >
            <View>
              <Text style={styles.topicTag}>{topic.tag}</Text>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <Text style={styles.topicTime}>{topic.time}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#7c859f" />
          </TouchableOpacity>
        ))}
      </View>
      <View style={sectionStyles.section}>
        <View style={sectionStyles.sectionHeader}>
          <Text style={sectionStyles.sectionTitle}>Community Rooms</Text>
          <Text style={sectionStyles.sectionAction}>เข้าร่วม</Text>
        </View>
        {communityRooms.map((room) => (
          <TouchableOpacity
            key={room.name}
            onPress={() => (onOpenDetail ? onOpenDetail('copyLab') : onOpenPanel('copyLab'))}
          >
            <LinearGradient colors={['#0f141f', '#080b13']} style={styles.roomCard}>
              <Text style={styles.roomName}>{room.name}</Text>
              <Text style={styles.roomStatus}>{room.status}</Text>
              <Text style={styles.roomMembers}>{room.members}</Text>
              <View style={styles.roomHighlights}>
                {room.highlights.map((pill) => (
                  <View key={pill} style={styles.roomPill}>
                    <Text style={styles.roomPillText}>{pill}</Text>
                  </View>
                ))}
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
      <View style={sectionStyles.section}>
        <View style={sectionStyles.sectionHeader}>
          <Text style={sectionStyles.sectionTitle}>Learning Tracks</Text>
          <Text style={sectionStyles.sectionAction}>ต่อยอด</Text>
        </View>
        {learningTracks.map((track) => (
          <TouchableOpacity
            key={track.title}
            style={styles.trackCard}
            onPress={() => (onOpenDetail ? onOpenDetail('demo') : onOpenPanel('demo'))}
          >
            <View style={styles.trackHeader}>
              <View>
                <Text style={styles.trackTitle}>{track.title}</Text>
                <Text style={styles.trackMeta}>{track.level} • {track.duration}</Text>
              </View>
              <Text style={styles.trackProgressLabel}>{track.progress}%</Text>
            </View>
            <ProgressBar value={track.progress} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={sectionStyles.section}>
        <View style={sectionStyles.sectionHeader}>
          <Text style={sectionStyles.sectionTitle}>Missions</Text>
          <Text style={sectionStyles.sectionAction}>XP</Text>
        </View>
        {missions.map((mission) => (
          <TouchableOpacity
            key={mission.title}
            style={styles.missionCard}
            onPress={() => (onOpenDetail ? onOpenDetail('hubMission') : onOpenPanel('hubMission'))}
          >
            <View style={styles.missionHeader}>
              <Text style={styles.missionTitle}>{mission.title}</Text>
              <View style={[styles.missionBadge, mission.status === 'in-progress' ? styles.badgeActive : styles.badgeMuted]}>
                <Text style={styles.missionBadgeText}>{mission.status === 'in-progress' ? 'กำลังทำ' : 'ยังไม่เริ่ม'}</Text>
              </View>
            </View>
            <Text style={styles.missionReward}>{mission.reward}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={sectionStyles.section}>
        <Text style={sectionStyles.sectionTitle}>Notifications</Text>
        {notifications.map((note) => (
          <TouchableOpacity
            key={note.title}
            style={styles.notificationCard}
            onPress={() => (onOpenDetail ? onOpenDetail('hubMission') : onOpenPanel('hubMission'))}
          >
            <View>
              <Text style={styles.notificationTitle}>{note.title}</Text>
              <Text style={styles.notificationDescription}>{note.description}</Text>
            </View>
            <Text style={styles.notificationTime}>{note.time}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={sectionStyles.section}>
        <Text style={sectionStyles.sectionTitle}>Action Center</Text>
        <View style={styles.quickGrid}>
          {quickSignals.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.quickCard}
              onPress={() => (onOpenDetail ? onOpenDetail(item.label === 'Copy Signal' ? 'copyLab' : 'hubMission') : onOpenPanel(item.label === 'Copy Signal' ? 'copyLab' : 'hubMission'))}
            >
              <Text style={styles.quickLabel}>{item.label}</Text>
              <Text style={styles.quickDetail}>{item.detail}</Text>
              <Text style={styles.quickStatus}>{item.status}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};
