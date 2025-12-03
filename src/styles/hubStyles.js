import { StyleSheet } from 'react-native';

export const hubStyles = StyleSheet.create({
  miniHero: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderRadius: 24,
    padding: 20,
    marginBottom: 20
  },
  miniHeroIcon: {
    backgroundColor: '#0f141f',
    padding: 12,
    borderRadius: 16
  },
  miniHeroTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600'
  },
  miniHeroSubtitle: {
    color: '#c8d4ff'
  },
  centerCard: {
    borderRadius: 24,
    padding: 20
  },
  centerHead: {
    marginBottom: 16
  },
  centerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700'
  },
  centerSubtitle: {
    color: '#c8d4ff',
    marginTop: 6
  },
  centerMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  centerMetric: {
    alignItems: 'center',
    flex: 1
  },
  centerMetricValue: {
    color: '#46e0a0',
    fontSize: 20,
    fontWeight: '700'
  },
  centerMetricLabel: {
    color: '#9ea9c6',
    marginTop: 4
  },
  topicCard: {
    backgroundColor: '#0c1220',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  topicTag: {
    color: '#46e0a0',
    fontWeight: '600',
    marginBottom: 4
  },
  topicTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  topicTime: {
    color: '#9ea9c6',
    marginTop: 4
  },
  roomCard: {
    borderRadius: 20,
    padding: 18,
    marginBottom: 12
  },
  roomName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  roomStatus: {
    color: '#46e0a0',
    marginTop: 4
  },
  roomMembers: {
    color: '#9ea9c6',
    marginTop: 4
  },
  roomHighlights: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    gap: 6
  },
  roomPill: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#15192a'
  },
  roomPillText: {
    color: '#c8d4ff',
    fontSize: 12
  },
  trackCard: {
    backgroundColor: '#0c1220',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12
  },
  trackHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  trackTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  trackMeta: {
    color: '#9ea9c6',
    marginTop: 4
  },
  trackProgressLabel: {
    color: '#46e0a0',
    fontWeight: '700'
  },
  missionCard: {
    backgroundColor: '#0c1220',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12
  },
  missionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  missionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  missionBadge: {
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4
  },
  badgeActive: {
    backgroundColor: 'rgba(70, 224, 160, 0.1)',
    borderWidth: 1,
    borderColor: '#46e0a0'
  },
  badgeMuted: {
    backgroundColor: 'rgba(255,255,255,0.06)'
  },
  missionBadgeText: {
    color: '#c8d4ff',
    fontSize: 12
  },
  missionReward: {
    color: '#46e0a0',
    marginTop: 8,
    marginBottom: 6,
    fontWeight: '600'
  },
  notificationCard: {
    backgroundColor: '#0c1220',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16
  },
  notificationTitle: {
    color: '#fff',
    fontWeight: '600'
  },
  notificationDescription: {
    color: '#c8d4ff',
    marginTop: 4
  },
  notificationTime: {
    color: '#7c859f',
    fontSize: 12
  },
  quickGrid: {
    flexDirection: 'row',
    gap: 12
  },
  quickCard: {
    flex: 1,
    backgroundColor: '#0c1220',
    borderRadius: 18,
    padding: 16
  },
  quickLabel: {
    color: '#9ea9c6',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  quickDetail: {
    color: '#fff',
    fontWeight: '600',
    marginTop: 6
  },
  quickStatus: {
    color: '#46e0a0',
    marginTop: 10
  }
});
