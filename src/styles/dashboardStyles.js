import { StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
  hero: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 20
  },
  heroEyebrow: {
    color: '#c8d4ff',
    fontSize: 12,
    letterSpacing: 1.2,
    marginBottom: 8,
    textTransform: 'uppercase'
  },
  heroTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700'
  },
  heroSubtitle: {
    color: '#dce2ff',
    marginTop: 8,
    lineHeight: 20
  },
  heroButtons: {
    flexDirection: 'row',
    marginTop: 18,
    gap: 12
  },
  heroPrimary: {
    backgroundColor: '#46e0a0',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 16
  },
  heroPrimaryText: {
    color: '#041b12',
    fontWeight: '600'
  },
  heroGhost: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#46e0a0'
  },
  heroGhostText: {
    color: '#fff'
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  statCard: {
    flex: 1,
    backgroundColor: '#0c1220',
    borderRadius: 18,
    padding: 16,
    marginHorizontal: 5
  },
  statAccent: {
    borderWidth: 1,
    borderColor: '#46e0a0'
  },
  statLabel: {
    color: '#9ea9c6',
    fontSize: 12,
    marginBottom: 6
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 12,
    rowGap: 12
  },
  actionCard: {
    flexBasis: '48%',
    borderRadius: 18,
    padding: 16,
    alignItems: 'center',
    minHeight: 96,
    justifyContent: 'center'
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center'
  },
  portfolio: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 20
  },
  portfolioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portfolioLabel: {
    color: '#9ea9c6'
  },
  portfolioValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  progressBar: {
    height: 6,
    borderRadius: 20,
    backgroundColor: '#15192a',
    marginTop: 18
  },
  progressFill: {
    width: '60%',
    backgroundColor: '#46e0a0',
    height: '100%',
    borderRadius: 20
  },
  progressLabel: {
    color: '#9ea9c6',
    marginTop: 12
  },
  positionCard: {
    backgroundColor: '#0c1220',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14
  },
  positionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  symbol: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  positionMeta: {
    color: '#9ea9c6',
    marginTop: 4
  },
  pnl: {
    fontSize: 16,
    fontWeight: '600'
  },
  positive: {
    color: '#46e0a0'
  },
  negative: {
    color: '#ff6d7a'
  },
  positionBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12
  },
  meta: {
    width: '50%',
    marginBottom: 8
  },
  metaLabel: {
    color: '#9ea9c6',
    fontSize: 12
  },
  metaValue: {
    color: '#fff',
    fontWeight: '600'
  },
  signalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  signalMeta: {
    color: '#9ea9c6',
    marginTop: 4
  },
  confidenceBadge: {
    alignItems: 'flex-end'
  },
  confidenceText: {
    color: '#46e0a0',
    fontSize: 18,
    fontWeight: '700'
  },
  confidenceLabel: {
    color: '#9ea9c6',
    fontSize: 12
  },
  signalExpire: {
    marginTop: 10,
    color: '#9ea9c6'
  },
  botCard: {
    borderRadius: 22,
    padding: 18,
    marginBottom: 12
  },
  botHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  botName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  botTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#11162a',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20
  },
  botTagText: {
    color: '#46e0a0',
    fontSize: 12,
    fontWeight: '600'
  },
  botReturn: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 12
  },
  botFollowers: {
    color: '#9ea9c6',
    marginTop: 6
  },
  calendarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0c1220',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12
  },
  calendarBadge: {
    backgroundColor: '#151b2f',
    borderRadius: 12,
    padding: 10,
    marginRight: 12
  },
  calendarBadgeText: {
    color: '#46e0a0',
    fontWeight: '600'
  },
  calendarContent: {
    flex: 1
  },
  calendarTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  calendarTime: {
    color: '#9ea9c6',
    marginTop: 4
  },
  calendarImpact: {
    fontWeight: '600'
  },
  impactHigh: {
    color: '#ff6d7a'
  },
  impactMedium: {
    color: '#e7c74a'
  },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0c1220',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    gap: 12
  },
  alertContent: {
    flex: 1
  },
  alertTitle: {
    color: '#fff',
    fontWeight: '600'
  },
  alertDescription: {
    color: '#9ea9c6',
    marginTop: 4
  },
  radarCard: {
    borderRadius: 20,
    padding: 18,
    marginBottom: 12
  },
  radarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  radarMarket: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  radarBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1
  },
  radarBadgeBull: {
    borderColor: '#46e0a0'
  },
  radarBadgeNeutral: {
    borderColor: '#e7c74a'
  },
  radarBadgeText: {
    fontWeight: '600'
  },
  radarBadgeTextBull: {
    color: '#46e0a0'
  },
  radarBadgeTextNeutral: {
    color: '#e7c74a'
  },
  radarStrengthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  radarStrengthLabel: {
    color: '#9ea9c6'
  },
  radarStrengthValue: {
    color: '#fff',
    fontWeight: '700'
  },
  radarDrivers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12
  },
  radarDriverPill: {
    backgroundColor: '#192030',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16
  },
  radarDriverText: {
    color: '#c8d4ff',
    fontSize: 12
  },
  taskCard: {
    backgroundColor: '#0c1220',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  taskStatus: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    borderWidth: 1
  },
  taskDone: {
    borderColor: '#46e0a0'
  },
  taskPending: {
    borderColor: '#e7c74a'
  },
  taskStatusText: {
    color: '#c8d4ff',
    fontSize: 12
  },
  taskDescription: {
    color: '#9ea9c6',
    marginTop: 8
  }
});
