import { StyleSheet } from 'react-native';

export const insightsStyles = StyleSheet.create({
  watchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  changePositive: {
    color: '#46e0a0'
  },
  changeNegative: {
    color: '#ff6d7a'
  },
  campaign: {
    borderRadius: 18,
    padding: 18
  },
  campaignTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  campaignDescription: {
    color: '#c8d4ff',
    marginVertical: 12
  },
  campaignButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: '#46e0a0'
  },
  campaignButtonText: {
    color: '#03190f',
    fontWeight: '600'
  },
  learningCard: {
    gap: 12
  },
  learningTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  learningMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  learningMetaText: {
    color: '#9ea9c6'
  },
  levelBadge: {
    backgroundColor: '#202945',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20
  },
  levelText: {
    color: '#46e0a0',
    fontSize: 12,
    fontWeight: '600'
  },
  postCard: {
    backgroundColor: '#0c1220',
    borderRadius: 20,
    padding: 18,
    marginBottom: 12
  },
  postTag: {
    color: '#46e0a0',
    fontWeight: '600',
    marginBottom: 6
  },
  postTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  postSummary: {
    color: '#c8d4ff',
    marginTop: 6
  },
  postTime: {
    color: '#7c859f',
    marginTop: 8,
    fontSize: 12
  }
});
